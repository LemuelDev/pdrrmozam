import '../styles/homepage.css'
// import Logo from '../assets/pddrmo_prof.jpg'
import FootLogo from '../assets/pddrmo_prof.jpg'
import Typhoon from '../assets/typhoon.jpg'
import Advisory from '../assets/advisory.jpg'
import Thunderstorm from '../assets/thunderstorm.jpg'
import Drill from '../assets/earthquake_drill.jpg'
import { HomeSliderText } from '../context/data'
import { useState, useEffect } from 'react'
const Homepage = () => {

    const [philippinesTime, setPhilippinesTime] = useState('');

    const updateClock = () => {
      // Get the current time in the Philippines (GMT+8)
      const currentTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" });
      setPhilippinesTime(currentTime);
    };
  
    useEffect(() => {
      // Update the clock every second
      const intervalId = setInterval(updateClock, 1000);
  
      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
  
    }, []); // Run this effect only once on component mount


    
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
    setSelectedMunicipality(municipality)
  }

  const handleCloseModal = () => {
    setSelectedMunicipality(null)
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: Typhoon, alt: 'Slide 1' },
    { image: Thunderstorm, alt: 'Slide 2' },
    { image: Drill, alt: 'Slide 3' },
    { image: Advisory, alt: 'Slide 4' },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <section>

      {/* homepage */}
      <section className="homepage">
      <section className="image-slider-homepage">
        <div className="slider-container">
          <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div className="slide" key={index}>
                <div className="overlay"></div>
                <img src={slide.image} alt={slide.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="home-text">
        <div className="home-content">
          <h4>
            PROVINCIAL DISASTER RISK <br /> REDUCTION AND MANAGEMENT OFFICE
          </h4>
          <a href="#" className="button">
            Explore More
          </a>
        </div>
      </div>
    </section>
       

        <section className='timezone'>
      <div className="time">
        <p>{`Philippines Time: ${philippinesTime}`}</p>
      </div>
      <div className="text-slider-container">
        <div className="text-slider">
          {HomeSliderText.map((text, index) => (
            <p key={index} className="text-slide">&quot; {text} &quot;</p>
          ))}
        </div>
      </div>
    </section>

    
      <section className="weather-map">
        <div className="weather-map-content">

            <div>
              <h4>Live Weather Forecast</h4>
            <iframe width="700" height="750" src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=4&overlay=wind&product=ecmwf&level=surface&lat=6.577&lon=121.729&detailLat=14.363&detailLon=121.729&detail=true&pressure=true" ></iframe>
            </div>

          <div>   
        <section className='weather-zambales' id='weather-content'>
              <div className="weather-temp-title">
                  <h4>Municipalities</h4>
              </div>
          <div className='weather-temp'  data-aos="fade-up" data-aos-duration="1000">
           
            {weatherData.map(({ municipality, data }) => {

                const weatherCondition = data.weather[0].main;

                let weatherSVG;
                if (weatherCondition === 'Clear') {
                  weatherSVG = <iframe src="https://lottie.host/embed/2d296409-33d5-4ce0-a6a5-ce40b58076be/7P6yFM3SY2.json"></iframe>
                } else if (weatherCondition === 'Clouds') {
                  weatherSVG = <iframe src="https://lottie.host/embed/7a073eba-dd38-4a86-82ac-8cacea1ef929/FblJ7HjYcr.json"></iframe>
                } else if (weatherCondition === 'Rain') {
                  weatherSVG = <iframe src="https://lottie.host/embed/d1c136f1-e022-419e-bda4-3252c71e4b7e/4l1jCouqku.json"></iframe>
                } else {
                  // Default SVG or handling for other weather conditions
                  weatherSVG = <iframe src="https://lottie.host/embed/a895bf6b-d48f-4061-876c-04e33c1e5fa5/2R3dgBd9Sl.json"></iframe>
                }
              return (
                    <div key={municipality}  
                    className="weather-card" 
                    onClick={() => handleMunicipality(municipality)} >
                      <h2>{municipality}</h2>
                      {weatherSVG}
                    </div>
                )
            })}
          </div>

                {/* modal */}
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
          
          </div>
        </div>
      </section>

      <section className="news-events">
        <div className="news-events-title">
            <h4>NEWS & EVENTS</h4>
        </div>
      </section>

    




        
        {/* <section className="profile">
            <div className="prof-content" data-aos="fade-up" data-aos-duration="2000">
                <div className="left-content">
                      <img src={Logo} alt="" />
                </div>
                <div className="right-content">
                    <h1>PDRRMO ZAMBALES</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nesciunt perferendis at aliquam! Assumenda, quos incidunt. Magnam corporis dolore doloribus dolores ex, iusto ratione autem id illum! Dolore, ullam harum.</p>
                </div>
            </div>
        </section> */}

        <section className='attach'>
            <div className="attach-title" data-aos="fade-up" data-aos-duration="2000">
                <h4>Attachments & Situational Reports</h4>
            </div>
            <div className="attach-content">
                <p>Coming Soon...</p>
            </div>
        </section> 

        <section className="footer">
            <div className="footer-content">

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
            <p className="last-text">Powered by: ProjectBeta IT Solutions</p>
        </section>


    </section>
  )
}

export default Homepage