import axios from "axios"
import { UserCredentials, UserInfo } from "../types"
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
            profilePicture: userData.profilePicture
        }
    }
    const res = await axios(options)
    return res.data.response
}

export const getAllUsers = async (): Promise<UserCredentials[]> => {
    let options = {
        url: `${apiURL}/users/get-all`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    const res = await axios(options)
    return res.data
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