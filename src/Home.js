import React from 'react';
import "./Home.css";
import  Product from "./Product";
function Home() {

    return (
        <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />
  
          <div className="home__row">
            <Product
              id="12321341"
              title="Sony a7 III (ILCE7M3K/BQ) Full-frame Mirrorless Interchangeable-Lens Camera with 28-70mm Lens with 3-Inch LCD, Black"
              price={1630.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/91rQ3XfEYzL._AC_SL1500_.jpg"
            />
            <Product
              id="49538094"
              title="SoundAsleep Dream Series Air Mattress with ComfortCoil Technology & Internal High Capacity Pump - Queen Size"
              price={239.0}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71fe-exIu%2BL._AC_SL1500_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="4903850"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={199.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            <Product
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="90829332"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="90828452"
              title="BENTOBEN Samsung A71 5G Case, 3 Layer Hybrid Hard PC Soft Rubber Heavy Duty Rugged Bumper Shockproof Anti Slip Full-Body Protective Phone Cover for Samsung A71 5G 2020, Wine Red"
              price={10.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/614KGvldXOL._AC_SL1500_.jpg"
            />
         
            <Product
              id="90824532"
              title="Frigidaire FFTR1821TS 30 Inch Freestanding Top Freezer Refrigerator with 18 cu. ft. Total Capacity, in Stainless Steel"
              price={1394.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/41diQgqYuSL._AC_SL1500_.jpg"
            />
          
            <Product
              id="90829345"
              title="Frigidaire 2-Piece Black Stainless Steel Kitchen Package with FFEF3054TD 30 Freestanding Electric Range and FFMV1645TD 30 Over-the-Range Microwave"
              price={1894.98}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/514BcskjMrL._AC_SL1000_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="24529339"
              title="Zinus Joseph 14 Inch Metal Platforma Bed Frame / Mattress Foundation / Wood Slat Support / No Box Spring Needed / Sturdy Steel Structure, King"
              price={1000.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/91FI4skqLWL._AC_SL1500_.jpg"
            />
              <Product
              id="24529339"
              title="Zinus Joseph 14 Inch Metal Platforma Bed Frame / Mattress Foundation / Wood Slat Support / No Box Spring Needed / Sturdy Steel Structure, King"
              price={1000.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/91FI4skqLWL._AC_SL1500_.jpg"
            />
          </div>
          <div>
          </div>
        </div>
      </div> 
            
        
    );
}

export default Home
