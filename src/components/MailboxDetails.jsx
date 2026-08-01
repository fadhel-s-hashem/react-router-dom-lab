import { useParams } from "react-router"


const MailboxDetails = (props) => {

    const {mailboxId} = useParams()
    const mailbox = props.mailbox.find((mailbox) => {
        return mailbox._id === Number(mailboxId)

    })

    return(
        <>
        <h1>Mailbox {mailbox._id}</h1>
        <br />
        <h3> Details</h3>
        <p>Boxholder: {mailbox.boxOwner} </p>
        <p>BoxSize: {mailbox.boxSize}</p>
        
        </>
    )
}

export default MailboxDetails