import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LogIn = ({ onLogin }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://lereacteur-marvel.herokuapp.com/user/log_in",
        {
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        onLogin(response.data.token, response.data.username);
        history.push("/");
      } else {
        alert("Une erreur est survenue.");
      }
    } catch (error) {
      console.log(error.message); 
    }
  };
  return (
    <div className="log-in-container">
      <form onSubmit={handleSubmit}>
        <div>
          <span>Email *</span>
          <input
            placeholder="spider-man@marvel.org"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <span>Password *</span>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default LogIn;
