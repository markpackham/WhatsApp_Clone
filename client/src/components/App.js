import React, { useState } from "react";
import Login from "./Login";

function App() {
  const [id, setId] = useState();

  return (
    <>
      <h1>
        WhatsApp clone with React & Socket.io learned from
        https://www.youtube.com/watch?v=tBr-PybP_9c
      </h1>
      <Login onIdSubmit={setId} />
    </>
  );
}

export default App;
