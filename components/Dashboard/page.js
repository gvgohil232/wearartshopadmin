import React from "react";
import styles from "../Dashboard/Dashboard.module.css";
// import { Bar } from "react-chartjs-2";
import Card from "../Card";
import InfoCard from "../InfoCard/page";
import { dashboardCardData, customersArrivedData } from "../../src/utills/mockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPowerOff
} from "@fortawesome/free-solid-svg-icons";

function Dashboard({ myState }) {
	return (
		// <div className={`${styles.contentcontainer} ${myState ? styles.collapseContentContainer : ''}`}>
		// 	<div className={styles.contentwrapper}>
		// 		{dashboardCardData?.map((item) => (
		// 			<Card name={item?.name} url={item?.url} count={item?.count} />
		// 		))}
		// 	</div>
		// 	{/* charts  */}
		// 	<div className={styles.charts}>hi</div>
		// </div>

		<div className={`${styles.dashboardContainer} ${myState ? styles.collapsedDashboardContainer : ''}`}>
			<div className={styles.innerWrapCard}>
				{dashboardCardData?.map((item, key) => (
					<Card name={item?.name} url={item?.url} count={item?.count} key={key} />
				))}
			</div>
			<div className={`row ${styles.innerWrapTwo}`}>
				<div className="col">
					<h4 className={`text-muted pt-2 pb-1`}>Customers Arrived</h4>
					{customersArrivedData?.map((item, key) => (
						<InfoCard
							img={item?.img}
							percentage={item?.percentage}
							desc={item?.desc}
							status={item?.status}
							key={key}
						/>
					))}
				</div>
				<div className="col">
					<h4 className={`text-muted pt-2 pb-1`}>Sales</h4>
					<div className={styles.pie}></div>
					<span className="m-1 text-primary">Year: 2022</span>
					<span className="text-muted">•</span>
					<span className="m-1 text-warning">Year: 2021</span>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
