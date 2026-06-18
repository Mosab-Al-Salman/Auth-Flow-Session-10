import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";
import { FaRegSun, FaMoon } from "react-icons/fa6";
import { Data } from "../context/ThemeContext.jsx";
import { auth } from "../firebase/config";
import "./Header.css";
import "../theme.css";

const Header = () => {
  const { theme, changeTheme } = useContext(Data);
  const [user, loading, error] = useAuthState(auth);


  return (
    <header className="header comp">
      <h1><Link to="/">Web Dev Roadmap</Link></h1>
      <ul className="flex">
  {!loading && (
    <>
      {user ? (
        <>
          <li className="main-list" style={{ color: "var(--main-color)", fontWeight: "bold", marginRight: "10px" }}>
            Hello {user.email ? user.email.split("@")[0] : ""}
          </li>
          <li className="main-list"><NavLink className="main-link" to="/Basic">Basics</NavLink></li>
          <li className="main-list"><NavLink className="main-link" to="/Fromework">Fromeworks</NavLink></li>
          <li className="main-list"><NavLink className="main-link" to="/Tips">Tips</NavLink></li>
          <li className="main-list">
            <button className="main-link" onClick={() => signOut(auth)} style={{ background: "none", border: "none", cursor: "pointer", color: "inherit" }}>
              Sign out
            </button>
          </li>
        </>
      ) : (
        <>
          <li className="main-list"><NavLink className="main-link" to="/signin">Sign In</NavLink></li>
          <li className="main-list"><NavLink className="main-link" to="/signup">Sign Up</NavLink></li>
        </>
      )}
    </>
  )}
  <li className="main-list">
    <button className="theme" onClick={() => changeTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <FaMoon /> : <FaRegSun />}
    </button>
  </li>
</ul>
    </header>
  );
};

export default Header;