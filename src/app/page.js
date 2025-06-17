"use client";
import React from "react";

/* 


*/

const CORRECT_CODE = "Fancy Like";

function Home() {
  const [code, setCode] = React.useState("");
  const [response, setResponse] = React.useState("");

  function handleSubmit(event) {
    // event.preventDefault();

    const isCorrect = code === CORRECT_CODE;

    alert(
      isCorrect
        ? "https://hypernotepad.com/n/3d47c4a246347785"
        : "Try again later"
    );
  }

  return (
    <main>
      <h1>Hello There Next!</h1>

      <form name="makeGuess" onSubmit={handleSubmit} netlify>
        <div className="row">
          <input
            id="auth-code"
            type="text"
            name="guess"
            autoComplete="off"
            required={true}
            maxLength={60}
            value={code}
            onChange={(event) => {
              setCode(event.target.value);
            }}
          />
          <button type="submit">Validate</button>
        </div>
      </form>

      <form name="contact" data-netlify="true">
        <p>
          <label>
            Name <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email <input type="email" name="email" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      <p>{response}</p>
    </main>
  );
}

export default Home;
