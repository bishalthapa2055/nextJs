import Link from 'next/link'
import React from 'react'
import styles from "@/styles/navbar.module.css"
const Navbar = () => {
    return (
        <>
            <div className={styles.nav__container}
            >
                <div style={{}}>
                    <h3>
                        LOGO
                    </h3>
                </div>
                <ul style={{ display: 'flex', gap: "10rem" }}>
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
            </div>
        </>
    )
}

export default Navbar