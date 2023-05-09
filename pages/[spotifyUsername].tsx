import styles from '../styles/Profile.module.css'
import Navbar from '../components/navbar/Navbar'
import Image from 'next/image'

const Profile = () => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles["user-container"]}>
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
                            <div style={{ display: 'flex' }}>
                                <h3>6 followers</h3>
                                <h3></h3>
                                <h3>6 following</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Profile