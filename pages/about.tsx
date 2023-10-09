import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const about = () => {
  return (
    <>
    
      <div>about</div>
      <ul>
        <Link href='/home' >
          
            <li>Home</li>
          
        </Link>
        <Link href="/contact" >

          <li>Contact</li>
        </Link>
        <Link href='/documents' >

          <li>Documents</li>
        </Link>
      </ul>
      <div style={{
        display :'flex',
        justifyContent :"center"
      }}>

      <Image  className='myImage' src="/lion.png" alt='lion'  width={500} height={50} style={{ borderRadius : "5rem"}}/>
      </div>
    </>
  )
}

export default about