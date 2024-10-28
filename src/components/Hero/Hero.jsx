import Navbar from '../Navbar/Navbar'
import './Hero.css'
import top from '../../assets/top.png'
import Right from '../../assets/Right.png'
import cards from '../../assets/cards.png'
import sphericle from '../../assets/sphericle.png'
import samsung from '../../assets/samsung.png'
import visa from '../../assets/visa.png'
import amazon from '../../assets/amazon.png'
import paypal from '../../assets/paypal.png'
import ali from '../../assets/ali.png'

const Hero = () => {
  return (
    <div className="wrapper">
      <div className="wrap">
        <Navbar />
        <div className="banner">
          <div className="welcome">
            <div className="top">
              <img src={top} alt="!00% Trusted Platform" />
            </div>
            <div className="banner-head">
              <h1 className='Grotesk'>
                FINANCE WITH SECURITY AND <span style={{color:'Yellow'}}>FLEXIBILITY</span>
              </h1>
            </div>
            <div className="banner-text">
              No-fee Checking Account With Cash Back Rewards. <br /> Enjoy fee-free
              Banking And Earn Cash Back On Your <br /> Everyday Purchases.
            </div>
            <div className="cta">
                <button>Open Account</button>
                <img src={Right} alt="Right Icon" />
            </div>
          </div>
          <div className="photo">
                <img src={cards} alt="cards" />
          </div>
        </div>
        <div className="companies">
            <img src={sphericle} alt="" />
            <img src={samsung} alt="" />
            <img src={visa} alt="" />
            <img src={amazon} alt="" />
            <img src={paypal} alt="" />
            <img src={ali} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero
