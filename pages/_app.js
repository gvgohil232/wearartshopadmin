import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import '../styles/globals.css'
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import LeftNavbar from "../components/LeftNavbar";
import Login from './login';


function MyApp({ Component, pageProps }) {
  const [myState, setMyState] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem('isLoggedIn'));
  }, [])
  return <>
    <Head>
      <title>Adminart</title>
      <meta name="description" content="adminart | Powered by GV Technolab" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/art.ico" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
    </Head>
    {isLoggedIn === "true" ? (
      <>
        <div className={styles.container}>
          <Header />
          <LeftNavbar setMyState={setMyState} myState={myState} />
          {/* <Content /> */}
        </div>
        <Component {...pageProps} myState={myState} />
      </>
    ) :
      <>
        <Login />
      </>
    }
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
  </>

}

export default MyApp
