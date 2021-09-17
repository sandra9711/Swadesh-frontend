// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sData } from './data.js'
export default async (req, res) => {
    res.status(200).json(sData)
}
