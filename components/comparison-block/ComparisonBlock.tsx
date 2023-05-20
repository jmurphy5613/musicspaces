import { useEffect, useState, useRef } from 'react'
import styles from './ComparisonBlock.module.css'
import Image from 'next/image'
import { CountUp, CountUpOptions } from 'countup.js'

const ComparisonBlock = () => {

    const [progressBarHeight, setProgressBarHeight] = useState(10)

    const countupRef1 = useRef('0')

    let countup: CountUp

    useEffect(() => {
        setTimeout(() => {
            setProgressBarHeight(90)
            initCountUps()
        }, 1000)
    }, [])

    const options:CountUpOptions = {
        duration: 3,
        useEasing: true,
        useGrouping: false,
        suffix: '%'
    }


    async function initCountUps() {
        const countUpModule = await import('countup.js');
        countup = new countUpModule.CountUp(countupRef1.current, 90, options)
        if (!countup.error) {
            countup.start()
        } else {
            console.error(countup.error)
        }
    }

    return (
        <div className={styles["comparison-block"]}>
            <div className={styles["user-container"]}>
                <div className={styles["pfp-container"]}>
                    <Image 
                        src="/pfps/demo-pfp.jpeg"
                        fill
                        alt="demo pfp"
                        style={{ borderRadius: '100%', border: '1px solid #A7B2FF' }}
                    />
                </div>
                <h1 className={styles.username}>asa</h1>
            </div>
            <div className={styles["compatability-container"]}>
                <div className={styles["parent-bar"]}>
                    <div className={styles["child-bar"]} style={{ height: `${progressBarHeight}%` }} />
                </div>
                <h1 ref={countupRef1 as unknown as React.RefObject<HTMLDivElement>} className={styles.compatability}>0%</h1>
                <h2 className={styles["compatability-description"]}>similarity score</h2>
            </div>
            <div className={styles["user-container"]}>
                <div className={styles["pfp-container"]}>
                    <Image 
                        src="/pfps/johntransparent.png"
                        fill
                        alt="demo pfp"
                        style={{ borderRadius: '100%', border: '1px solid #A7B2FF' }}
                    />
                </div>
                <h1 className={styles.username}>john</h1>
            </div>
        </div>
    )
}

export default ComparisonBlock