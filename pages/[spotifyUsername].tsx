import styles from '../styles/Profile.module.css'
import Navbar from '../components/navbar/Navbar'
import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { CountUp } from 'countup.js'


const Profile = () => {

    const countupRef = useRef('0')
    let countup: CountUp

    useEffect(() => {
        initCountUps()
    }, [])

    async function initCountUps() {
        const countUpModule = await import('countup.js');
        countup = new countUpModule.CountUp(countupRef.current, 128)
        if (!countup.error) {
          countup.start()
        } else {
          console.error(countup.error)
        }
    }

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles["user-container"]}>

                    <button className={styles["open-in-spotify"]}>
                        <div className={styles["spotify-logo-parent"]}>
                            <Image 
                                src="/spotify-logo-white.svg"
                                fill
                                alt='spotify logo'
                            />
                        </div>
                        <h3 className={styles["spotify-button-label"]}>open in spotify</h3>
                    </button>

                    <div className={styles["user-info-container"]}>
                        <div className={styles["image-container"]}>
                            <Image 
                                src="/johntransparent.png"
                                alt='profile picture'
                                fill
                                style={{borderRadius: '100%'}}
                            />
                        </div>
                        <div className={styles["user-description"]}>
                            <div style={{ display: 'flex', alignItems: 'flex-end', width: '50%' }}>
                                <h1 className={styles.name}>John Murphy</h1>
                                <h3 className={styles.username}>@jmurphy5613</h3>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <h3 className={styles["following-stat"]} style={{ padding: '0.5rem', paddingLeft: '0' }}>6 followers</h3>
                                <h3>•</h3>
                                <h3 className={styles["following-stat"]} style={{ padding: '0.5rem' }}>6 following</h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles["user-facts"]}>
                        <div className={styles.fact}>
                            <h1 ref={countupRef as unknown as React.RefObject<HTMLDivElement>} className={styles.figure}></h1>
                            <h3 className={styles["figure-description"]}>unique songs</h3>
                        </div>
                        <div className={styles.fact}>
                            <h1 className={styles.figure}></h1>
                            <h3 className={styles["figure-description"]}>hours listened</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Profile