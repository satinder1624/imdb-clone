import React from "react";
import { signIn } from "next-auth/react";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import YellowButton from "../../commonUI/YellowButton/YellowButton";
import styles from "../../components/signInIMDB/styles/styles.module.css";

export default function SignInIMDB() {
  return (
    <div className={styles.container}>
      <div>
        <BookmarkAddIcon />
        <h3>Sign in to access your Watchlist</h3>
        <YellowButton url="/test" text={"Sign In"} action={signIn} />
      </div>
    </div>
  );
}
