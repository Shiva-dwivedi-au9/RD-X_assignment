import './App.css'
import WeatherApi from './Components/WeatherApi'
import MyComponent from './Components/GoogleMap'
import ExchangeApi from './Components/ExchangeApi'
import { useEffect, useState } from 'react'

function App() {

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${localStorage.getItem("country")}`)
    .then(res => res.json())
    .then(data =>localStorage.setItem("currency", data.currencies[0].code))

  }, [])
  
  return (
    <div className="App">
        <WeatherApi />
      <div className="App2">
        <MyComponent />
        <ExchangeApi  />
      </div> 
    </div>
  );
}

export default App;
