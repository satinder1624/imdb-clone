import React, { useEffect } from "react";
import Logo from "../logo/Logo";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import styles from "../header/styles/header.module.css";
import { style } from "@mui/system";
import { useSession, signIn, signOut } from "next-auth/react";
import db from "../../firebase";
import Link from "next/link";

export default function Header() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      const registerNewUser = async () => {
        // Check user already register ?
        const check = (
          await db.collection("register").doc(session.user.email).get()
        ).exists;

        // !check means user have will register and notify by welcome email for first time.
        if (!check) {
          // Insert
          // console.log("insert new user");
          db.collection("register").doc(session.user.email).set({
            name: session.user.name,
            email: session.user.email,
            profile: session.user.image,
          });
        }
      };
      registerNewUser();
    }
  }, [session]);

  return (
    <section className={styles.headerSection}>
      <div className={styles.headerContainer}>
        {/* Mobile Responsive Menu */}
        <div className={styles.responsiveMenuIcon}>
          {/* <MenuIcon className={`${styles.icon} ${styles.responsiveMenuIcon}`} /> */}
          <MenuIcon className={styles.icon} />
        </div>
        {/* logo */}
        <Logo />

        {/* Menu */}
        <div className={styles.IconContainer}>
          <MenuIcon className={styles.icon} />
          <span>Menu</span>
        </div>

        {/* Search Input */}
        <div className={styles.headerSearchContainer}>
          {/* DropDown All */}
          <div className={styles.headerDropdownAll}>
            <span>All</span>
            <ArrowDropDownIcon />
          </div>
          {/* Search Input */}
          <div className={styles.headerSearch}>
            <input type="text" placeholder="Search IMDb" />
            <SearchIcon className={styles.searchIcon} />
          </div>
        </div>

        {/* Mobile Responsive Search */}
        <div>
          <SearchIcon
            className={`${styles.searchIcon} ${styles.responsiveSearchIcon}`}
          />
        </div>

        {/* IMDb Pro */}
        <div className={styles.headerProContainer}>
          <span>IMDb</span>
          <span className={styles.headerProSpan}>Pro</span>
        </div>

        {/* vertical-line */}
        <div className={styles.verticalLine}></div>

        {/* Watchlist */}
        <Link href="/watchlist/">
          <div
            className={`${styles.IconContainer} ${styles.responsiveWatchListContainer}`}
          >
            <BookmarkAddIcon className={styles.icon} />
            <span className={styles.watchListText}>Watchlist</span>
          </div>
        </Link>

        {/* Sign In */}
        <div
          className={styles.signInContainer}
          onClick={!session ? signIn : signOut}
        >
          <span>
            {session ? `👋${session?.user?.name?.split(" ")[0]}` : "Sign In"}
          </span>
        </div>

        {/* Languages*/}
        <div className={styles.languageContainer}>
          <span>EN</span>
        </div>
      </div>
    </section>
  );
}
