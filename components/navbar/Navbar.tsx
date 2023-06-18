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
                <Link href="/people" className={styles.link}>Friends</Link> 
            </div>
            <div className={styles.right}>
                <button className={styles["app-button"]}>Open App</button>
            </div>
        </div>
    )
}

export default Navbar