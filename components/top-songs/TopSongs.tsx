import styles from './TopSongs.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import TimeControl from '../time-control/TimeControl'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Track } from '../../utils/types'
import { getTopSongs } from '../../utils/requests/users'
import { durationToSpotfyFormat } from '../../utils/conversions'


const TopSongs = () => {

    const [time, setTime] = useState('4 weeks')

    const [topSongs, setTopSongs] = useState<Track[]>()

    const fetchTopSongs = async (currentTime: string) => {
        const timePeriod = durationToSpotfyFormat(currentTime)
        const songs = await getTopSongs(timePeriod)
        setTopSongs(songs)
    }

    useEffect(() => {
        AOS.init({
            startEvent: 'DOMContentLoaded',
            offset: 0
        })
        fetchTopSongs(time)
    }, [])

    if(!topSongs || topSongs.length === 0) return <></>

    return (
        <div className={styles.container} >
            <TimeControl callbackFetch={fetchTopSongs} currentTime={time} setTime={setTime} />
            <div className={styles["top-songs-list"]}>
                {topSongs.map((song, index) => {
                    return (
                        <div key={index} className={styles["song-item"]} data-aos="fade-up" data-aos-delay={index*100} data-aos-once="true">
                            <h2 className={styles.number}>{index+1}.</h2>
                            <div className={styles["icon-container"]}>
                                <Image
                                    src={song.album.images[0].url}
                                    fill
                                    alt='icon'
                                    style={{ borderRadius: '5px' }}
                                />
                            </div>
                            <span style={{ display: 'flex', alignItems: 'flex-end' }}>
                                <h2 className={styles.name}>{song.name}</h2>
                                <h3 className={styles.artist}>{song.artists[0].name}</h3>
                            </span>

                        </div>
                    )
                })}
            </div>
            <div className={styles["top-song"]} data-aos="flip-left" data-aos-duration="600" data-aos-delay="1200">
                <h1 className={styles["top-song-title"]}>Your Top Song</h1>
                <h2 className={styles["top-song-name"]}>{topSongs[0].name}</h2>
                <h3 className={styles["top-song-artist"]}>{topSongs[0].artists[0].name}</h3>
                <div className={styles["top-song-icon-container"]}>
                    <Image 
                        src={topSongs[0].album.images[0].url}
                        fill
                        alt='icon'
                        style={{ borderRadius: '5px' }}
                    />
                </div>
                {/* <h2 className={styles.streams}>Total Streams: <span className={styles.purple}>53</span></h2> */}
            </div>

        </div>
    )
}

export default TopSongs