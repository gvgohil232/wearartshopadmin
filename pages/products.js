import React from 'react'
import styles from "../styles/Home.module.css";
import Head from 'next/head';
import ProductCard from '../components/ProductCard';
import { productsData } from '../src/utills/mockData';

function Products({ myState }) {
	return (
		<>
			<Head>
				<title>Products - Adminart</title>
				<meta name="description" content="adminart | Powered by GV Technolab" />
				<link rel="icon" href="/art.ico" />
			</Head>
			<div className={`${styles.contentcontainer} ${myState ? styles.collapseContentContainer : ''}`}>
				<h3 className={`w-100 text-muted p-3`}>Products</h3>
				<div className={styles.contentwrapper}>
					<div className={styles.productCategory}>
						<ul className='mb-0'>
							<li>Mens</li>
							<li>Women</li>
							<li>Kids</li>
							<li>Sales</li>
							<li>Technology</li>
							<li>Furniture</li>
							<li>Mens</li>
							<li>Women</li>
							<li>Kids</li>
							<li>Sales</li>
							<li>Technology</li>
							<li>Furniture</li>
						</ul>
					</div>
					<div className={styles.gallery}>
						{productsData?.map((item) => (
							<ProductCard id={item?.id} name={item?.name} img={item?.imgUrl} desc={item?.desc} price={item?.price} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Products
