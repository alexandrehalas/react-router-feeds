import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <Link className={styles.link} to='/'>
                    Home
                </Link>
                <Link className={styles.link} to='/about'>
                    About
                </Link>
            </nav>
        </header>
    )
}
