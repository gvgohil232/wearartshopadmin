import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useRouter } from 'next/router'
import { productsData } from '../utills/mockData';

const Slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [currProductData, setCurrProductData] = useState();
    useEffect(() => {
        setTimeout(() => {
            setCurrProductData(productsData?.filter((item) => item?.id?.toString() === slug));
        }, 500)
    }, []);
    return (
        <>
            <Head>
                <title>Edit Product Details - Adminart</title>
                <meta name="description" content="adminart | Powered by GV Technolab" />
                <link rel="icon" href="/art.ico" />
            </Head>
            <div className={styles.contentcontainer}>
                <h3 className={`w-100 text-muted p-3`}>Edit Product Details</h3>
                <div className={styles.contentwrapper}>
                    <div className={styles.leftDiv}>
                        {currProductData ? <Image src={currProductData?.[0]?.imgUrl} width={100} height={100} alt="product image" /> : ''}
                        <div className={styles.moreImgs}>
                            {currProductData ? [...Array(3)].map((e, i) => <Image src={currProductData?.[0]?.imgUrl} width={100} height={100} alt="product image" />) : ''}
                        </div>
                    </div>
                    <div className={styles.rightDiv}>
                        <form className='text-muted'>
                            <div className="form-group">
                                <label for="ProductName">Product Name:</label>
                                <input type="text" className="form-control" id="ProductName" placeholder="Product Name" defaultValue={currProductData?.[0]?.name} />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="productPrice">Price: (₹)</label>
                                    <input type="number" min={0} className="form-control" id="productPrice" defaultValue={currProductData?.[0]?.price} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputPassword4">Discount: (%)</label>
                                    <input type="number" min={0} className="form-control" id="inputPassword4" defaultValue={currProductData?.[0]?.discount} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="productColors">Colors:</label><br />
                                    <div className="btn-group h-25" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-sm btn-danger mr-1 border border-dark" title='danger'></button>
                                        <button type="button" className="btn btn-sm btn-success mr-1 border border-dark" title='success'></button>
                                        <button type="button" className="btn btn-sm btn-primary mr-1 border border-dark" title='primary'></button>
                                        <button type="button" className="btn btn-sm btn-secondary mr-1 border border-dark" title='secondary'></button>
                                        <button type="button" className="btn btn-sm btn-warning mr-1 border border-dark" title='warning'></button>
                                        <button type="button" className="btn btn-sm btn-info mr-1 border border-dark" title='info'></button>
                                        <button type="button" className="btn btn-sm btn-light mr-1 border border-dark" title='light'></button>
                                        <button type="button" className="btn btn-sm btn-dark mr-1 border border-dark" title='dark'></button>
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="productAvailability">Availability:</label>
                                    <div className=' border p-1 rounded'>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">
                                                In stock
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="productCategory">Product Category:</label>
                                    <select id="productCategory" className="form-control">
                                        <option selected disabled>Choose...</option>
                                        <option value="Mens">Mens</option>
                                        <option value="Women">Women</option>
                                        <option value="Kids">Kids</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="productDesc">Product Description:</label>
                                <textarea className="form-control" id="productDesc" rows="3">{currProductData?.[0]?.desc}</textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={(e) => e.preventDefault()}>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slug
