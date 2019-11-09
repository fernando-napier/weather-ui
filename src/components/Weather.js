import React from "react";

// components that are stateless (don't actually care about the state of the props) do not need to be created as classes
const Weather = props => (
    // interesting here: you can have conditionals that check if a state property is defined or not before displaying it
    <div>
        { props.city && props.country && <p>Location: {props.city}, {props.country}</p> }
        { props.temperature && <p>Temperature: {props.temperature}</p> }
        { props.humidity && <p>Humidity: {props.humidity}</p> }
        { props.description && <p>Conditions: {props.description}</p> }
        { props.error && <p>Error: {props.error}</p> }
    </div>
);

export default Weather;