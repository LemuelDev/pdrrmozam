import '../styles/about.css'
import Cover from '../assets/pddrmo_prof.jpg'
import { Mission } from '../context/data'
import FootLogo from '../assets/pddrmo_prof.jpg'
const About = () => {
  return (
    <section className="about">

         <section className="about-home">
                  <div className="about-home-content">
                      <h4>About Us</h4>
                  </div>
         </section>

         <section className="about-first">
            <div className="about-first-content">
                <div className="right-text-side">
                  <h4>PDRRMO ZAMBALES</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia asperiores at dolores fuga, atque aliquid enim. Sapiente, ut fuga tenetur iste assumenda quis architecto quo expedita quidem esse! Harum, eius.</p>
                </div>
                <div className="image-side">
                    <img src={Cover} alt="" />
                </div>
            </div>
         </section>

         <section className="mission">
            <div className="mission-title">
                <h4>Mission & Vision</h4>
            </div>
            <div className="mission-content">
              
            {Mission.map((data, index) => (
                <div className="mission-card" key={index}>
                       <div className="card-left" >
                            <h4>{data.title}</h4>
                        </div>
                        <div className="card-right">
                            <p>{data.content}</p>
                        </div>
                </div>
            ))}

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

export default About