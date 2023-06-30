import axios from "axios"
import { NextRouter } from "next/router"
import { SpotifyAuthResponse } from "../types"
import { url } from "../constants"

export const getAccessToken = async (code: string | string[]): Promise<SpotifyAuthResponse> => {
	let options = {
		url: '/api/getAccessToken',
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
		params: {
			code: code
		}
	}
	const res = await axios(options)
	console.log(res.data.response)
	return res.data.response
}

export const refreshToken = async (refresh_token: string): Promise<any> => {
	try {
		const options = {
			url: '/api/refreshToken',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			params: {
				refresh_token: refresh_token
			}
		}

		const res = await axios(options)
		return res.data.response
	} catch (error) {
		console.log(error)
		return Error('Failed to refresh token');
	}
}

export const getCode = (router: NextRouter) => {
	return router.query.code
}

export const auth = async (router: NextRouter) => {
	let URL = "https://accounts.spotify.com/authorize"
	URL += "?client_id=" + process.env.NEXT_PUBLIC_CLIENT_ID
	URL += "&response_type=code"
	URL += "&redirect_uri=" + url
	URL += "&show_dialog=true"
	URL += "&scope=user-read-private user-read-email user-top-read user-read-recently-played"
	router.push(URL);
};