import React from "react";
import { useNavigate } from "react-router-dom";
import "../Register/Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Register = (event) => {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleRegister = (event) => {
    event.preventDefault();
    //const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password);
  };
  return (
    // Our own created form for learning environment variable

    <div className="register-form">
      <h2 style={{ textAlign: "center" }}>Please Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Your name" required />

        <input type="email" name="email" placeholder="Enter email" required />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
        <br />
        <input type="submit" value="Register" />
      </form>
      <p>
        Already have an account?{" "}
        <span
          style={{ cursor: "pointer" }}
          className="text-primary"
          onClick={navigateLogin}
        >
          Please Login
        </span>
      </p>
    </div>
  );
};

export default Register;
