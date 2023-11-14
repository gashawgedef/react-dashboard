
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/login" >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
