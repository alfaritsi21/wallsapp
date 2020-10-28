import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://lh3.googleusercontent.com/proxy/dckFYowp3wpylytG9UvmjsY5nu5j6LfkY5thxcruPVMlamwhWtFbHFl6qv-P1OCf58m_tqTCEcjpKl2-TwMzdrIcAWVU4zrdYFVr2FwAtJqS7Q"
          alt=""
        />
        <h1>WALLSAPP</h1>
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
