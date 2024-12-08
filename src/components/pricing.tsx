"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";


// Types for the pricing model
type PricingModel = 'monthly' | 'yearly';

const Pricing: React.FC = () => {
  // State for the slider value and pricing model
  const [sliderValue, setSliderValue] = useState<number>(50); // Default value 50
  const [pricingModel, setPricingModel] = useState<PricingModel>('monthly');

  // Price ranges based on slider value
  const minPrice = 10; // Min value for monthly pricing
  const maxPrice = 200; // Max value for monthly pricing

  const calculatePrice = (value: number) => {
    // Pricing calculation logic
    return ((maxPrice - minPrice) * (value / 100)) + minPrice;
  };

  const togglePricingModel = () => {
    setPricingModel((prev) => (prev === 'monthly' ? 'yearly' : 'monthly'));
  };

  useEffect(() => {
    // Logic to adjust price on pricing model change
    if (pricingModel === 'yearly') {
      setSliderValue(sliderValue); // Update slider if needed
    }
  }, [pricingModel]);

  return (
    <div className="pricing-container">
        
        <div className="slider-labels">
          <div className="co11">
            <h4>100k PAGEVIEWS</h4>
          </div>
          <div className="cov2">
          <span className="co1">${calculatePrice(sliderValue).toFixed(2)}</span>
          <span className="monthly-or-yearly">
            {pricingModel === 'monthly' ? ' / month' : ' / year'}
          </span>
          </div>
        </div>
      <div className="slider-container">
        <div className="main">
        <input
          type="range"
          min={0}
          max={100}
          value={sliderValue}
          onChange={(e) => setSliderValue(Number(e.target.value))}
          className="slider"
        />
        </div>

<center>
          <div className="covers">
          <span>Monthly Billing</span>
    <div className={`toggle-container ${pricingModel ? "active" : ""}`}
      onClick={togglePricingModel}
    >
      <div className="toggle-ball"></div>
      </div>
      <span>Yearly Billing</span>
      <div className="tf">25% discount</div>
      </div>
      </center>
        <div className="contain2">
          <div className="listsheck">
            <div className="home1"><Image src="./images/icon-check.svg" alt="ring" width="10" height="10" /> Unlimited websites</div>
            <div className="home1"><Image src="./images/icon-check.svg" alt="ring" width="10" height="10" /> 100% data ownership</div>
            <div className="home1"><Image src="./images/icon-check.svg" alt="ring" width="10" height="10" /> Email reports</div>
          </div>
          <div className="btn">
            <button>Start my trial</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pricing-container {
          width: 100%;
          max-width: 450px;
          padding:20px;
          margin: 90px auto;
          text-align: center;
          background-color:white;
          border-radius:8px;
        }
        .pricing-container:hover{
          box-shadow:0px 0px 10px rgba(0,0,0,0.3)
        }
        .pricing-toggle {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }


        .slider-container {
          margin-top: 30px;
        }

        // .slider {
        //   width: 100%;
        //   height: 8px;
        //   border-radius: 5px;
        //   background: #303030;
        //   outline: none;
        //   transition: background 0.3s ease;
        // }

          // .slider::-webkit-slider-thumb{
          //   -webkit-appearance:none;
          //   cursor:pointer;
          //   z-index:3;
          //   position:relative;
          //   background:#303030;
          //   width:100px;
          // }
        .slider{
          -webkit-appearance: none;
          width: 100%;
          height: 8px;
          border-radius: 5px;
          background: linear-gradient(
            to right,
            lightblue ${sliderValue}%,
            #ddd ${sliderValue}%
          );
          outline: none;
          transition: background 0.3s ease;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 28px;
          height: 28px;
          background: lightblue;
          background-image:url(./images/icon-slider.svg);
          background-size:cover;
          border: 2px solid #fff;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s ease;
        }

        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }

        .slider::-moz-range-thumb {
          width: 28px;
          height: 28px;
          background: #4caf50;
          border: 2px solid #fff;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s ease;
        }

        .slider::-moz-range-thumb:hover {
          transform: scale(1.2);
        }

                  .selectbtn{
            height: 48px;
            width:48px;
            background-color:#075a92;
            border-radius: 50%;
            position: absolute;
            bottom: 0;
          }
          
          .selectbtn img{
            padding-top:13px;
            width:30px;
          }


        // .range-value {
        //   margin-top: 10px;
        //   font-size: 18px;
        //   font-weight: bold;
        //   color: #333;
        // }
        //   .selector{
        //     height: 104px;
        //     width: 48px;
        //     position:absolute;
        //     bottom:-20px;
        //     left:50%;
        //     transform:translateX(-50%);
        //     z-index:2;
        //   }
          
        //   .selectbtn{
        //     height: 48px;
        //     width:48px;
        //     background-color:#075a92;
        //     border-radius: 50%;
        //     position: absolute;
        //     bottom: 0;
        //   }
          
        //   .selectbtn img{
        //     padding-top:13px;
        //     width:30px;
        //   }

        

        .slider-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          font-size: 18px;
        }

        .monthly-or-yearly {
          font-size: 14px;
          color: #777;
        }
          .toggle-container {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 45px;
          height: 25px;
          color:white;
          background: ${pricingModel ? "#c4c2c2" : "#ccc"};
          border-radius: 20px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .toggle-ball {
          position: absolute;
          width: 20px;
          height: 20px;
          background: #fff;
          border-radius: 50%;
          top: 2px;
          left: 2px;
          transition: all 0.3s ease;
          transform: ${pricingModel === 'yearly' ? "translateX(20px)" : "translateX(0)"};
        }

        .toggle-text {
          display: flex;
          justify-content: space-between;
          position: absolute;
          width: 100%;
          padding: 0 10px;
          color: #fff;
          font-size: 14px;
          font-weight: bold;
          z-index: 1;
          pointer-events: none;
        }

        .toggle-text span {
          transition: opacity 0.3s ease;
          opacity: ${pricingModel ? 0.5 : 1};
        }

        .toggle-text .yearly {
          opacity: ${pricingModel ? 1 : 0.5};
        }
      `}</style>
    </div>
    
  );
};

export default Pricing;


// .pricing-toggle button {
//   padding: 10px 20px;
//   margin: 0 10px;
//   border: 1px solid #ccc;
//   background-color: #f7f7f7;
//   cursor: pointer;
//   font-size: 16px;
//   transition: background-color 0.3s ease;
// }

// .pricing-toggle button.active {
//   background-color: #0070f3;
//   color: white;
// }
