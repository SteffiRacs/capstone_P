import React from 'react';
import greekSalad from '../assets/greek_salad.jpg';
import lemonDessert from '../assets/lemon_dessert.jpg';
import bruschetta from '../assets/bruschetta.png';

function ThreeColumnSection() {
  return (
    <section className="py-5 mt-5 specialCard">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <h3 className="heading">Specials</h3>
          </div>
        </div>
        <div className="row g-4">
          {[{
            img: greekSalad,
            title: "Greek Salad",
            price: "$12.99",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic",
          }, {
            img: bruschetta,
            title: "Bruschetta",
            price: "$8.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
          }, {
            img: lemonDessert,
            title: "Lemon Dessert",
            price: "$6.99",
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
          }].map((item, index) => (
            <div className="col-lg-4 col-sm-12" key={index}>
              <div className="card h-100">
                <img src={item.img} className="card-img-top fixed-img" alt={item.title} />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title mb-0">{item.title}</h5>
                    <span className="price fw-bold">{item.price}</span>
                  </div>
                  <p className="card-text mt-3 description">
                    {item.description}
                  </p>

                   <div className="d-flex align-items-center mt-2 order-link text-primary">
                    <a href="/">
                      <span className="me-2 delivery">Order a delivery <i className="bi bi-bicycle fs-5"></i></span>
                      
                      </a>
                  </div>
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ThreeColumnSection;
