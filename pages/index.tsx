import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from '../styles/Home.module.css'
import NameModal from "../components/name-modal/NameModal";

export default function Home() {
    const router = useRouter();

    const [showModal, setShowModal] = useState(false)


    useEffect(() => {
    }, [router.isReady])

    return (
        <div className={styles.container}>

            <button className={styles.login} onClick={() => {
                setShowModal(true)
            }}>Login</button>
            {showModal && <NameModal />}
        </div>
    );
}
