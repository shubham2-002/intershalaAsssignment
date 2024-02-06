import { SearchRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";


const Home = () => {
  const [city, setCity] = useState("Mumbai");
  const [Wdata, setWData] = useState([]);

  const navigate = useNavigate();
  const handelLogin = () => {
    navigate("/login");
  };
  const fetchdata = async () => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${
        import.meta.env.VITE_WEATHER_URL
      }&q=${city}&aqi=no`
    );
    const data = await response.json();
    console.log(data);
    setWData(data);
    console.log(Wdata);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      <div className="weather-container">
        <div className="searchbox">
          <input
            placeholder="counrty name"
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={fetchdata}>
            <SearchRounded />
          </button>
        </div>
        <div className="weather-data">
          <img src={Wdata?.current?.condition?.icon} />
          <h1>{Wdata?.current?.temp_c} °C </h1>
          <h1> {Wdata?.location?.name}</h1>
          <div className="stats">
            <div className="humidity">
              <div className="humidity-data">
                <h2> {Wdata?.current?.humidity} %</h2>
                <h3>Humidity</h3>
              </div>
            </div>
            <div className="windSpeed">
              <div className="wind-data">
                <h2>{Wdata?.current?.wind_kph} Km/h</h2>
                <h3>Wind Speed</h3>
              </div>
            </div>
          </div>
        </div>
        <button className="loginbtn" onClick={handelLogin}>
          Login To view List
        </button>
      </div>
    </div>
  );
};

export default Home;
