import Image from "next/image"
import styles from './ProfileTabs.module.css'

interface ProfileTabsProps {
    currentTab: string
    setUserTab: (tab: string) => void
}

const ProfileTabs:React.FC<ProfileTabsProps> = () => {

    const tabs = [
        {
            label: 'Top Songs',
            icon: '/sound_light.svg'
        },
        {
            label: 'Top Artists',
            icon: '/mic_light.svg'
        },
        {
            label: 'Recent Songs',
            icon: '/alarmclock_light.svg'
        }
    ]


    return (
        <div className={styles.navigation}>
            {tabs.map((tab, index) => {
                return (
                    <>
                        <div className={styles["navigation-item"]}>
                            <div className={styles["navigation-image-container"]}>
                                <Image
                                    src={tab.icon}
                                    fill
                                    alt='icon'
                                />
                            </div>
                            <h2 className={styles["navigation-label"]}>{tab.label}</h2>
                            <div className={styles.overlay} />
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default ProfileTabs