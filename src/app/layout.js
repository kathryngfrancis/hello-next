import React from "react";

import "./styles.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        <form name="makeGuess" method="POST" data-netlify="true" hidden>
          <input type="text" name="guess" />
        </form>
      </body>
    </html>
  );
}

export default RootLayout;
