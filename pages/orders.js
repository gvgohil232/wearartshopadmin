import React from 'react';
import styles from "../styles/Home.module.css";
import Head from 'next/head';
import { ordersData } from '../src/utills/mockData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEye,
} from "@fortawesome/free-solid-svg-icons";

function Orders({ myState }) {

	return (
		<>
			<Head>
				<title>Orders - Adminart</title>
				<meta name="description" content="adminart | Powered by GV Technolab" />
				<link rel="icon" href="/art.ico" />
			</Head>
			<div className={`${styles.contentcontainer} ${myState ? styles.collapseContentContainer : ''}`}>
				<h3 className={`w-100 text-muted p-3`}>Orders</h3>
				<div className={styles.contentwrapper}>
					<table className={styles.contentTable}>
						<thead>
							<tr>
								<th>No.</th>
								<th>Name</th>
								<th>Qty</th>
								<th>Price</th>
								<th>Total</th>
								<th>User ID</th>
								<th>Status</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{ordersData?.map((item) => (
								<tr>
									<td>{item?.id}</td>
									<td>{item?.order_name}</td>
									<td>{item?.qty}</td>
									<td>₹ {item?.price}.00</td>
									<td>₹ {item?.price * item?.qty}.00</td>
									<td>{item?.userid}</td>
									<td>
										<select className="form-control" aria-label="Default select example">
											<option selected disabled>Select...</option>
											<option value="Pending">Pending</option>
											<option value="Dispatched">Dispatched</option>
											<option value="Delivered">Delivered</option>
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

export default Orders
