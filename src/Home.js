import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
   return (
      <div className="home">
         <div className="home_containter">
            <img className="home_image"
               src="https://m.media-amazon.com/images/I/71JOx2u5kZL._SX3000_.jpg" alt="" />

            <div className="home_row">
               <Product
                  id="12245678"
                  title='Anker Robotic Vaccums'
                  image='https://m.media-amazon.com/images/I/41easFwemgL._AC_SY230_.jpg'
                  price={399.99}
                  rating={3}
               />
               <Product
                  id="12245634"
                  title='Xbox Series S Console'
                  image='https://m.media-amazon.com/images/I/717JafCjCAL._AC_SX679_.jpg'
                  price={379.98}
                  rating={5}
               />
               <Product
                  id="12248490"
                  title='Samsung Galaxy S22'
                  image='https://images-na.ssl-images-amazon.com/images/I/31Q+vZfIViL._AC_SX184_.jpg'
                  price={987.99}
                  rating={4}
               />
            </div>

            <div className="home_row">
               <Product
                  id="12243143"
                  title='Samsung 8K Neo QLED'
                  image='https://images-na.ssl-images-amazon.com/images/I/414rCESiMnL._AC_SX184_.jpg'
                  price={2998.99}
                  rating={3}
               />
               <Product
                  id="11113143"
                  title='Samsung Galaxy Book2 Pro 360'
                  image='https://images-na.ssl-images-amazon.com/images/I/31HjAiFpKhL._AC_SX184_.jpg'
                  price={1599.99}
                  rating={4}
               />
               <Product
                  id="81183153"
                  title='Apple Watch Series 8'
                  image='https://m.media-amazon.com/images/I/71JGQoATh0L._AC_UL320_.jpg'
                  price={569.99}
                  rating={5}
               />
            </div>

            <div className="home_row">
               <Product
                  id="66243163"
                  title='Samsung 49" Super Ultra-Wide'
                  image='https://m.media-amazon.com/images/I/71RfMIBWkLL._AC_SX679_.jpg'
                  price={1581.25}
                  rating={5}
               />
            </div>
         </div>
      </div>
   );
}

export default Home;
