import React, { useEffect } from 'react'
import style from "@/styles/blog.module.css"
import Link from 'next/link'
import axios from 'axios'
const Blog = () => {
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                const apiData = response;
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData()
    }, [])
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