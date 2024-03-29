import styles from '../styles/Comparison.module.css'
import Navbar from '../components/navbar/Navbar'
import ComparisonBlock from '../components/comparison-block/ComparisonBlock'
import ComparisonGrid from '../components/comparison-grid/ComparisonGrid'
import { useEffect } from 'react'
import { topArtists, topSongs } from '../utils/data'

const Comparison = () => {

    useEffect(() => {

    }, [])

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <ComparisonBlock />
                <ComparisonGrid gridItems={topArtists.slice(0, 5)} title="Common Artists" />
                <ComparisonGrid gridItems={topSongs.slice(0, 5)} title="Common Songs" />
            </div>

        </>

    )
}

export default Comparison