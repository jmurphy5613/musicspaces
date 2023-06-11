import styles from '../styles/Profile.module.css'
import Navbar from '../components/navbar/Navbar'
import ProfileTabs from '../components/profile-tabs/ProfileTabs'
import ProfileBlock from '../components/profile-block/ProfileBlock'
import { useEffect, useState } from 'react'
import TopSongs from '../components/top-songs/TopSongs'
import TopArtists from '../components/top-artists/TopArtists'
import AOS from 'aos'
import { useRouter } from 'next/router'

const Profile = () => {

    const [currentTab, setUserTab] = useState('Top Artists')
    const [username, setUsername] = useState('')

    const router = useRouter()

    useEffect(() => {
        if(!router.isReady) {
            return
        }
        const { musicspacesUsername } = router.query
        setUsername(musicspacesUsername as string)
        console.log(musicspacesUsername)

        AOS.init()    
    }, [router.isReady])

    if(!username) {
        return <></>
    }

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <ProfileBlock />
                <div className={styles["content-container"]}>
                    <ProfileTabs currentTab={currentTab} setUserTab={setUserTab} />
                    {
                        currentTab == 'Top Songs' ? <TopSongs musicspacesUsername={username} /> : <></>
                    }
                    {
                        currentTab == 'Top Artists' ? <TopArtists musicspacesUsername={username} /> : <></>
                    }
                </div>
            </div>
        </>

    )
}

export default Profile