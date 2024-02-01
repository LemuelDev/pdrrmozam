import { useState, useEffect} from 'react'
import '../styles/weather.css'
import FootLogo from '../assets/pddrmo_prof.jpg'
const Weather = () => {

  const [weatherData, setWeatherData] = useState([])
  const [selectedMunicipality, setSelectedMunicipality] = useState(null)

  useEffect(() => {
    const municipalities = ["Sta. Cruz", "Candelaria", "Masinloc", "Palauig", "Iba", "Botolan",
     "Cabangan", "San Felipe", "San Antonio" , "San Narciso", "San Marcelino" , "Castillejos", "Subic"]; // Add the names of the 13 municipalities
    const apiKey = 'b60534d6e4d4367cdc8ea944c5992f88';

    const fetchWeatherData = async () => {
      try {
        const promises = municipalities.map(async (municipality) => {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${municipality},Zambales&appid=${apiKey}`
          );
          const data = await response.json();
          return { municipality, data };
        });

        const results = await Promise.all(promises);
        setWeatherData(results);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);


  const handleMunicipality = (municipality) => {
    console.log('Clicked on', municipality);
    setSelectedMunicipality(municipality)
  }

  const handleCloseModal = () => {
    setSelectedMunicipality(null)
  }


  return (
    <section>

      {/* weather section */}
         <section className="weather">
                <div className="weather-text" data-aos="fade-up" data-aos-duration="2000">
                  <div className="weather-content">
                    <h4>
                        WEATHER UPDATES AND <br /> LATEST FORECAST
                    </h4>
                    <a href="#weather-content" className="button">Explore More</a>
                  </div>
                </div>
        </section>

        <section className='weather-zambales' id='weather-content'>

            <div className='weather-temp'>
              {weatherData.map(({ municipality, data }) => (
                <div key={municipality}  
                className="weather-card" 
                onClick={() => handleMunicipality(municipality)}
                data-aos="fade-up" data-aos-duration="2000">
                  <h2>{municipality}</h2>
                  <p>Temperature: <span> {(data.main.temp - 272.15).toFixed(2)}°C</span></p>
                  <p>Weather: <span>{data.weather[0].main}</span></p>
                  <p>Humidity: <span>{data.main.humidity}%</span></p>
                </div>
              ))}
          </div>
          {selectedMunicipality && (
        <div className="modal-wrapper">
          <div className="modal">
            <h3>{selectedMunicipality}</h3>
            <p>Temperature: {(weatherData.find(({ municipality }) => municipality === selectedMunicipality).data.main.temp - 272.15).toFixed(2)}°C</p>
            <p>Weather: {weatherData.find(({ municipality }) => municipality === selectedMunicipality).data.weather[0].main}</p>
            <p>Humidity: {weatherData.find(({ municipality }) => municipality === selectedMunicipality).data.main.humidity}%</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
        </section>
        
        <section className="footer">
            <div className="footer-content" data-aos="fade-up" data-aos-duration="2000">
                 <img src={FootLogo} alt="" />
                <div className="footer-title">
                    <h4> PROVINCIAL DISASTER RISK REDUCTION AND MANAGEMENT OFFICE</h4>
                </div>
                <div className="card">
                    <p>A team with dedication to protect and serve our people for the
                        better innovation of our own hometown ZAMBALES.
                    </p>
                </div>
                <div className="card-link">
                    <h4>You can visit us also on:</h4>
                    <a href="#">facebook</a>
                    <a href="#">instagram</a>
                    <a href="#">pdrrmozambales@gmail.com</a>
                </div>
            </div>

            <hr />
            <p className="last-text">All rights reserved@2023</p>
        </section>

    </section>
  )
}

export default Weather