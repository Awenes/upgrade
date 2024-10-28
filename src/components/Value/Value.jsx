import './Value.css'
import phonecard from '../../assets/phonecard.png'
import trust from '../../assets/trust.png'
import Right from '../../assets/Right.png'

const Value = () => {
  return (
    <div className="value-wrap">
      <div className="value-contain">
        <div className="contain-first">
          <img src={phonecard} alt="" />
        </div>
        <div className="details">
          <img src={trust} alt="" />
          <h2>
            WE VALUE YOUR TRUST <br /> AND SECURITY
          </h2>
          <p>
            Our mission is to make finance more accessible, transparent, and
            secure <br /> for everyone. With cutting.
          </p>
          <div className="details-cta">
            <button>Get Started</button>
            <img src={Right} alt="Right Icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Value
