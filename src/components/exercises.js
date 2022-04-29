import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

function Exercises() {
    let [exercises, setExercises] = useState([]);

    useEffect(function () {
        supabase
            .from("exercises")
            .select()
            .then(function (data) {
                // Console logs the exercises data (json objects)
                console.log(data);

                setExercises(data.body);
            });
    }, []);

    useEffect(
        function () {
            supabase
                .from("exercises")
                // on INSERT into EXERCISES this runs the function below
                //  This is when an item is added to the exercises table
                //      This could be from within the app. or within the database
                .on("INSERT", function (payload) {
                    console.log(payload);
                    // uses the SPREAD operator ... to map the exercises into a new array. And then adds a .new one to the payload
                    setExercises([...exercises, payload.new]);
                })
                // This subscribes to the exercises table, so that we can see when it is updated.
                .subscribe();
        },
        // this is the function that calls this effect.
        [exercises]
    );
    // let exercisesMarkup = exercises.map(function (exercisesData) {
    //     return (
    //         <div key={exercisesData.id}>
    //             <p>{exercisesData.content}</p>
    //             {/* <p>Hello</p> */}
    //         </div>
    //     );
    // });

    // return <div>{exercisesMarkup}</div>;
    return <div>test</div>;
}

export default Exercises;
