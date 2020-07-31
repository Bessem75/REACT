import React from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ setData, setSearchCom, setSearchChar, token, setToken }) => {
  const history = useHistory();
  return (
    <div className="header">
      <div>
        <img
          alt="logo"
          src="https://res.cloudinary.com/lereacteur-apollo/image/upload/v1582097342/react-new-exercices/Marvel/langfr-1920px-MarvelLogo.svg_uw9pi8.png"
        />
        <ul>
          <li
            onClick={() => {
              setSearchCom("");
              setSearchChar("");
              setData([]);
            }}
          >
            <Link to="/">Characters</Link>
          </li>
          <li
            onClick={() => {
              setData([]);
              setSearchCom("");
              setSearchChar("");
            }}
          >
            <Link to="/comics">Comics</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </div>
      <div className="log-sign">
        {!token ? (
          <Link to="/log_in">Login</Link>
        ) : (
          <span
            onClick={() => {
              setToken(null);
              Cookies.remove("token");
              Cookies.remove("username");
              history.push("/");
            }}
          >
            Logout
          </span>
        )}

        <Link to="/sign_up">Signup</Link>
      </div>
    </div>
  );
};

export default Header; 
