import '../styles/services.css'
import FootLogo from '../assets/pddrmo_prof.jpg'
const Services = () => {
  return (
    <section className="services">

         <section className="services-home">
                  <div className="services-home-content">
                      <h4>Services</h4>
                  </div>
         </section>

        <section className="research">
            <div className="research-title">
                <h4>Research and Planning</h4>
            </div>
            <div className="research-content">
              <p>Coming Soon...</p>
            </div>
        </section>

        <section className="research">
            <div className="research-title">
                <h4>Administration and Training</h4>
            </div>
            <div className="research-content">
              <p>Coming Soon...</p>
            </div>
        </section>

        <section className="research">
            <div className="research-title">
                <h4>Operations and Warning</h4>
            </div>
            <div className="research-content">
              <p>Coming Soon...</p>
            </div>
        </section>


        <section className="research">
            <div className="research-title">
                <h4>Information Management System</h4>
            </div>
            <div className="research-content">
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

export default Services