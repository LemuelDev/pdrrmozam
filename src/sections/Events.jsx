import '../styles/events.css'
import FootLogo from '../assets/pddrmo_prof.jpg'
const Events = () => {
  
  return (
   <section>
        <section className="events">
                <div className="event-text" data-aos="fade-up" data-aos-duration="2000">
                  <div className="event-content">
                    <h4>
                       EVENTS AND PROGRAMS
                    </h4>
                    <a href="#event-content" className="button">Explore More</a>
                  </div>
                </div>
        </section>

        <section className="event-cards" id='event-content' >
            <div className="title-event" data-aos="fade-up" data-aos-duration="2000">
                <h4>Upcoming Events</h4>
            </div>
            <div className="event-card-content" data-aos="fade-up" data-aos-duration="2000">
                <div className="image-card">
                    <h4>Event</h4>
                </div>
                <div className="event-text-card" data-aos="fade-up" data-aos-duration="2000">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum obcaecati, perspiciatis sint, fugiat corporis quisquam cupiditate debitis voluptatem aspernatur nihil neque, distinctio maiores eos? Aperiam eos porro tempore a saepe?</p>
                </div>
            </div>
            <div className="event-card-content-reverse" data-aos="fade-up" data-aos-duration="2000">
                <div className="image-card">
                    <h4>Event</h4>
                </div>
                <div className="event-text-card">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum obcaecati, perspiciatis sint, fugiat corporis quisquam cupiditate debitis voluptatem aspernatur nihil neque, distinctio maiores eos? Aperiam eos porro tempore a saepe?</p>
                </div>
            </div>
        </section>

        <section className="program-card">
             <div className="title-event"  data-aos="fade-up" data-aos-duration="2000">
                <h4>Programs</h4>
            </div>
            <div className="program-card-content"  data-aos="fade-up" data-aos-duration="2000">
                <div className="image-card">
                        <h4>Event</h4>
                    </div>
                    <div className="event-text-card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum obcaecati, perspiciatis sint, fugiat corporis quisquam cupiditate debitis voluptatem aspernatur nihil neque, distinctio maiores eos? Aperiam eos porro tempore a saepe?</p>
                    </div>
            </div>
            <div className="program-card-content-reverse"  data-aos="fade-up" data-aos-duration="2000">
                <div className="image-card">
                        <h4>Event</h4>
                    </div>
                    <div className="event-text-card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum obcaecati, perspiciatis sint, fugiat corporis quisquam cupiditate debitis voluptatem aspernatur nihil neque, distinctio maiores eos? Aperiam eos porro tempore a saepe?</p>
                    </div>
            </div>
        </section>

        {/* footer section */}
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

export default Events