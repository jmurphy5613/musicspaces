import styles from './TopArtists.module.css'
import { useState } from 'react'
import TimeControl from '../time-control/TimeControl'
import { topArtists } from '../../utils/data'
import Image from 'next/image'

const TopArtists = () => {

    const [time, setTime] = useState('4 weeks')


    return (
        <div className={styles.container}>

            <TimeControl currentTime={time} setTime={setTime} />

            <div className={styles["top-artist-list"]}>
                {topArtists.map((artist, index) => {
                    return (
                        <div className={styles["artist-item"]}>
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
            <div className={styles["top-artist"]}>
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