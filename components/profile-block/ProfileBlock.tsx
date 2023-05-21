import Image from "next/image"
import styles from './ProfileBlock.module.css'
import { useRef, useEffect, useState, use } from 'react'
import { CountUp, CountUpOptions } from "countup.js"
import { RecentlyPlayedStats, UserInfo } from "../../utils/types"
import { getUserInfo, getRecentlyPlayed } from "../../utils/requests/users"
import { get24HoursAgoUnix, recentlyPlayedToStats } from "../../utils/conversions"

const ProfileBlock = () => {

    const countupRef1 = useRef('0')
    const countupRef2 = useRef('0')

    let countup: CountUp
    let countup2: CountUp

    const [userInfo, setUserInfo] = useState<UserInfo>()
    const [recentStats, setRecentStats] = useState<RecentlyPlayedStats>()

    const [dataFetched, setDataFetched] = useState(false)


    const fetchUserInfo = async () => {
        const userInfo = await getUserInfo()
        const recentlyPlayed = await getRecentlyPlayed()
        //iterate through each recently played song and print the unix timestamp
        recentlyPlayed.forEach((item) => {
            const date =new Date(item.played_at)
            const unixTimeSeconds = Math.floor(date.getTime() / 1000);
            if(unixTimeSeconds < get24HoursAgoUnix()) {
                recentlyPlayed.pop()
            }
        })
        const stats:RecentlyPlayedStats = recentlyPlayedToStats(recentlyPlayed)
        console.log(stats)
        setRecentStats(stats)
        setUserInfo(userInfo)
        setDataFetched(true)
    }

    useEffect(() => {
        fetchUserInfo()
    }, [])

    useEffect(() => {
        initCountUps()
    }, [dataFetched])

    //create options variable for countup
    const options:CountUpOptions = {
        duration: 2,
        useEasing: true,
        useGrouping: true,
    }


    async function initCountUps() {
        if(!recentStats?.totalLength || !recentStats?.uniqueArtists) return console.error('recent stats not loaded')

        const countUpModule = await import('countup.js');
        countup = new countUpModule.CountUp(countupRef1.current, recentStats.totalTracks, options)
        countup2 = new countUpModule.CountUp(countupRef2.current, recentStats.uniqueArtists, options)
        if (!countup.error && !countup2.error) {
            countup.start()
            countup2.start()    
        } else {
            console.error(countup.error)
        }
    }


    return (
        <div className={styles["user-container"]}>

            <button className={styles["open-in-spotify"]}>
                <div className={styles["spotify-logo-parent"]}>
                    <Image
                        src="/icons/spotify-logo-white.svg"
                        fill
                        alt='spotify logo'
                    />
                </div>
                <h3 className={styles["spotify-button-label"]}>open in spotify</h3>
            </button>
            
            <div className={styles["user-info-container"]}>
                {userInfo &&
                <>
                    <div className={styles["image-container"]}>
                        <Image
                            src={userInfo.images[0].url}
                            alt='profile picture'
                            fill
                            style={{ borderRadius: '100%' }}
                        />
                    </div>
                    <div className={styles["user-description"]}>
                        <div style={{ display: 'flex', alignItems: 'flex-end', width: '50%' }}>
                            <h1 className={styles.name}>{userInfo.display_name}</h1>
                            <h3 className={styles.username}>{`@${userInfo.id}`}</h3>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h3 className={styles["following-stat"]} style={{ padding: '0.5rem', paddingLeft: '0' }}>{userInfo.followers.total} followers</h3>
                            {/* <h3>•</h3>
                            <h3 className={styles["following-stat"]} style={{ padding: '0.5rem' }}>6 following</h3> */}
                        </div>
                    </div>
                </>}

            </div>
            <div className={styles["user-facts"]}>
                <div className={styles.fact}>
                    <h1 ref={countupRef1 as unknown as React.RefObject<HTMLDivElement>} className={styles.figure}>0</h1>
                    <h3 className={styles["figure-description"]}>unique songs</h3>
                </div>
                <div className={styles.fact}>
                    <h1 ref={countupRef2 as unknown as React.RefObject<HTMLDivElement>} className={styles.figure}>0</h1>
                    <h3 className={styles["figure-description"]}>unique artists</h3>
                </div>
            </div>
        </div>
    )
}

export default ProfileBlock