import './Services.css'
import servicespic from '../../assets/servicespic.png'
import transfers from '../../assets/transfers.png'
import exportIcon from '../../assets/exportIcon.png'
import trade from '../../assets/trade.png'
import tom from '../../assets/tom.png'
import settings from '../../assets/settings.png'
import goals from "../../assets/goals.png";
import dollz from "../../assets/dollz.png";
import RightGreen from '../../assets/RightGreen.png'

const Services = () => {
  return (
    <div className="services-wrap">
      <div className="services-contain">
        <center>
          <img src={servicespic} alt="" />
        </center>

        <div className="transfers">
          <div className="transfers1">
            <img src={transfers} alt="" />
          </div>
          <div className="transfers2">
            <img src={exportIcon} alt="" />
            <h2>
              Transfers Across The <br /> Globe Are Free
            </h2>
          </div>
        </div>
        <div className="create-card">
          <div className="create-card1">
            <img src={trade} alt="" />
            <h2>Create A Card That Is Unique And Customized</h2>
            <p>
              we offer a comprehensive range of innovative financial services
              tailored to meet your needs. Our services include High-Yield
              Savings Accounts.
            </p>
            <div className="pic">
              <img src={tom} alt="" />
            </div>
          </div>
          <div className="create-card2">
            <img src={settings} alt="" />
            <h2>Personalized Insights And Financial Goals</h2>
            <p>
              savings accounts that offer competitive interest rates and
              flexible deposit options. Investment Invest wisely with our
              personalized.Our services include High-Yield Savings
            </p>
            <div className="pic2">
              <img src={goals} alt="" />
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="one">
            <h2>
              100% <br /> Dedication
            </h2>
            <p>
              we offer a comprehensive range of innovative financial services
              tailored to meet your needs.
            </p>
          </div>
          <div className="two">
            <img src={dollz} alt="" />
            <h3>
              Hold Money In <br /> 30+ Currencies
            </h3>
          </div>
          <div className="three">
            <center>
              <h2>
                Visit Our <br /> Services Page
              </h2>
            </center>
          </div>
        </div>
        <center>
          <div className="services-contain-cta">
            <button>View more</button>
            <img src={RightGreen} alt="Right Icon" />
          </div>
        </center>
      </div>
    </div>
  );
}

export default Services
