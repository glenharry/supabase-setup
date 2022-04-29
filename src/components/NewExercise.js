import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Panel } from "../components/panel";
import { Form } from "../components/form";
import { Button } from "../components/button";
// notes
//  TODO 1. Download most recent exercises JSON array from SupaBase
//  TODO 2. Turn JSON array into JS array and store into a variable called exercises
//  TODO 3. Add new index to the array that stores all the data from the most recent form input (a new exercise)
//  TODO 4. Convert the exercises array back into JSON
//  TODO 5. Upload exercises  JSON array into Supabase

// TODO Next Items to carry out
//  1. Loop through exercises array and Print to screen. Most recent exercise first.
//      ? Include an edit button?
//  2. When an exercise is entered into the exercise form, add it to database of exercises that the user can choose from in the future.
//      * Then add a check to see if it exists already and offer a drop down
//  3.

// The below youtube video helped me understand forms
// https://www.youtube.com/watch?v=8hU0I8rY4u4
function NewExercise() {
    //  1. Download most recent exercises JSON array from SupaBase
    // the below does not work - im getting an error

    useEffect(function (data) {
        let { data: exercises, error } = supabase
            .from("exercises")
            .select("exerciseName,exerciseWeight,exerciseReps,exerciseSetReps")
            .then(function (data) {
                let exerciseData = toJSON(data.data);
                exerciseData = JSON.parse(exerciseData);
                // console.log(exerciseData[1].exerciseObject.name);
                console.log(exerciseData);
            });
    }, []);

    // let [exerciseObject, getExercises] = useState([]);

    // useEffect(function () {
    //     supabase
    //         .from("exerciseObject")
    //         .select()
    //         .then(function (data) {
    //             // Console logs the exercises data (json objects)
    //             console.log(data);

    //             getExercises(data.body);
    //         });
    // }, []);
    // convert object to JSON
    function toJSON(data) {
        return JSON.stringify(data);
    }
    // Convert JSON to Object
    function toJSObject(data) {
        return JSON.parse(data);
    }
    // TODO I dont think I am thinking about this correctly.
    // TODO     I think maybe that useState will handle the array/object creation.
    // TODO     So maybe I need to remove the createExercise() function below.
    // TODO     And just use the const below "values"... Watch https://www.youtube.com/watch?v=K3O1FTsYkDQ

    // values is just the form content value
    const [values, setValues] = useState({
        exerciseName: "",
        exerciseWeight: "",
        exerciseReps: "",
        // TODO I will need to add each form input here
    });
    // console.log(values);

    // TODO I will need to create a new event handler for each form input below
    // The below "const handle"ers just handle the input values of the forms
    const handleExerciseName = (event) => {
        setValues({ ...values, exerciseName: event.target.value });
    };

    const handleExerciseWeight = (event) => {
        setValues({ ...values, exerciseWeight: event.target.value });
    };

    const handleExerciseReps = (event) => {
        setValues({ ...values, exerciseReps: event.target.value });
    };

    // Exercise Creation
    let exercises = []; // creates empty array to hold the exercises

    function createExercise() {
        // Create unique ID based on time and date
        let exerciseID = Date.now();

        // Create Exercise Class
        class exercise {
            constructor(id, name, weight, reps) {
                this.id = id;
                this.name = name;
                this.weight = weight;
                this.reps = reps;
                // add extra data points here
            }
        }

        // Assigns values to newly created class from form inputs
        let currentExercise = new exercise(
            exerciseID,
            values.exerciseName, // uses the value from the relevant form to generate object value.
            values.exerciseWeight, // uses the value from the relevant form to generate object value.
            values.exerciseReps // uses the value from the relevant form to generate object value.
            // add extra data points here
        );
        console.log(currentExercise);

        //  TODO - need to ensure the below is able to add multiple Items to the array.
        exercises.push(currentExercise);
        // console.log(JSONTest);
    }

    function handleSubmit(event) {
        event.preventDefault();
        createExercise();

        supabase
            .from("exercises")
            // TODO This is great, but it is sending NEW data. I want to update the data that is already there.....
            // TODO Fuck this bit is going to be hard. How do I update the array...
            // exercises below posts the exercises object to SupaBase.
            .insert([{ exerciseObject: exercises }])
            .then(function () {
                console.log(exercises);
            });
    }
    return (
        <Panel>
            <h2 className="h3 panel__title">New exercise</h2>
            <Form onSubmit={handleSubmit}>
                <div className="input">
                    <label htmlFor=""> Name</label>
                    <input
                        type="text"
                        id="exercise"
                        name="exercise"
                        placeholder="Name"
                        value={values.exerciseName}
                        onChange={handleExerciseName}
                    />
                </div>

                <div className="input">
                    <label htmlFor="weight">Weight</label>
                    <input
                        type="number"
                        min="0"
                        id="weight"
                        name="weight"
                        placeholder="Weight"
                        value={values.exerciseWeight}
                        onChange={handleExerciseWeight}
                    />
                </div>
                <div className="input">
                    <label htmlFor="reps">Reps</label>
                    <input
                        type="number"
                        min="0"
                        id="reps"
                        name="reps"
                        placeholder="Reps"
                        value={values.exerciseReps}
                        onChange={handleExerciseReps}
                    />
                </div>
                <div className="total-volume">
                    <p>Total volume</p>
                    <h5>totalVolume</h5>
                </div>
                <Button>Submit Exercise</Button>
            </Form>
        </Panel>
    );
}

export default NewExercise;
