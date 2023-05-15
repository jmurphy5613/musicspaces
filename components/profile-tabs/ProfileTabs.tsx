import Image from "next/image"
import styles from './ProfileTabs.module.css'

interface ProfileTabsProps {
    currentTab: string
    setUserTab: (tab: string) => void
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({ currentTab, setUserTab }) => {

    const tabs = [
        {
            label: 'Top Songs',
            icon: '/icons/sound_light.svg'
        },
        {
            label: 'Top Artists',
            icon: '/icons/mic_light.svg'
        },
        {
            label: 'Recent Songs',
            icon: '/icons/alarmclock_light.svg'
        }
    ]


    return (
        <div className={styles.navigation}>
            {tabs.map((tab, index) => {
                return (
                    <>
                        <div className={styles["navigation-item"]} key={index}>
                            <div className={styles["navigation-image-container"]}>
                                <Image
                                    src={tab.icon}
                                    fill
                                    alt='icon'
                                />
                            </div>
                            <h2 className={styles["navigation-label"]}>{tab.label}</h2>
                            {currentTab == tab.label ? <div className={styles.activated} onClick={() => {
                                setUserTab(tab.label)
                            }} /> : <div className={styles.overlay} onClick={() => {
                                setUserTab(tab.label)
                            }} />}
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default ProfileTabs