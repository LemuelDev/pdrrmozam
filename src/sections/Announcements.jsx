import "../styles/announce.css"
import FootLogo from '../assets/pddrmo_prof.jpg'
import Img1 from '../assets/teamIMG.jpg'
import Img2 from '../assets/team3.jpg'

const Announcements = () => {
  return (
    <section>

        <section className="announce">
                <div className="announce-text" data-aos="fade-up" data-aos-duration="2000">
                  <div className="announce-content">
                    <h4>
                      PDRRMO TEAM
                    </h4>
                    <a href="#event-content" className="button">Explore More</a>
                  </div>
                </div>
        </section>


      
        <section className="team">
            <div className="team-title" data-aos="fade-up" data-aos-duration="2000">
                <h1>Meet the Team</h1>
            </div>
            <div className="team-content">
                <div className="card-team" data-aos="fade-up" data-aos-duration="2000">
                    <div>
                        <img src={Img1}alt="" />
                    </div>
                    <div className="card-text">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio porro dolores dolor, commodi explicabo quae! Laborum, nobis 
                      consequuntur cumque iusto dolorum facere dicta praesentium architecto voluptatum ratione corrupti assumenda aliquid?</p>
                    </div>
                </div>
                <div className="card-team reverse" data-aos="fade-up" data-aos-duration="2000">
                    <div className="card-text">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio porro dolores dolor, commodi explicabo quae! Laborum, nobis 
                      consequuntur cumque iusto dolorum facere dicta praesentium architecto voluptatum ratione corrupti assumenda aliquid?</p>
                    </div>
                    <div>
                        <img src={Img2} alt="" />
                    </div>
                </div>
            </div>
        </section>

         {/* footer section */}
         <section className="footer">
            <div className="footer-content" >
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

export default Announcements