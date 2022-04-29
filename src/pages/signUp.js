import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import { Button } from "../components/button";

// login with socials https://supabase.com/auth
function SignUp() {
    return (
        <div className="panel">
            <h2 className="h3 panel__title">Sign Up</h2>

            <form className="inputs">
                <div className="input">
                    <input
                        className="input__login"
                        type="email"
                        placeholder="Email"
                        value=""
                        onChange=""
                    />
                </div>
                <Button>Continue</Button>
            </form>
        </div>
    );
}
export default SignUp;
