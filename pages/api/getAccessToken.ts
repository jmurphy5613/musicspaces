import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { apiURL } from '../../utils/constants'

type Data = {
  response: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const options = {
        url: `${apiURL}/users/getAccessToken/${req.query.code}`,
        method: 'POST',
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