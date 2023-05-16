import Image from "next/image"
import styles from './ProfileBlock.module.css'
import { useRef, useEffect, useState, use } from 'react'
import { CountUp, CountUpOptions } from "countup.js"
import { UserInfo } from "../../utils/types"
import { getUserInfo } from "../../utils/requests/users"

const ProfileBlock = () => {

    const countupRef1 = useRef('0')
    const countupRef2 = useRef('0')

    let countup: CountUp
    let countup2: CountUp

    const [userInfo, setUserInfo] = useState<UserInfo>()

    const fetchUserInfo = async () => {
        const userInfo = await getUserInfo()
        console.log(userInfo)
        setUserInfo(userInfo)
    }

    useEffect(() => {
        fetchUserInfo()
    }, [])

    useEffect(() => {
        initCountUps()
    }, [userInfo])

    //create options variable for countup
    const options:CountUpOptions = {
        duration: 2,
        useEasing: true,
        useGrouping: true,
    }


    async function initCountUps() {
        const countUpModule = await import('countup.js');
        countup = new countUpModule.CountUp(countupRef1.current, 128, options)
        countup2 = new countUpModule.CountUp(countupRef2.current, 325, options)
        if (!countup.error && !countup2.error) {
            countup.start()
            countup2.start()    
        } else {
            console.error(countup.error)
        }
    }

    if(!userInfo) return <></>

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
            </div>
            <div className={styles["user-facts"]}>
                <div className={styles.fact}>
                    <h1 ref={countupRef1 as unknown as React.RefObject<HTMLDivElement>} className={styles.figure}>0</h1>
                    <h3 className={styles["figure-description"]}>unique songs</h3>
                </div>
                <div className={styles.fact}>
                    <h1 ref={countupRef2 as unknown as React.RefObject<HTMLDivElement>} className={styles.figure}>0</h1>
                    <h3 className={styles["figure-description"]}>hours listened</h3>
                </div>
            </div>
        </div>
    )
}

export default ProfileBlock