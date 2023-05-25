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
            code: req.query.code,
            redirect_uri: 'https://musicspaces.vercel.app',
            grant_type: 'authorization_code'
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