import axios from 'axios';

export const getTopItems = async () => {

    console.log(localStorage.getItem("access_token"))

    const options = {
        url: 'https://api.spotify.com/v1/me/top/artists',
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        },
        params: {
            limit: 10,
            time_range: 'long_term'
        }
    }

    const res = await axios(options)
    console.log(res)
}