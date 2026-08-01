import { Link } from "react-router"

const NavBar = () => {
    return(
        <div>
        <Link to='/'>Home</Link> {''}
        <Link to='/mailboxes'>Mailbox list</Link> {''}
        <Link to='/new-mailbox'>New Mailbox </Link>
             
        </div>


    )

}

export default NavBar