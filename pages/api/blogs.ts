// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import  * as fs from "fs"


type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
try {
  
  let allData : any = []
  const fetchData = async() =>{
    const readData = await fs.promises.readdir("blogdata")
    console.log(readData)

    for(let i = 0 ; i< readData.length ; i++){
      const data = await fs.promises.readFile(`blogdata/${readData[i]}` , "utf-8")
      allData.push(JSON.parse(data))
    }
  }
 await fetchData()
  console.log(allData)

  res.json(allData)
} catch (error) {
  console.log(error)
}
}
