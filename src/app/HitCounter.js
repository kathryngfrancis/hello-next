// src/HitCounter.js
import { useEffect } from "react";

import { addHit } from "../firebase";

function HitCounter() {
  useEffect(() => {
    addHit();
  }, []);

  return null; // This doesn't render anything, it just does the update
}

export default HitCounter;
