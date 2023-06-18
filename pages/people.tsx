import styles from '../styles/People.module.css'
import Navbar from '../components/navbar/Navbar'
import Image from 'next/image'
import { userItem } from '../utils/data'
import { useEffect, useState } from 'react'
import { getAllUsers } from '../utils/requests/credentials'
import { UserCredentials } from '../utils/types'

const People = () => {

    const [searchBarValue, setSearchBarValue] = useState<string>("")
    const [users, setUsers] = useState<UserCredentials[]>()




    const fetchData = async () => {
        const users = await getAllUsers()
        console.log(users)
        setUsers(users)
    }

    useEffect(() => {
        fetchData()
    }, [])

    if(!users) {
        return <></>
    }

    const filteredUsers = users.filter(item => {
        return item.musicspacesUsername.toLowerCase().includes(searchBarValue.toLowerCase())
    })

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.title}>find people</h1>
                <input className={styles["search-bar"]} type="text" placeholder="search for people" onChange={e => setSearchBarValue(e.target.value)} />
                <div className={styles["user-grid"]}>
                    {filteredUsers.map((item, index) => {
                        return (
                            <div key={index} className={styles["user-container"]}>
                                <div className={styles["image-container"]}>
                                    <Image 
                                        src={item.profilePicture}
                                        fill
                                        alt="pfp"
                                        style={{ borderRadius: '100%' }}
                                    />
                                </div>
                                <h2 className={styles.username}>{item.musicspacesUsername}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>

    )
}

export default People