import styles from '../styles/Profile.module.css'
import Navbar from '../components/navbar/Navbar'
import ProfileTabs from '../components/profile-tabs/ProfileTabs'
import ProfileBlock from '../components/profile-block/ProfileBlock'
import { useState } from 'react'

const Profile = () => {

    const [currentTab, setUserTab] = useState('Top Songs')

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <ProfileBlock />
                <div className={styles["content-container"]}>
                    <ProfileTabs currentTab={currentTab} setUserTab={setUserTab} />
                    
                </div>
            </div>
        </>

    )
}

export default Profile