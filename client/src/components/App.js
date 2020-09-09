import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../contexts/ContactsProvider";
import { ConversationsProvider } from "../contexts/ConversationsProvider";

function App() {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  );

  return (
    <>
      <h1>
        WhatsApp (Messanger App) clone with React & Socket.io learned from
        https://www.youtube.com/watch?v=tBr-PybP_9c
      </h1>
      {id ? dashboard : <Login onIdSubmit={setId} />}
    </>
  );
}

export default App;
