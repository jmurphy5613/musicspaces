import styles from './UsernamePopup.module.css'
import { useState } from 'react'
import Image from 'next/image'
import { createUser } from '../../utils/requests/credentials'
import { useRouter } from 'next/router'
import { UserInfo } from '../../utils/types'

interface UsernamePopupProps {
    userData: UserInfo
}

const UsernamePopup:React.FC<UsernamePopupProps> = ({ userData }) => {

    const [usernameEntered, setUsernameEntered] = useState('')

    const router = useRouter()

    const handleContinue = async () => {
        createUser({
            spotifyUsername: userData.id,
            musicspacesUsername: usernameEntered,
            accessToken: localStorage.getItem('access_token') as string,
            refreshToken: localStorage.getItem('refresh_token') as string,
            accessTokenExpiration: new Date(Date.now() + 3600 * 1000),
            profilePicture: userData.images[0].url ?? '',
        })
        router.push(`/${usernameEntered}`)
    }

    return (
        <div className={styles.container}>
            <div className={styles["popup-container"]}>
                <h1 className={styles.title}>enter your <span className={styles.purple}>musicspaces</span>  name</h1>
                <input onChange={e => setUsernameEntered(e.target.value)} className={styles["username-input"]} />
                <h2 className={styles["link-title"]}>your custom link: <span className={styles.purple}>{`musicspaces.com/${usernameEntered}`}</span></h2>
                <button className={styles["continue-button"]} onClick={handleContinue}>
                    <h2 className={styles["button-label"]}>continue</h2>
                    <div className={styles["icon-container"]}>
                        <Image 
                            src="/icons/Expand_right.svg"
                            alt="arrow-right"
                            fill
                        />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default UsernamePopup