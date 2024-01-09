import React from "react";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPowerOff
} from "@fortawesome/free-solid-svg-icons";
import router from "next/router";

function Header() {
	return (
		<div className={`${styles.headcontainer}`}>
			<div className={styles.headwrapper}>
				{/* <div className={styles.menuImg}>
					<Image src="/menu.png" alt="profile" height={21} width={21} className={styles.image} />
				</div> */}
				<div className={styles.profile}>
					<h3 className="m-auto">
						Hello, <span>Admin</span>
					</h3>
					<p>
						<FontAwesomeIcon
							icon={faPowerOff}
							title="Logout"
							onClick={() => {
								sessionStorage.setItem("isLoggedIn", false);
								router.reload();
							}}
						/>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Header;
