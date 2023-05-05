import styles from '../styles/Profile.module.css'
import Navbar from '../components/navbar/Navbar'

const Profile = () => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles["user-container"]}>
                    <div className={styles["user-info-container"]}>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Profile