import React, { useState, useEffect } from "react";
import "primeicons/primeicons.css";
// import "./Login.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useDispatch, connect } from "react-redux";
// import LoginAction from "../../../Redux/Action/LoginAction";
import "../pages/Login.css";

function Login() {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setuserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isFormSubmitted, setFormSubmitted] = useState(false);
//   const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const userdata = {
      userName: userName,
      password: password,
    };
    // dispatch(LoginAction(userdata));
    console.log("userdata", userdata);
    e.preventDefault();
    const minuserNameLength = 5;
    const minPasswordLength = 7;
    setuserNameError("");
    setPasswordError("");

    if (!userName) {
      setuserNameError("Please enter a valid userName.");
    } else if (userName.length < minuserNameLength) {
      setuserNameError(
        `userName must be at least ${minuserNameLength} characters.`
      );
    }

    if (!password) {
      setPasswordError("Please enter a valid password.");
    } else if (password.length < minPasswordLength) {
      setPasswordError(
        `Password must be at least ${minPasswordLength} characters.`
      );
    }
    setFormSubmitted(true);
  };

  useEffect(() => {
    if (isFormSubmitted) {
      setFormSubmitted(false);
    }
  }, [isFormSubmitted]);

  return (
    <>
      <div className={`left_div shadow-lg container-fluid`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form
              action="/home"
              className="buyer-sign-in-form"
              onSubmit={handleSubmit}
            >
              <h2 className="title fw-bold">SIGN IN</h2>
              <div className="input-field">
                <i className="pi pi-user "></i>
                <input
                  type="text"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setuserName(e.target.value)}
                />
              </div>
              {userNameError && (
                <p className="p-0 m-0" style={{ color: "#F15E42" }}>
                  {userNameError}
                </p>
              )}
              <div className="input-field">
                <i className="pi pi-lock "></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {passwordError && (
                <p p className="p-0 m-0" style={{ color: "#F15E42" }}>
                  {passwordError}
                </p>
              )}
              <input
                type="submit"
                value="Login"
                className="btn-buyer fw-bold rounded-pill"
              />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a
                  href="https://www.facebook.com/login.php"
                  className="social-icon"
                >
                  <i className="pi pi-facebook"></i>
                </a>
                <a
                  href="https://twitter.com/i/flow/login"
                  className="social-icon"
                >
                  <i className="pi pi-twitter"></i>
                </a>
                <a
                  href="https://www.google.co.in/webhp"
                  className="social-icon"
                >
                  <i className="pi pi-google"></i>
                </a>
                <a
                  href="https://www.linkedin.com/login"
                  className="social-icon"
                >
                  <i className="pi pi-linkedin"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     isLoading: state.LoginReducer.loading,
//     jwtToken: state.LoginReducer.JWTtoken,
//     isLoggedIn: state.LoginReducer.isLoggedIn,
//   };
// };
export default Login;
// connect(mapStateToProps)(Login);
