import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLock
} from "@fortawesome/free-solid-svg-icons";
import router from "next/router";

function Login({ setIsLoggedIn }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [usernameError, setUsernameError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const loginAdmin = (e) => {
		e.preventDefault();
		if (username === 'admin' && password === 'admin') {
			// setIsLoggedIn(true);
			sessionStorage.setItem("isLoggedIn", true);
			router.reload();
		}
		if (username !== 'admin') {
			setUsernameError('Invalid email.');
		} else {
			setUsernameError('');
		}
		if (password !== 'admin') {
			setPasswordError(`Password doesn't match.`);
		} else {
			setPasswordError('');
		}
	}
	return (
		<>
			<Head>
				<title>Login - Adminart</title>
				<meta name="description" content="adminart | Powered by GV Technolab" />
				<link rel="icon" href="/art.ico" />
			</Head>
			<div className={`container w-100`}>
				<div className="row">
					<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
						<div className="card border-0 shadow rounded-3 my-5">
							<div className={`${styles.lockIcon}`}>
								<FontAwesomeIcon icon={faLock} style={{ width: "30px", height: "30px" }} title="Edit" />
							</div>
							<div className="card-body p-4 p-sm-5 ">
								<div className={`${styles.logo} text-center border-bottom mb-4`}>
									<h2>Adminart</h2>
								</div>
								<h5 className="card-title text-center mb-3 fw-light fs-5 text-muted">Sign In</h5>
								<form onSubmit={loginAdmin}>
									<div className="form-floating mb-3">
										<label htmlFor="floatingInput">Email:</label>
										<input
											type="text"
											className={`form-control ${usernameError ? 'border-danger' : ''}`}
											id="floatingInput"
											placeholder="name@example.com"
											onChange={(e) => {
												setUsername(e.target.value);
											}}
										/>
										{usernameError && <small className="text-danger">{usernameError}</small>}
									</div>
									<div className="form-floating mb-3">
										<label htmlFor="floatingPassword">Password:</label>
										<input
											type="password"
											className={`form-control ${passwordError ? 'border-danger' : ''}`}
											id="floatingPassword"
											placeholder="Password"
											onChange={(e) => {
												setPassword(e.target.value);
											}}
										/>
										{passwordError && <small className="text-danger">{passwordError}</small>}
									</div>
									<div className="d-grid text-center">
										<button type="submit" className="btn btn-primary btn-login fw-bold" >
											Sign in
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
