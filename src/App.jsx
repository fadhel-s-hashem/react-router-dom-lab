// src/App.jsx
import { useState } from "react";
import NavBar from "./components/NavBar";
import MailboxForm from "./components/MailboxForm";

const App = () => {

  const [mailbox, setMailbox]= useState([])

  return (
    <>
    <h1>Hello world!</h1>
    <NavBar/>
    <MailboxForm mailbox={mailbox} setMailbox={setMailbox}/>

    </>
  )

};

export default App;


