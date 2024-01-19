import { Link } from 'react-router-dom'
import Logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
function Header() {
  return (
    <nav>
        <div className="container nav__container">
        <Link to={"/"} className='nav__logo'>
            <img src={Logo} alt="logo" />
        </Link>
        <ul className='nav__menu'>
            <li>
                <Link to={"/profile"}>Profile</Link>
            </li>
            <li>
                <Link to={"/create"}>Create Post</Link>
            </li>
            <li>
                <Link to={"/authors"}>Authors</Link>
            </li>
            <li>
                <Link to={"/logout"}>Logout</Link>
            </li>
        </ul>

        <button className='nav__toggle-btn'>
        {/* <FaBars /> */}
        <AiOutlineClose />
        </button>
        </div>
    </nav>
  )
}

export default Header