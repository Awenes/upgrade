import './Footer.css'
import Right from '../../assets/Right.png'
import footerPhoto from '../../assets/footerPhoto.png'
import logo2 from '../../assets/logo2.png'
import appstore from '../../assets/appstore.png'
import googleplay from '../../assets/googleplay.png'
import twitter from '../../assets/twitter.png'
import insta from '../../assets/insta.png'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'

const Footer = () => {
  return (
    <div className="bottom-wrap">
      <div className="holder">
        <div className="holder-top">
          <div className="left">
            <h2>
              {" "}
              ARE YOU READY TO <br /> START?
            </h2>
            <p>
              Personalize your settings, follow your progress, archive your{" "}
              <br />
              highlights and notes automatically Glose is the ultimate reading
            </p>
            <div className="left-cta">
              <button>Get Started</button>
              <img src={Right} alt="Right Icon" />
            </div>
          </div>
          <div className="right">
            <img src={footerPhoto} alt="" />
          </div>
        </div>

        <footer>
          <div className="box1">
            <img src={logo2} alt="" />
            <div className="logos">
              <img src={appstore} alt="" />
              <img src={googleplay} alt="" />
            </div>
            <div className="services">
              <ul>
                <li>Personal Loan</li>
                <li>One Card</li>
                <li>Savings</li>
                <li>Checking</li>
                <li>Contact</li>
                <li>Help</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
          <div className="box2">
            <div className="socials">
              <img src={twitter} alt="" />
              <img src={facebook} alt="" />
              <img src={insta} alt="" />
              <img src={linkedin} alt="" />
            </div>
            <p>
              <b>Send Your Feedback :</b> moc.edargpu@tcatnoc
            </p>
            <p>
              Privacy Policy | Terms & Condition | Cookie Notice | Copyright
              Policy | Data Policy
            </p>
            <p>© 2024 Design Monks. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer
