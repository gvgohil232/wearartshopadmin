import React, { useState, useEffect } from 'react'
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faCircle,
    faPen
} from "@fortawesome/free-solid-svg-icons";

function ProductCard({ id, name, img, desc, price }) {
    const [editProductName, setEditProductName] = useState(false);
    useEffect(() => {
        const keyDownHandler = event => {
            if (event.key === 'Escape') {
                event.preventDefault();
                // 👇️ logic here
                setEditProductName(false);
            }
        };
        document.addEventListener('keydown', keyDownHandler);
        // 👇️ clean up event listener
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, [])
    return (
        <div className={styles.content}>
            <Image src={img} width={100} height={100} />
            <div className={styles.overLayProduct}>
                <Link href={`/products/${id}`}><FontAwesomeIcon icon={faPen} style={{ width: "13px" }} title="Edit product" /></Link>
            </div>
            <h3 className={styles.productName} onClick={() => { setEditProductName(true); }}>
                {editProductName ? <input type="text" defaultValue={name} title="Press ESC to exit" name="productName" /> : name}
            <div className={styles.overLayProductName}>
                <FontAwesomeIcon icon={faPen} style={{ width: "10px" }} title="Edit product name" />
            </div>
            </h3>
            <p>{desc}</p>
            <div className={styles.innerContentOne}>
                <h6>₹ {price}.00</h6>
                <div>
                    <FontAwesomeIcon icon={faCircle} style={{ width: "15px", color: "darkred" }} />
                    <FontAwesomeIcon icon={faCircle} style={{ width: "15px", color: "darkgreen" }} />
                    <FontAwesomeIcon icon={faCircle} style={{ width: "15px", color: "dodgerblue" }} />
                </div>
            </div>
            <div className={styles.innerContentOne}>
                <ul>
                    <li><FontAwesomeIcon icon={faStar} className={styles.rated} style={{ width: "15px" }} /></li>
                    <li><FontAwesomeIcon icon={faStar} className={styles.rated} style={{ width: "15px" }} /></li>
                    <li><FontAwesomeIcon icon={faStar} className={styles.rated} style={{ width: "15px" }} /></li>
                    <li><FontAwesomeIcon icon={faStar} style={{ width: "15px" }} /></li>
                    <li><FontAwesomeIcon icon={faStar} style={{ width: "15px" }} /></li>
                </ul>
                <small>5 instock</small>
            </div>
            {/* <button>Add to cart</button> */}
        </div>
    )
}

export default ProductCard
