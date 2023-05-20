import styles from '../styles/Comparison.module.css'
import Navbar from '../components/navbar/Navbar'
import ComparisonBlock from '../components/comparison-block/ComparisonBlock'
import ComparisonGrid from '../components/comparison-grid/ComparisonGrid'
import { useEffect } from 'react'

const Comparison = () => {

    useEffect(() => {

    }, [])

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <ComparisonBlock />

            </div>

        </>

    )
}

export default Comparison