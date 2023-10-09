import React from 'react'
import { useRouter } from 'next/router'


const Slug = () => {
    const router = useRouter()
    const { slug} = router.query;
  return (
    <div>title of page is  :{slug} </div>
  )
}

export default Slug