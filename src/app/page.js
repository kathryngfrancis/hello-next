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

      <form onSubmit={handleSubmit}>
        <div className="row">
          <input
            id="auth-code"
            type="text"
            autoComplete="off"
            required={true}
            maxLength={60}
            value={code}
            onChange={(event) => {
              setCode(event.target.value);
            }}
          />
          <button>Validate</button>
        </div>
      </form>
      <p>{response}</p>
    </main>
  );
}

export default Home;
