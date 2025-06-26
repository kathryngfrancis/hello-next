"use client";
import React from "react";
import HitCounter from "./HitCounter";
import GuessTaker from "./guessTaker";

/* 
https://hypernotepad.com/n/3d47c4a246347785
The password is the thing you say right before a debut. I think it's
        meant as a clarification for the audience so they won't be confused.

*/

function Home() {
  return (
    <main>
      <a href="https://hypernotepad.com/n/596b5c3afd13942d">
        https://hypernotepad.com/n/596b5c3afd13942d
      </a>
      <p>The password is AbleHeart. (no space)</p>
      <HitCounter></HitCounter>
    </main>
  );
}

export default Home;
