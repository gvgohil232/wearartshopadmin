import React from 'react';
import styles from "../styles/Home.module.css";
import Head from 'next/head';
import { usersData } from '../src/utills/mockData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEye,
} from "@fortawesome/free-solid-svg-icons";

function Users({ myState }) {
	return (
		<>
			<Head>
				<title>Users - Adminart</title>
				<meta name="description" content="adminart | Powered by GV Technolab" />
				<link rel="icon" href="/art.ico" />
			</Head>
			<div className={`${styles.contentcontainer} ${myState ? styles.collapseContentContainer : ''}`}>
				<h3 className={`w-100 text-muted p-3`}>Users</h3>
				<div className={styles.contentwrapper}>
					<table className={styles.contentTable}>
						<thead>
							<tr>
								<th>No.</th>
								<th>Name</th>
								<th>Address</th>
								<th>Contact</th>
								<th>Status</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{usersData?.map((item) => (
								<tr>
									<td>{item?.id}</td>
									<td>{item?.first_name}</td>
									<td>{item?.address}</td>
									<td>{item?.contact}</td>
									<td>
										<select className="form-control" aria-label="Default select example">
											<option selected disabled>Select...</option>
											<option value="Active">Active</option>
											<option value="Inactive">Inactive</option>
										</select>
									</td>
									<td>
										<div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
											<button type="button" className="btn btn-light">
												<FontAwesomeIcon icon={faEye} style={{ width: "15px", marginLeft: "5px", cursor: "pointer" }} />
												{' '}View
											</button>
											<button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											</button>
											<div className="dropdown-menu dropdown-menu-right">
												<button className="dropdown-item" type="button">Edit</button>
												<button className="dropdown-item" type="button">Delete</button>
											</div>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}

export default Users
