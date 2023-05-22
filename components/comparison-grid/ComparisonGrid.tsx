import styles from './ComparisonGrid.module.css'
import { ComparisonData } from '../../utils/types'
import Image from 'next/image'

interface ComparisonGridProps {
    gridItems: ComparisonData[]
    title: string
}

const ComparisonGrid:React.FC<ComparisonGridProps> = ({ gridItems, title }) => {
    return (
        <div className={styles.similarity}>
            <h1 className={styles["similarity-header"]}>{title}</h1>
            <div className={styles.items}>
                {gridItems.map((item, index) => {
                    return (
                        <div className={styles["item-container"]}>
                            <div className={styles["image-container"]}>
                                <Image 
                                    src={item.image}
                                    fill
                                    alt="joji pfp"
                                    style={{ borderRadius: '100%' }}
                                />
                            </div>
                            <h2 className={styles.name}>{item.name}</h2>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default ComparisonGrid