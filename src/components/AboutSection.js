import React from 'react';
import imageFirst from '../assets/restaurant.jpg'; 
import imageSecond from '../assets/Mario and Adrian A.jpg'; 

function Banner() {
  return (
    <section className="py-5">
      <div className="container aboutSection">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="display-4 text-green">Little Lemon</h1>
            <h3 className="text-salmon">Chicago</h3>
            <p className="lead">
             Little Lemon Chicago is a family owned Mediterranean restaurant located in the heart of the city. The restaurant is run by brothers Mario and Adrian, who have always had a passion for cooking and serving delicious food. Growing up in a Mediterranean household, the brothers were exposed to traditional recipes from an early age, and they decided to bring those recipes to the masses with a modern twist. At Little Lemon, you can expect to find a menu full of classic dishes with a creative twist that makes them stand out from the rest. Whether you're looking for a quick lunch or a leisurely dinner, Little Lemon Chicago is the perfect place to indulge in a delicious meal in a cozy and welcoming atmosphere.
            </p>
            
          </div>

          {/* Right Section */}
          <div className="col-md-6 text-center imgGallery">
            <div className="imgContainer">
                    <img src={imageFirst} alt="Delicious food" className="" />
            </div>
            <div className="imgContainer">
                    <img src={imageSecond} alt="Delicious food" className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
