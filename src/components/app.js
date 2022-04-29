import React, { useState, useEffect } from "react";
import Login from "../pages/login";
import SignUp from "../pages/signUp";
import { supabase } from "../supabaseClient";
import Exercises from "../components/exercises";
import NewExercise from "../components/NewExercise";
import "../Styles/App.scss";

function App() {
    const [session, setSession] = useState(null);

    useEffect(() => {
        setSession(supabase.auth.session());
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);
    console.log(session);

    let markup = <Login />;
    if (session && session.user) {
        markup = (
            <div>
                <NewExercise />
            </div>
        );
    }
    return (
        <div>
            <h1>Supabase + React + Workout</h1>
            {markup}
        </div>
    );
}

export default App;
