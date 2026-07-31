import { useState } from "react"

const MailboxForm = (props) => {

const initialState = {
  _id: '',
  boxSize: '',
  boxOwner: '',
}

const [formData, setFormData] = useState(initialState)

const handelChange = (event)=> {
    console.log(event.target.name)
    console.log(event.target.value)

    setFormData({...formData, [event.target.name]: event.target.value})
}

 const handelSubmit = (event) => {
        event.preventDefault()

        props.setMailbox([...props.mailbox, formData])
        setFormData(initialState)

 }


    return(
        <div>
            <h1>New Mailbox</h1>

            <form onSubmit={handelSubmit}>
                Enter a Boxholder:
                <input type="text" name="boxOwner" value={formData.boxOwner} onChange={handelChange}/>

                Select a box size
                <select name="boxSize" value={formData.boxSize} onChange={handelChange}>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
                </select>

                <button type="submit"> creat mailbox</button>

            </form>

        

        </div>
    )
}

export default MailboxForm