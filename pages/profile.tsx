import { useEffect } from "react"
import { getTopItems } from "../utils/requests/users"


const Profile = () => {

    useEffect(() => {
        console.log('profile')
        const profileInfo = getTopItems()
    }, [])

    return (
        <div>

        </div>
    )
}

export default Profile