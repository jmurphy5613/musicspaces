import styles from '../styles/Profile.module.css'
import Navbar from '../components/navbar/Navbar'
import ProfileTabs from '../components/profile-tabs/ProfileTabs'
import ProfileBlock from '../components/profile-block/ProfileBlock'
import { useEffect, useState } from 'react'
import TopSongs from '../components/top-songs/TopSongs'
import TopArtists from '../components/top-artists/TopArtists'
import AOS from 'aos'

const Profile = () => {

    const [currentTab, setUserTab] = useState('Top Artists')

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <ProfileBlock />
                <div className={styles["content-container"]}>
                    <ProfileTabs currentTab={currentTab} setUserTab={setUserTab} />
                    {
                        currentTab == 'Top Songs' ? <TopSongs /> : <></>
                    }
                    {
                        currentTab == 'Top Artists' ? <TopArtists /> : <></>
                    }
                </div>
            </div>
        </>

    )
}

export default Profile