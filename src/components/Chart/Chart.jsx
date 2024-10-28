import './Chart.css'
import chart from '../../assets/chart.png'
import about from '../../assets/about.png'

const Chart = () => {
  return (
    <div className="chart-wrap">
      <div className="box">
        <div className="charts">
          <img src={chart} alt="" />
        </div>
        <div className="features">
          <img src={about} alt="" />
          <h1>
            ALL YOUR MONEY <br /> NEEDS IN ONE APP
          </h1>
          <div className="items">
            <div className="item">
              <h2>Expense Tracker</h2>
              <p>
                Our comprehensive selection of medications, supplements, and
                healthcare products.
              </p>
            </div>
            <div className="item">
              <h2>Crypto Connection</h2>
              <p>
                From advanced imaging technology such as MRI and CT scanners to
                precision surgical tools.
              </p>
            </div>
            <div className="item">
              <h2>Automated Invoicing</h2>
              <p>
                We're committed to leveraging the latest innovations in medical
                technology.
              </p>
            </div>
            <div className="item">
              <h2>Virtual Card</h2>
              <p>
                We provide you with a virtual card to process your online payments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart
