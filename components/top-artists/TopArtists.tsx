import styles from './TopArtists.module.css'
import { useEffect, useState } from 'react'
import TimeControl from '../time-control/TimeControl'
import { topArtists } from '../../utils/data'
import Image from 'next/image'
import AOS from 'aos'

const TopArtists = () => {

    const [time, setTime] = useState('4 weeks')

    useEffect(() => {
        AOS.init({
            startEvent: 'DOMContentLoaded',
            offset: 0
        })
    }, [])

    return (
        <div className={styles.container}>

            <TimeControl currentTime={time} setTime={setTime} />

            <div className={styles["top-artist-list"]}>
                {topArtists.map((artist, index) => {
                    return (
                        <div className={styles["artist-item"]} data-aos="fade-up" data-aos-delay={index*100} data-aos-once="true">
                            <h2 className={styles.number}>{index + 1}.</h2>
                            <div className={styles["icon-container"]}>
                                <Image 
                                    src={artist.image}
                                    fill
                                    alt='icon'
                                    style={{ borderRadius: '5px' }}
                                />
                            </div>
                            <h2 className={styles.name}>{artist.name}</h2>
                        </div>
                    )
                })}
            </div>
            <div className={styles["top-artist"]} data-aos="flip-left" data-aos-duration="600" data-aos-delay="1200">
                <h1 className={styles["top-artist-title"]}>Your Top Artist</h1>
                <h2 className={styles["top-artist-name"]}>{topArtists[0].name}</h2>
                <div className={styles["top-artist-icon-container"]}>
                    <Image 
                        src={topArtists[0].image}
                        fill
                        alt='icon'
                        style={{ borderRadius: '5px' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default TopArtists