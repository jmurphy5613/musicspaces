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
        </div>
    )
}

export default Navbar