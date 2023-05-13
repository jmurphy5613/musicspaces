import styles from './TopArtists.module.css'
import { useState } from 'react'
import TimeControl from '../time-control/TimeControl'

const TopArtists = () => {

    const [time, setTime] = useState('4 weeks')


    return (
        <div className={styles.container}>

            <TimeControl currentTime={time} setTime={setTime} />

            <div className={styles["top-artist-list"]}>

            </div>
            <div className={styles["top-artist"]}>

            </div>
        </div>
    )
}

export default TopArtists