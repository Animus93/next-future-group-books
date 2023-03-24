import Head from "next/head";
import { Provider } from "react-redux";
import "@/styles/globals.css";
import Layout from "@/component/Layout";
import store from "@/redux/store";
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Books</title>
        <link rel="shortcut icon" type="svg" href="./img/favicon.svg"></link>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
      <NextNProgress
        color="#29D"
        startPosition="10"
        stopDelayMs="200"
        height="13"
      />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
