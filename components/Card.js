import React from 'react';
import Link from 'next/link';
import styles from "../styles/Home.module.css";

function Card({ count, name, url }) {
    return (
        <Link href={url}>
            <div className={styles.tabs}>
                <div className={styles.categories}>
                    <h4>{count}</h4>
                    <h5>{name}</h5>
                </div>
            </div>
        </Link>
    )
}

export default Card
