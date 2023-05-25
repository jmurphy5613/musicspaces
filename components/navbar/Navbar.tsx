import styles from './Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Image 
                    src="/icons/logo.png" 
                    alt='logo'
                    width={40} 
                    height={40} 
                    
                />
                <h1 className={styles.title}>Musicspaces</h1>
            </div>
            <div className={styles.middle}>
                <Link href="/friends" className={styles.link}>Friends</Link>
                <Link href="/suggestions" className={styles.link}>Suggestions</Link>
                <Link href="/analytics" className={styles.link}>Analytics</Link>  
            </div>
            <div className={styles.right}>
                <button className={styles["app-button"]}>Open App</button>
            </div>
        </div>
    )
}

export default Navbar