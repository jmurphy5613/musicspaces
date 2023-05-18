import styles from '../styles/Comparison.module.css'
import Navbar from '../components/navbar/Navbar'
import ComparisonBlock from '../components/comparison-block/ComparisonBlock'

const Comparison = () => {
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