import React from "react";
import Header from "./header/Header";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>IMDB Clone 2.0</title>
        <meta name="description" content="IMBB Clone 2.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
    </div>
  );
}
