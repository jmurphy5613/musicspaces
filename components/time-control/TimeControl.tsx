import styles from './TimeControl.module.css'

interface TimeControlProps {
    currentTime: string
    setTime: (time: string) => void
}

const TimeControl:React.FC<TimeControlProps> = ({ currentTime, setTime }) => {

    const times = [
        {
            label: '4 weeks',
        },
        {
            label: '6 months',
        },
        {
            label: 'all time',
        }
    ]

    return (
        <div className={styles.container}>
            {times.map((time, index) => {
                return (
                    <div className={styles["time-item"]}>
                        {currentTime == time.label ? 
                            <div className={styles.time}>
                                <h2 className={styles.activated}>{time.label}</h2>
                                <div className={styles.underline} /> 
                            </div> 
                            
                        : <h2 className={styles.label}>{time.label}</h2>}
                    </div>
                )
            })}
        </div>
    )
}

export default TimeControl