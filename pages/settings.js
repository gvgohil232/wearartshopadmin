import React from 'react'
import styles from "../styles/Home.module.css";
import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCamera
} from "@fortawesome/free-solid-svg-icons";

function Settings({myState}) {
	return (
		<>
			<Head>
				<title>Settings - Adminart</title>
				<meta name="description" content="adminart | Powered by GV Technolab" />
				<link rel="icon" href="/art.ico" />
			</Head>
			<div className={`${styles.contentcontainer} ${myState ? styles.collapseContentContainer : ''}`}>
				<h3 className={`w-100 text-muted p-3`}>Settings</h3>
				<div className={styles.contentwrapper}>
					<div className={styles.settingLeftDiv}>
						<Image src='/dummyImage.jpg' width={100} height={100} alt="product image" />
						<div className={styles.overLayCamera} title="Edit">
							<FontAwesomeIcon icon={faCamera} style={{ width: "13px" }} title="Edit" />
						</div>
					</div>
					<div className={styles.rightDiv}>
						<form className='text-muted'>
							<div className="form-group">
								<label for="siteName">Site Name:</label>
								<input type="text" className="form-control" id="siteName" placeholder="Site Name" defaultValue="Adminart" />
							</div>
							<div className="form-group">
								<label for="siteTagline">Tagline:</label>
								<input type="text" className="form-control" id="siteTagline" placeholder="Tagline" defaultValue="Powered by GV Technolab" />
							</div>
							<div className="form-row">
								<div className="form-group col-md-6">
									<label for="productPrice">Email:</label>
									<input type="email" className="form-control" id="productPrice" placeholder="name@example.com" />
								</div>
								<div className="form-group col-md-6">
									<label for="inputPassword4">Password:</label>
									<input type="password" className="form-control" id="inputPassword4" placeholder="******" />
								</div>
							</div>
							<button type="submit" className="btn btn-primary">Save</button>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Settings
