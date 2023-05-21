import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  response: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const options = {
        url: 'https://accounts.spotify.com/api/token',
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + (new Buffer(process.env.NEXT_PUBLIC_CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'))
        },
        params: {
            grant_type: 'refresh_token',
            refresh_token: req.query.refresh_token
        }
    }

    const makeRequest = async () => {
        let result
        await axios(options)
        .then((res) => {
            result = res.data
            console.log(res)
        })
        .catch((err) => {
            console.log('err', err)
        })
        return result
    }

    res.status(200).json({ response: await makeRequest() })

}