import React from "react";

const Register = () => {
  return (
    // Our own created form for learning environment variable

    <div className="register-form">
      <form>
        <input type="text" name="Your name" placeholder="Your name" required />

        <input
          type="email"
          name="Your Email"
          placeholder="Enter email"
          required
        />

        <input
          type="password"
          name="Enter password"
          placeholder="Enter password"
          required
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
