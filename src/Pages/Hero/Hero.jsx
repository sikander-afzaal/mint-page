import React, { useState } from "react";
import "./Hero.css";
import gif from "../../Assets/Cherub-gif.gif";
function Hero() {
  const [num, setNum] = useState(1);
  return (
    <section className="hero-section">
      <h1 className="brand-name">Public Mint</h1>
      <p>
        First Light Drop - Total Supply of 1111 Cherubs Released in to the ETH
        blockchain.
      </p>

      <div id="mint">
        <div className="container mint-outer-wrapper">
          <div className="row d-flex align-items-center">
            <div className="col-md-4 col-lg-4 text-center">
              <img src={gif} alt="" className="img-fluid gif-img" />
            </div>
            <div className="col-md-8 col-lg-8">
              <div className="mint-calculator">
                <h3 className="mint-title">CLAIM YOUR Chubby Cherubs</h3>
                <p>Enter how many Chubby Cherubs you would like to mint here</p>
                <div className="payment-info align-items-center">
                  <img
                    src={gif}
                    alt="Claim Chubby Cherubs"
                    className="img-fluid payment-img "
                  />
                  <div className="payment-info-text ">
                    <p>Price Per Cherub</p>
                    <h5 className="eth-number">0.07 ETH Each</h5>
                  </div>
                </div>

                <div className="chubby-number">
                  <div className="input d-flex align-items-center">
                    <div
                      onClick={() => {
                        if (num > 1) {
                          setNum((prev) => prev - 1);
                        }
                      }}
                      className="minus"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H15C15.2652 2 15.5196 1.89464 15.7071 1.70711C15.8946 1.51957 16 1.26522 16 1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                    <h5 className="number-text">{num}</h5>
                    <div
                      onClick={() => {
                        if (num < 10) {
                          setNum((prev) => prev + 1);
                        }
                      }}
                      className="plus"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <h5 className="chubby-max">10 Max</h5>
                </div>

                <div className="chubby-total d-flex justify-content-between align-items-center">
                  <p>Total</p>
                  <h5 className="eth-number">
                    {" "}
                    <span>{(0.07 * num).toFixed(2)}</span> ETH
                  </h5>
                </div>

                <div className="text-center">
                  <a className="cta-btn" href="#">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
