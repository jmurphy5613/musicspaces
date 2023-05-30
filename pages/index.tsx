import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from '../styles/Home.module.css'
import { getAccessToken, auth } from "../utils/requests/auth";
import Navbar from "../components/navbar/Navbar";
import Image from "next/image";
import 'aos/dist/aos.css';
import AOS, { refresh } from 'aos'
import { duplicatedUserItems } from "../utils/data";
import { refreshToken } from "../utils/requests/auth";
import UsernamePopup from "../components/username-popup/UsernamePopup";

export default function Home() {
    const router = useRouter();

    const [showModal, setShowModal] = useState(false)

    const getToken = async (code: string) => {
        const data = await getAccessToken(code as string)
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('refresh_token', data.refresh_token)
        router.push('/jmurphy5613')
    }

    const handleLogin = async () => {
        //if there is already a refresh token, get a new access token
        const currentRefreshToken = localStorage.getItem('refresh_token')

        if (currentRefreshToken != null) {
            const newAccessToken = await refreshToken(currentRefreshToken)
            localStorage.setItem('access_token', newAccessToken.access_token)
            router.push('/jmurphy5613')
        } else {
            auth(router)
        }
    }




    useEffect(() => {

        AOS.init()

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
            {/* <UsernamePopup /> */}
            <Navbar />
            <div className={styles.container}>
                <div className={styles["background-images"]}>
                    <div className={styles["image-container"]}>
                        <Image 
                            src='/art/Vector2.svg'
                            alt="vector"
                            fill
                        />
                    </div>

                    <div className={styles["image-container"]}>
                        <Image 
                            src='/art/Vector.svg'
                            alt="vector"
                            fill
                        />
                    </div>

                </div>
                <div className={styles["landing-text-container"]}>
                    <h1 className={styles["landing-title"]} data-aos="fade-up">connect over music with your friends</h1>
                    <h3 className={styles["landing-description"]} data-aos="fade-up" data-aos-delay="100">Discover new music, compare your tastes, and connect with friends.</h3>
                    <button className={styles["spotify-login-button"]} onClick={() => {
                        handleLogin()
                    }} data-aos="fade-up" data-aos-delay="200">
                        <h2 className={styles["button-label"]}>Sign in</h2>
                        <div className={styles["button-image-container"]}>
                            <Image 
                                src='/icons/spotify-logo-black.svg'
                                alt='spotify-logo'
                                fill
                            />
                        </div>

                    </button>
                </div>
                <div className={styles["demo-image-container"]} data-aos="zoom-in-up">
                    <Image 
                        src='/art/demo-view.svg'
                        alt="demo view"
                        fill
                    />
                </div>
                <div className={styles["new-container"]}>
                    <h2 className={styles["registered-title"]}>Join these recent users:</h2>
                    <div className={styles["slider-container"]}>
                        <div className={styles["slider-animation"]}>
                            {duplicatedUserItems.map((item, index) => {
                                return (
                                    <div className={styles.user} key={index}>
                                        <div className={styles["profile-image-container"]}>
                                            <Image
                                                fill 
                                                src={item.image}
                                                alt="user-image"
                                                style={{ borderRadius: '100%' }}
                                            />
                                        </div>
                                        <h3 className={styles.username}>{item.username}</h3>
                                    </div>
                                )
                            })}
                        </div>
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
