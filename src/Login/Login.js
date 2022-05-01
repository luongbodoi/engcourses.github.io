import "./Login.css";

import React, { useState } from "react";
import ReactDOM from "react-dom";

function Login() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">
                    Sign In
                </div>
            </div>
        </div>
    );
}

export default Login;
