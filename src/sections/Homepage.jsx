import '../styles/homepage.css'

import Logo from '../assets/pddrmo_prof.jpg'
import FootLogo from '../assets/pddrmo_prof.jpg'
import Typhoon from '../assets/typhoon.jpg'
import Advisory from '../assets/advisory.jpg'
import Thunderstorm from '../assets/thunderstorm.jpg'
import Drill from '../assets/earthquake_drill.jpg'
const Homepage = () => {
  return (
    <section>

      {/* homepage */}
        <section className="homepage">
                <div className="home-text" data-aos="fade-up" data-aos-duration="2500">
                  <div className="home-content">
                    <h4>
                        PROVINCIAL DISASTER RISK <br />REDUCTION AND MANAGEMENT OFFICE
                    </h4>
                    <a href="#event-content" className="button">Explore More</a>
                  </div>
                </div>
        </section>

      

            <section className="announce-announce" data-aos="fade-up" data-aos-duration="2000" id='event-content'>
                        <div className="announce-title">
                            <h4>Announcements</h4>
                        </div>
                        <div className="event-card-content" data-aos="fade-up" data-aos-duration="2000">
                            <div className="image-card">
                                <img src={Typhoon} alt="" />
                            </div>
                            <div className="event-text-card" data-aos="fade-up" data-aos-duration="2000">
                                <p>🌊⚠️ Beach Hazard Alert! <br></br>
                                Typhoon Egay has stirred up dangerous waves and strong currents along the coast. Stay safe and REFRAIN from swimming in coastal areas until the storm subsides. Your safety is our priority! 🚫🏊‍♂️ #typhoonEgay #BeachSafety #stayalert</p>
                            </div>
                        </div>
                        <div className="event-card-content-reverse" data-aos="fade-up" data-aos-duration="2000">
                            <div className="image-card">
                                <img src={Advisory} alt="" />
                            </div>
                            <div className="event-text-card">
                                <p>Earthquake Information No.1
                                    Date and Time: 22 November 2023 - 09:22 PM
                                    Magnitude = 2.0
                                    Depth = 029 km
                                    Location = 15.14°N, 119.88°E - 019 km S 82° W of Cabangan Zambales</p>
                            </div>
                        </div>
                        <div className="event-card-content" data-aos="fade-up" data-aos-duration="2000">
                            <div className="image-card">
                                <img src={Drill} alt="" />
                            </div>
                            <div className="event-text-card" data-aos="fade-up" data-aos-duration="2000">
                                <p>4TH QUARTER NATIONWIDE SIMULTANEOUS EARTHQUAKE DRILL 2023
                                On 09 November 2023, the Zambales Provincial Disaster Risk Reduction and Management Office, together with the MDRRMO, BFP, and Municipal Police Station of Cabangan spearheaded the conduct of the 4th Quarter Simultaneous Earthquake Drill (NSED) at Immaculate Conception Academy in Cabangan, Zambales.
                                </p>
                            </div>
                        </div>
                        <div className="event-card-content-reverse" data-aos="fade-up" data-aos-duration="2000">
                            <div className="image-card">
                                <img src={Thunderstorm} alt="" />
                            </div>
                            <div className="event-text-card">
                                <p>Thunderstorm Advisory No. 2 NCR_PRSD
                                Issued at: 12:35 PM, 27 October 2023(Friday)
                                Moderate to Heavy rainshowers with lightning and strong winds are being experienced in #Zambales(Santa Cruz, Candelaria, Masinloc, Palauig, Iba, Botolan) which may persist within 2 hours and may affect nearby areas.
                                All are advised to take precautionary measures against the impacts associated with these hazards which include flash floods and landslides.
                                Keep monitoring for updates.</p>
                            </div>
                        </div>
            </section>


        <section className="profile">
            <div className="prof-content" data-aos="fade-up" data-aos-duration="2000">
                <div className="left-content">
                      <img src={Logo} alt="" />
                </div>
                <div className="right-content">
                    <h1>PDRRMO ZAMBALES</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nesciunt perferendis at aliquam! Assumenda, quos incidunt. Magnam corporis dolore doloribus dolores ex, iusto ratione autem id illum! Dolore, ullam harum.</p>
                </div>
            </div>
        </section>

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
            <p className="last-text">All rights reserved@2023</p>
        </section>


    </section>
  )
}

export default Homepage