import Image from "next/image"
import styles from './ProfileTabs.module.css'

const ProfileTabs = () => {


    return (
        <div className={styles.navigation}>
            <div className={styles["navigation-item"]}>
                <div className={styles["navigation-image-container"]}>
                    <Image
                        src='/sound_light.svg'
                        fill
                        alt='sound icon'
                    />
                </div>
                <h2 className={styles["navigation-label"]}>Top Songs</h2>
            </div>
            <div className={styles.overlay} />
        </div>
    )
}

export default ProfileTabs