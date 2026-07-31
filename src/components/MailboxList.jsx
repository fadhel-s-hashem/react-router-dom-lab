import { useState } from "react"
import { Link } from "react-router"

const MailboxList = (props) => {

    return(
        <div>
        <h1> Mailbox List</h1>
        ther are {props.mailbox.length} mailbox

       {props.mailbox.map((mailbox) => (
        <>
         <p>{mailbox.boxOwner}</p>
         </>
       ))}
        </div>
    )
}

export default MailboxList