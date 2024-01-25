import '../styles/homepage.css'
import Img1 from '../assets/teamIMG.jpg'
import Img2 from '../assets/team3.jpg'
const Homepage = () => {
  return (
    <section>

      {/* homepage */}
        <section className="homepage">
                <div className="home-text">
                  <div className="home-content">
                    <h4>
                        PROVINCIAL DISASTER RISK <br />REDUCTION AND MANAGEMENT OFFICE
                    </h4>
                    <button className="button"> Explore More</button>
                  </div>
                </div>
        </section>

        {/* meet the team */}
        <section className="team">
            <div className="team-title">
                <h1>Meet the Team</h1>
            </div>
            <div className="team-content">
                <div className="card">
                    <div>
                        <img src={Img1}alt="" />
                    </div>
                    <div className="card-text">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio porro dolores dolor, commodi explicabo quae! Laborum, nobis 
                      consequuntur cumque iusto dolorum facere dicta praesentium architecto voluptatum ratione corrupti assumenda aliquid?</p>
                    </div>
                </div>
                <div className="card reverse">
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
    </section>
  )
}

export default Homepage