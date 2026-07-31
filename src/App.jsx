// src/App.jsx
import { useState } from "react";
import NavBar from "./components/NavBar";
import MailboxForm from "./components/MailboxForm";
import MailboxList from "./components/MailboxList";

const App = () => {

  const [mailbox, setMailbox]= useState([])

  const addBox = (formData) => {
    const nextId = {
      ...formData, _id: mailbox.length +1
    }
    setMailbox([...mailbox, nextId])
  }

  return (
    <>
    <h1>Hello world!</h1>
    <NavBar/>
    <MailboxForm addBox={addBox}/>
    <MailboxList mailbox={mailbox}/>

    </>
  )

};

export default App;


