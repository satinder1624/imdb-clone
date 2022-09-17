import React from "react";
import { useSession } from "next-auth/react";
import WatchListMovies from "../../components/watchListMovies/WatchListMovies";
import SignInIMDB from "../../components/signInIMDB/signInIMDB";

export default function WatchList() {
  const { data: session } = useSession();
  // Or make a componenet and call it here
  return session ? <WatchListMovies /> : <SignInIMDB />;
}
