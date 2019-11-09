import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const OPEN_WEATHER_MAP_API_KEY = "ac589ff3232fca6f7c960cc12486c4e1";
class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    // prevents page reload on retrieving the weather via fetch
    e.preventDefault();

    // since this 'prop' is being called within the Form component we can still manipulate/retrieve the input values from those even though they are children of App.js
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    console.log(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}=${OPEN_WEATHER_MAP_API_KEY}&units=metric`);
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${OPEN_WEATHER_MAP_API_KEY}&units=imperial`);
    const data = await api_call.json();
    console.log(data);

    if (!city && !country) {
      this.setState({
        error: "Set City and Country to get the weather!"
      });
    }
    else if (data.cod != 200) {
      this.setState({
        error: data.message
      });
    }
    else {
      // this setState() method is the preferred way to update state rather than directly accessing state values and modifying them
      // example: this.state.temperature = data.main.temp ***IS THE WRONG WAY TO UPDATE STATE***
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description
      });
    }
    

    
  }
  render() {
    return (
      <div>
        <div className="container text-muted">
              <Titles />
              <hr/>
        </div>  
      
        <br/>
         
              
        <div className="container">
          <div className="container row">
            <Form getWeather={this.getWeather}/>
          </div>    
          <div className="container row">
            <Weather 
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
              />
          </div>

        </div>
      </div>
    );
  }  
}

        

export default App;
