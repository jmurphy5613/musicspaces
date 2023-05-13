import styles from './TopSongs.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import TimeControl from '../time-control/TimeControl'
import AOS from 'aos'
import 'aos/dist/aos.css';


const TopSongs = () => {

    const [time, setTime] = useState('4 weeks')

    const topSongs = [
        {
            name: 'Sandals',
            artist: 'khai dreams',
            image: '/sandals.png'
        },
        {
            name: 'Graveyard Blues',
            artist: 'MyKey',
            image: '/graveyard-blues.jpg'
        },
        {
            name: 'Seventeen',
            artist: 'Peach Pit',
            image: '/seventeen.jpg'
        },
        {
            name: 'Best Tears',
            artist: 'Happy Fits',
            image: '/best-tears.jpeg'
        },
        {
            name: 'Sandals',
            artist: 'khai dreams',
            image: '/sandals.png'
        },
        {
            name: 'Graveyard Blues',
            artist: 'MyKey',
            image: '/graveyard-blues.jpg'
        },
        {
            name: 'Seventeen',
            artist: 'Peach Pit',
            image: '/seventeen.jpg'
        },
        {
            name: 'Best Tears',
            artist: 'Happy Fits',
            image: '/best-tears.jpeg'
        },
        {
            name: 'Seventeen',
            artist: 'Peach Pit',
            image: '/seventeen.jpg'
        },
        {
            name: 'Best Tears',
            artist: 'Happy Fits',
            image: '/best-tears.jpeg'
        }

    ]

    useEffect(() => {
        AOS.init({
            startEvent: 'DOMContentLoaded',
            offset: 0
        })
    }, [])

    return (
        <div className={styles.container} >
            <TimeControl currentTime={time} setTime={setTime} />
            <div className={styles["top-songs-list"]}>
                {topSongs.map((song, index) => {
                    return (
                        <div className={styles["song-item"]} data-aos="fade-up" data-aos-delay={index*100} data-aos-once="true">
                            <h2 className={styles.number}>{index+1}.</h2>
                            <div className={styles["icon-container"]}>
                                <Image
                                    src={song.image}
                                    fill
                                    alt='icon'
                                    style={{ borderRadius: '5px' }}
                                />
                            </div>
                            <span style={{ display: 'flex', alignItems: 'flex-end' }}>
                                <h2 className={styles.name}>{song.name}</h2>
                                <h3 className={styles.artist}>{song.artist}</h3>
                            </span>

                        </div>
                    )
                })}
            </div>
            <div className={styles["top-song"]} data-aos="flip-left" data-aos-duration="600" data-aos-delay="1200">
                <h1 className={styles["top-song-title"]}>Your Top Song</h1>
                <h2 className={styles["top-song-name"]}>{topSongs[0].name}</h2>
                <h3 className={styles["top-song-artist"]}>{topSongs[0].artist}</h3>
                <div className={styles["top-song-icon-container"]}>
                    <Image 
                        src={topSongs[0].image}
                        fill
                        alt='icon'
                        style={{ borderRadius: '5px' }}
                    />
                </div>
                <h2 className={styles.streams}>Total Streams: <span className={styles.purple}>53</span></h2>
            </div>

        </div>
    )
}

export default TopSongs