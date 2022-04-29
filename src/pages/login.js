import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import { Button } from "../components/button";

// login with socials https://supabase.com/auth
function Login() {
    let [email, setEmail] = useState("");

    function onChange(e) {
        setEmail(e.target.value);
        console.log("test");
    }

    function onSubmit(e) {
        e.preventDefault();
        supabase.auth.signIn({ email: email }).then(function () {
            console.log("You are logged in");
        });
    }
    return (
        <div className="panel">
            <h2 className="h3 panel__title">Log in</h2>

            <form onSubmit={onSubmit} className="inputs">
                <div className="input">
                    <input
                        className="input__login"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={onChange}
                    />
                </div>
                <Button>Continue</Button>
            </form>
        </div>
    );
}
export default Login;
