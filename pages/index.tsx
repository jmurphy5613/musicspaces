import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from '../styles/Home.module.css'
import NameModal from "../components/name-modal/NameModal";
import { auth, getAccessToken } from "../utils/requests/auth";

export default function Home() {
    const router = useRouter();

    const [showModal, setShowModal] = useState(false)

    const getToken = async (code: string) => {
        const data = await getAccessToken(code as string)
        localStorage.setItem('access_token', data.access_token)
        router.push('/profile')
    }


    useEffect(() => {
        //get code router parameter and send it to getAccessToken
        if (router.isReady) {
            const code = router.query.code;
            if (code) {
                getToken(code as string)
            }
        }
    }, [router.isReady])

    return (
        <div className={styles.container}>
            <input />
            <button className={styles.login} onClick={() => {
                // setShowModal(true)
                auth(router)
            }}>Login</button>
            {showModal && <NameModal />}
        </div>
    );
}
