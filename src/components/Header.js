import { Link, NavLink} from "react-router";
import "./Header.css"
const Header = () => {
  return (
    <header className="header comp">
        <h1><Link to="/">Web Dev Roadmap</Link></h1>
        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/Basic">Basics</NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/Fromework">Frameworks</NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/Tips">Tips</NavLink>
          </li>
        </ul>
      </header>
  );
}

export default Header;