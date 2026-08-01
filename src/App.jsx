// src/App.jsx
import { useState } from "react";
import { Route, Routes } from 'react-router'
import NavBar from "./components/NavBar";
import MailboxForm from "./components/MailboxForm";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";

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
    
    <NavBar/>
    <Routes>
      <Route path="/" element={<main><h1>Post Office</h1></main>}/>
      <Route path="/mailboxes" element={<MailboxList mailbox={mailbox}/>}/>
      <Route path="/new-mailbox" element={ <MailboxForm addBox={addBox}/>}/>
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailbox = {mailbox}/>}/>
      </Routes >

      
   
    

    </>
  )

};

export default App;


