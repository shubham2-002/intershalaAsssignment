import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Utils/firbase";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import "./auth.css";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
       
          navigate("/users");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } catch (e) {
  
    }
  };

  const siginGoogle = () => {
    const provider = new GoogleAuthProvider();
    
  
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
               
        navigate("/users");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      
        console.error("Google Sign-In Error:", errorCode, errorMessage);
      });
  };

  return (
    <div className="login-page">
      <div>
        <h1 className="heading">Sign In</h1>
      </div>
      <div className="signInForm">
        <form className="authForm" onSubmit={handleSubmit}>
          <input className="emailInput"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input className="passwordInput"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="signIn" type="submit">
            Sign In
          </button>
        
        </form>
        <button type="" className="googleSignIn" onClick={siginGoogle}>
            Sign In With Google 
          </button>
      </div>
    </div>
  );
};

export default Signin;
