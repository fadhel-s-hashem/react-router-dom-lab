import { useState } from "react"

const MailboxForm = () => {

const initialState = {
  _id: 1,
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

 }


    return(
        <div>
            <h1>New Mailbox</h1>
            <form>
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