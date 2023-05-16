import axios from 'axios';
import { RecentlyPlayed, TopArtist, UserInfo } from '../types';

export const getTopArtists = async (time_range: string): Promise<TopArtist[]> => {


    console.log(localStorage.getItem("access_token"))

    try {
        const options = {
            url: 'https://api.spotify.com/v1/me/top/artists',
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            },
            params: {
                limit: 10,
                time_range: time_range,
                offset: 0
            }
        }
    
        const res = await axios(options)
        return res.data.items as TopArtist[]
    } catch (error) {
        console.log(error)
        throw new Error('Failed to get top artists');
    }

}

export const getUserInfo = async (): Promise<UserInfo> => {
    try {
        const options = {
            url: 'https://api.spotify.com/v1/me',
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            },
        }

        const res = await axios(options)
        return res.data as UserInfo
    } catch (error) {
        console.log(error)
        throw new Error('Failed to get profile info');
    }
}

export const getRecentlyPlayed = async (): Promise<RecentlyPlayed> => {
    try {
        const options = {
            url: 'https://api.spotify.com/v1/me/player/recently-played',
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            },
        }

        const res = await axios(options)
        return res.data as RecentlyPlayed
    } catch (error) {
        console.log(error)
        throw new Error('Failed to get recently played');
    }
}