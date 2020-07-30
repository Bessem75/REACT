import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignUp = ({ onLogin }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://lereacteur-marvel.herokuapp.com/user/sign_up",
        {
          email: email,
          username: username,
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
          <span>Username *</span>
          <input
            placeholder="Peter Parker"
            onChange={(e) => setUsername(e.target.value)}
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

export default SignUp;
