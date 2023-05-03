import styles from './Navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Image 
                    src="/logo.png" 
                    alt='logo'
                    width={40} 
                    height={40} 
                    
                />
                <h1 className={styles.title}>Musicspaces</h1>
            </div>
            <div className={styles.middle}>
                <a href="/friends" className={styles.link}>Friends</a>
                <a href="/suggestions" className={styles.link}>Suggestions</a>
                <a href="/analytics" className={styles.link}>Analytics</a>  
            </div>
            <div className={styles.right}>
                <button className={styles["app-button"]}>Open App</button>
            </div>
        </div>
    )
}

export default Navbar