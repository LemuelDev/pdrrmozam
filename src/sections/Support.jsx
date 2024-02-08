import '../styles/support.css'
import { FaFacebook,  FaInstagram } from "react-icons/fa";
import FootLogo from '../assets/pddrmo_prof.jpg'
const Support = () => {
  return (
    <section className="support">

         <section className="support-home">
                  <div className="support-home-content">
                      <h4>Contact Us</h4>
                  </div>
         </section>

         
         <div className="support-details">
                      <div className="support-details-content">
                          <div className="support-text">
                              <h4>EMERGENCY HOTLINES</h4>
                              <p>SMART: 12345678901 , 12121212129</p>
                              <p>TNT: 45678902345</p>
                              <p>GLOBE: 09502456789</p>
                              <p>TEL: 0110 - 0000 - 000</p>
                              <p>Visit our social media pages:</p>
                              <div className="supp-links">
                              <a href="#"><FaFacebook/></a>
                              <a href="#"><FaInstagram/></a>
                              </div>
                              <p>EMAIL ADDRESS: sampleemail30@gmail.com</p>
                          </div>
                          <div className="supp-map">
                            <p>
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.9321754889042!2d119.97854807666887!3d15.325920647221887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339424b14a38671f%3A0xd44cf9d5d8e09464!2sZambales%20Provincial%20Capitol!5e0!3m2!1sen!2sph!4v1707422842725!5m2!1sen!2sph"
                                width="600"
                                height="450"
                                style={{ border: '0' }} // Provide an object for style
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                              ></iframe>
                            </p>
                          </div>
                        
                      </div>
                     
                  </div>

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

export default Support