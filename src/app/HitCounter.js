// src/HitCounter.js
"use client";
import { useEffect, useState } from "react";

import { addHit } from "../firebase";

function HitCounter({ docId }) {
  useEffect(() => {
    addHit();
  }, []);

  return <p>Come back later</p>;
}

export default HitCounter;
