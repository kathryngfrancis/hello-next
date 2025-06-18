"use client";
import React from "react";
import { addGuess } from "../firebase";

const CORRECT_CODE = "Fancy Like";

export default function GuessTaker() {
  const [code, setCode] = React.useState("");
  const [showHint, setShowHint] = React.useState(false);
  const [showLink, setShowLink] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    addGuess(code);

    const isCorrect = code === CORRECT_CODE;
    setShowLink(isCorrect);
    setShowHint(!isCorrect);

    setCode("");
  }

  return (
    <div>
      <p>What do you say before a debut?</p>
      <form name="makeGuess" onSubmit={handleSubmit}>
        <div className="row">
          <input
            id="auth-code"
            type="text"
            name="guess"
            autoComplete="off"
            required={true}
            maxLength={50}
            value={code}
            onChange={(event) => {
              setCode(event.target.value);
            }}
          />
          <button type="submit">Guess</button>
        </div>
      </form>
      {showLink && (
        <div>
          <a href="https://hypernotepad.com/n/3d47c4a246347785">
            https://hypernotepad.com/n/3d47c4a246347785
          </a>
          <p>Password: Fancy Like</p>
        </div>
      )}
      {showHint && (
        <div>
          <p>Nope, try again. Something deleted.</p>
        </div>
      )}
    </div>
  );
}
