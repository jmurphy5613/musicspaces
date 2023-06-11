import axios from 'axios';
import { Artist, UserInfo, Track, RecentlyPlayedTrack } from '../types';
import { get24HoursAgoUnix } from '../conversions';
import { apiURL } from '../constants';

export const getTopArtists = async (time_range: string, musicspacesUsername: string): Promise<Artist[]> => {
    try {
        console.log(time_range, musicspacesUsername)
        const options = {
            url: `${apiURL}/spotify/top-artists/${time_range}/${musicspacesUsername}`,
            method: 'GET',
        }

        const res = await axios(options)
        return res.data as Artist[]
    } catch (error) {
        console.log(error)
        throw new Error('Failed to get top songs');
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

export const getRecentlyPlayed = async (): Promise<RecentlyPlayedTrack[]> => {

    console.log(get24HoursAgoUnix())

    try {
        const options = {
            url: 'https://api.spotify.com/v1/me/player/recently-played',
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            },
            params: {
                limit: 50,
                after: get24HoursAgoUnix()
            }
        }

        const res = await axios(options)
        return res.data.items as RecentlyPlayedTrack[]
    } catch (error) {
        console.log(error)
        throw new Error('Failed to get recently played');
    }
}

export const getTopSongs = async (time_range: string, musicspacesUsername: string): Promise<Track[]> => {
    try {
        const options = {
            url: `${apiURL}/spotify/top-tracks/${time_range}/${musicspacesUsername}`,
            method: 'GET',
        }

        const res = await axios(options)
        return res.data as Track[]
    } catch (error) {
        console.log(error)
        throw new Error('Failed to get top songs');
    }
}