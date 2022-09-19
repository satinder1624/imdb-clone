import Image from "next/image";
import Banner from "../components/banner/Banner";
import Feature from "../components/featureToday/Feature";
import Header from "../components/header/Header";
import Trending from "../components/trending/Trending";
import WhatToWatch from "../components/whatToWatch/WhatToWatch";
import db from "../firebase";
import styles from "../styles/Home.module.css";
import { getSession, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className={styles.Container}>
      <main className={styles.Main}>
        {/* Header */}

        {/* Banner */}
        <Banner />
        {/* Trending Video */}
        <Trending />
        {/* Feature Today */}
        <Feature />
        {/* What to Watch */}
        <WhatToWatch />
      </main>
    </div>
  );
}
