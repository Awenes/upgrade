import './Testimonials.css'
import testimonial from '../../assets/testimonial.png'
import RightGreen from '../../assets/RightGreen.png'
import quote from '../../assets/quote.png'
import richard from '../../assets/richard.png'
import thomas from '../../assets/thomas.png'
import mike from '../../assets/mike.png'
import stars from '../../assets/stars.png'

const Testimonials = () => {
  return (
    <div testimonials-wrap>
      <div className="column">
        <img src={testimonial} alt="" />
        <h2>GET TO KNOW OUR CLIENTS</h2>
        <div className="cards">
          <div className="card">
            <img src={quote} alt="" />
            <p style={{ backgroundColor: "white" }}>
              I like getting the SMS & knowing the job's done. I often refer to
              it, “hope you get a ping today!” because my product.
            </p>
            <div className="rating">
              <div className="rating-img">
                <img src={mike} alt="" />
              </div>
              <div className="rate">
                <img src={stars} alt="" />
                <p className="name">
                  <b>Mike Torello</b>
                </p>
                <p className="post">CEO of Initech</p>
              </div>
            </div>
          </div>

          <div
            className="card"
            style={{ backgroundColor: "#004852", color: "white" }}
          >
            <img src={quote} alt="" />
            <p>
              We have successfully sold digital product and have happy with the
              results & look forward to using it again this.
            </p>
            <div className="rating">
              <div className="rating-img">
                <img src={richard} alt="" />
              </div>
              <div className="rate">
                <img src={stars} alt="" />
                <p className="name">
                  <b>Richards Hawkins</b>
                </p>
                <p className="post">Marketing Manager of Upnow</p>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={quote} alt="" />
            <p style={{ backgroundColor: "white" }}>
              Design Monks offers producers a cost-effective selling tool.
              Having the ability to post prices that you want on an exchange
              visible .
            </p>
            <div className="rating">
              <div className="rating-img">
                <img src={thomas} alt="" />
              </div>
              <div className="rate">
                <img src={stars} alt="" />
                <p className="name">
                  <b>Thomas Magnum</b>
                </p>
                <p className="post">Barellon NSW</p>
              </div>
            </div>
          </div>
        </div>
        <div className="column-cta">
          <button>View more</button>
          <img src={RightGreen} alt="Right Icon" />
        </div>
      </div>
    </div>
  );
}

export default Testimonials
