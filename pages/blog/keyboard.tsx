import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
const keyboard = () => {
  return (
    <>
      <Head>
        <title>Keyboard</title>
      </Head>

     <div>
      <Image 
      src="/next.svg"
      width={500}
      height={500}
      alt="Picture of the author" />
     </div>
    </>
  )
}

export default keyboard