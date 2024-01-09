import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
// import Header from "./components/Header";
// import LeftNavbar from "./components/LeftNavbar";
import Dashboard from "../components/Dashboard/page.js";

export default function Home({ myState, isLoggedIn }) {

	return (
		<div className={styles.container}>
			<Head>
				<title>Adminart</title>
				<meta name="description" content="adminart | Powered by GV Technolab" />
				<link rel="icon" href="/art.ico" />
			</Head>
			<div className={styles.container}>
				{/* <Header />
				<LeftNavbar /> */}
				<Dashboard myState={myState} isLoggedIn={isLoggedIn} />
			</div>
		</div>
	);
}
