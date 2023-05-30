import axios from "axios"
import { UserCredentials } from "../types"
import { apiURL } from "../constants"

export const createUser = async (userData: UserCredentials) => {
    let options = {
        url: `${apiURL}/users/create`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            spotifyUsername: userData.spotifyUsername,
            musicspacesUsername: userData.musicspacesUsername,
            accessToken: userData.accessToken,
            refreshToken: userData.refreshToken,
            accessTokenExpiration: userData.accessTokenExpiration,
        }
    }
    const res = await axios(options)
    return res.data.response
}

export const getUserByRegreshToken = async (refreshToken: string): Promise<UserCredentials> => {
    let options = {
        url: `${apiURL}/users/find-by-refresh-token/${refreshToken}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    const res = await axios(options)
    return res.data.response
}