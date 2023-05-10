import styles from '../styles/Profile.module.css'
import Navbar from '../components/navbar/Navbar'
import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { CountUp, CountUpOptions } from 'countup.js'
import ProfileTabs from '../components/profile-tabs/ProfileTabs'
import ProfileBlock from '../components/profile-block/ProfileBlock'

const Profile = () => {



    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <ProfileBlock />
                <div className={styles["content-container"]}>
                    <ProfileTabs />
                </div>
            </div>
        </>

    )
}

export default Profile