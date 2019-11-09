import React from "react";

// components that are stateless (don't actually care about the state of the props) do not need to be created as classes
const Form = props => (
    // interesting here: you can have conditionals that check if a state property is defined or not before displaying it
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" className="text-dark" placeholder="City..."></input>
        <input type="text" name="country" className="text-dark" placeholder="Country..."></input>
        <button>Get Weather</button>
    </form>
)

export default Form;