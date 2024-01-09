import React from "react";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from 'next/router'
import { menusData } from "../src/utills/mockData";

const MenuListItem = ({ item }) => {
	const router = useRouter();
	let flag = false;
	if (item?.name === 'Dashboard') {
		flag = router.pathname === "/";
	} else if (router.pathname.includes(item?.url) && router.pathname !== "/") {
		flag = true;
	}
	return <li className={`${flag ? styles.activeMenu : ''}`}>
		<Link href={item?.url} children={
			<a>
				<>
					<FontAwesomeIcon
						icon={item?.icon}
						style={{ width: "15px", cursor: "pointer" }}
					/>
					<span>
						{' '}{item?.name}
					</span>
				</>
			</a>
		} />
	</li>;
}
function LeftNavbar({ setMyState, myState }) {
	return (
		<>
			<div className={`${styles.navcontainer} ${myState ? styles.collapseNavcontainer : ''}`}>
				<div className={`${styles.logo} ${myState ? styles.collapseLogoAndItem : ''}`} title="Adminart">
					<h2><Link href="/" >Adminart</Link></h2>
					{/* <Image src="/bgdGbt01.svg" width={100} height={100} /> */}
				</div>
				<div className={`${styles.barsDiv}`} onClick={() => {
					setMyState(!myState);
				}} title={myState ? 'Expand' : 'Collapse'}>
					<FontAwesomeIcon icon={faBars} className={`${styles.barsButton} ${myState ? styles.collapseBarsButton : ''}`} />
				</div>
				<div className={styles.wrapper}>
					<ul className={`${myState ? styles.collapseLogoAndItem : ''}`}>
						{menusData?.map((item) => (
							<MenuListItem item={item} />
						))}
					</ul>
				</div>
			</div>
		</>
	);
}

export default LeftNavbar;
