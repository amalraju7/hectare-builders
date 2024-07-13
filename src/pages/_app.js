import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from '../components/layout/layout';
import '../styles/globals.scss';
import { ScrollToTop } from '../components/scroll';

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5dzYI79GU0Y2c2SLGMbdUInxaJoyk8Fk",
  authDomain: "hectare-builders.firebaseapp.com",
  projectId: "hectare-builders",
  storageBucket: "hectare-builders.appspot.com",
  messagingSenderId: "159889420572",
  appId: "1:159889420572:web:ff4cc2d8c386487c180ad9",
  measurementId: "G-CL8EEYDY70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Component {...pageProps} />
            <ScrollToTop />
        </Layout>
    );
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default MyApp;
