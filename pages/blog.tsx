import React from 'react'
import style from "@/styles/blog.module.css"
import Link from 'next/link'
const Blog = () => {
    return (
        <>
            <div className={style.blog__container}>

                <Link href={'/blog/learn-js'}>
                    <h1>
                        Learn Next
                    </h1>
                </Link>
                <h1>
                    Steps wise process
                </h1>
                <h1>
                    Foundatoopn
                </h1>
                <h1>
                    Submit
                </h1>
            </div>
        </>
    )
}

export default Blog