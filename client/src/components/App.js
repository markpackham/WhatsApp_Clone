import React from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import useLocalStorage from "../hooks/useLocalStorage";

function App() {
  const [id, setId] = useLocalStorage("id");

  return (
    <>
      <h1>
        WhatsApp (Messanger App) clone with React & Socket.io learned from
        https://www.youtube.com/watch?v=tBr-PybP_9c
      </h1>
      {id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />}
    </>
  );
}

export default App;
