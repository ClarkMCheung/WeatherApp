import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
function App() {
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [data, setData] = useState([]);

  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

  await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(result => {
      setData(result)
      console.log(result);
    });
  }
  useEffect(() => {
    fetchData()
    console.log("Lat", lat)
    console.log("Long", long)

  }, [lat, long]);
  return (
    <div className="App">

      {data.main &&<Weather weatherData={data}/>}
    </div>
  );
}

export default App;
