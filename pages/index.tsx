import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from '../styles/Home.module.css'
import NameModal from "../components/name-modal/NameModal";
import { auth, getAccessToken } from "../utils/requests/auth";
import Navbar from "../components/navbar/Navbar";
import Image from "next/image";

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
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles["background-images"]}>
                    <div className={styles["image-container"]}>
                        <Image 
                            src='/Vector2.svg'
                            alt="vector"
                            fill
                        />
                    </div>

                    <div className={styles["image-container"]}>
                        <Image 
                            src='/Vector.svg'
                            alt="vector"
                            fill
                        />
                    </div>

                </div>

            
            
                {/* <button className={styles.login} onClick={() => {
                    // setShowModal(true)
                    auth(router)
                }}>Login</button>
                {showModal && <NameModal />} */}
            </div>
        </>

    );
}
