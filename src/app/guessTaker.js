"use client";
import React from "react";
import { addGuess } from "../firebase";

const CORRECT_CODE = "Who Let The Dogs Out";

export default function GuessTaker({ docId }) {
  const [code, setCode] = React.useState("");
  const [textBelow, setTextBelow] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    let newtb = "";
    if (code === CORRECT_CODE) newtb = "yes";
    else if (
      code.toLowerCase().replaceAll(" ", "") ===
      CORRECT_CODE.toLowerCase().replaceAll(" ", "")
    )
      newtb = "case and spaces";
    else newtb = "no";

    const confirmedTextBelow = await addGuess(code, newtb);

    setTextBelow(confirmedTextBelow);

    setCode("");
  }

  return (
    <div>
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
              setTextBelow("");
            }}
          />
          <button type="submit">Test</button>
        </div>
      </form>
      <div>
        <p>{textBelow}</p>
        {textBelow === "yes" && (
          <p>
            <a href={`https://hypernotepad.com/n/${docId}`}>
              hypernotepad.com/n/{docId}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
