import React from 'react';
import Image from 'next/image';
import styles from "../InfoCard/InfoCard.module.css";


function InfoCard({ percentage, desc, img, status }) {
    return (
        <div className={styles.infoTabs}>
            <Image src={img} height={20} width={20} />
            <div className={styles.categories}>
                <span className={status === 'up' ? 'text-success' : 'text-danger'}>{status === 'up' ? '↑' : '↓'}{' '}{percentage}</span>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default InfoCard
