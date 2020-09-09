import React, { useState } from "react";
import Login from "./Login";
import useLocalStorage from "../hooks/useLocalStorage";

function App() {
  const [id, setId] = useLocalStorage("id");

  return (
    <>
      <h1>
        WhatsApp (Messanger App) clone with React & Socket.io learned from
        https://www.youtube.com/watch?v=tBr-PybP_9c
      </h1>
      {id}
      <Login onIdSubmit={setId} />
    </>
  );
}

export default App;
