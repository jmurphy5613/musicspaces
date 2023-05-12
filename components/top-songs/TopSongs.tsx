import styles from './TopSongs.module.css'
import Image from 'next/image'

const TopSongs = () => {

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
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles["top-songs-list"]}>
                {topSongs.map((song, index) => {
                    return (
                        <div className={styles["song-item"]}>
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

        </div>
    )
}

export default TopSongs