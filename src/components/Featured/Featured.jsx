import './Featured.css'
import feature from '../../assets/feature.png'
import phones from '../../assets/phones.png'
import RightGreen from '../../assets/RightGreen.png'

const Featured = () => {
  return (
    <div className="featured-wrap">
      <div className="contain">
        <div className="contain-one">
          <img src={feature} alt="" />
          <h2>
            ALL THE FEATURES <br /> IN ONE APP
          </h2>
          <ul>
            <li>
              Get 3% cash back on everyday purchases, 2% on <br /> everything else4
            </li>
            <li>
              Extra Spending Power when you have Rewards Checking through
              Upgrade
            </li>
          </ul>
          <div className="contain-cta">
            <button>Get Started</button>
            <img src={RightGreen} alt="Right Icon" />
          </div>
        </div>
        <div className="contain-two">
            <img src={phones} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured
