import axios from "axios"
import { NextRouter } from "next/router"

export const getAccessToken = async (code: string | string[]) => {
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
    return res.data.response
}

export const getCode = (router: NextRouter) => {
    return router.query.code
}

export const auth = async (router: NextRouter) => {
    let URL = "https://accounts.spotify.com/authorize"
    URL += "?client_id=" + process.env.NEXT_PUBLIC_CLIENT_ID
    URL += "&response_type=code"
    URL += "&redirect_uri=" + "http://localhost:3000"
    URL += "&show_dialog=true"
    URL += "&scope=user-read-private user-read-email user-top-read"
    router.push(URL);
};