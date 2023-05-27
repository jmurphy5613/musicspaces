import styles from './UsernamePopup.module.css'
import { useState } from 'react'

const UsernamePopup = () => {

    const [usernameEntered, setUsernameEntered] = useState('')

    return (
        <div className={styles.container}>
            <div className={styles["popup-container"]}>
                <h1 className={styles.title}>enter your <span className={styles.purple}>musicspaces</span>  name</h1>
                <input onChange={e => setUsernameEntered(e.target.value)} className={styles["username-input"]} />
                <h2 className={styles["link-title"]}>your custom link: <span className={styles.purple}>{`musicspaces.com/${usernameEntered}`}</span></h2>
                <button>
                    <h2>continue</h2>
                    
                </button>
            </div>
        </div>
    )
}

export default UsernamePopup