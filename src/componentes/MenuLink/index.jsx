import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, to }) {

    const location = useLocation();

    return (
        <Link className={`${styles.link} ${location.pathname === to ? styles.selectedLink : ''}`} to={to}>
            {children}
        </Link>
    )
}
