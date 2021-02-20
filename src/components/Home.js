import React from 'react';
import '../css/Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Image"
        />

        <div className="home__row">
          <Product
            key={1}
            id={1}
            title="Book"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            key={3}
            id={3}
            title="Apple IPhone 10 64GB"
            price={1200.5}
            image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-se-red-select-2020?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1586574260319"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            key={4}
            id={4}
            title="Samsung Galaxy S20"
            price={999.0}
            image="https://www.powerplanetonline.com/cdnassets/funda_ultra_carbon_ultra_samsung_galaxy_s20_ultra_01_negro_l.jpg"
            rating={4}
          />
          <Product
            key={5}
            id={5}
            title="Lenovo Legion"
            price={2000.0}
            image="data:image/jpeg;base64,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"
            rating={5}
          />
          <Product
            key={2}
            id={2}
            title="Lenovo Keyboard"
            price={12.5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYItRk91KPGw6nN45Pp2jgL9GJrnbqhdcYA&usqp=CAU"
            rating={5}
          />
        </div>

        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
