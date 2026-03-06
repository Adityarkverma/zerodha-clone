import React from "react";

function Hero() {
  return (
    <section className="container-fluid " id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>
          Support Portal
        </h4>
        <a href="">Track Tickets</a>
      </div>
      <div className=" row p-4">
        <div className="col-8 col-lg-5 p-3 mb-3 "  id="supportLeft" >
          <h3>Search for an answer or browse help topics to create a ticket</h3>
          <input placeholder="E.g how do i activate F&O, why is my order getting rejected"/><br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a><br/>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-8 col-lg-3  p-3  " id="supportRight" >
          <h3>Featured</h3>
          <ol>
            <li className="pb-2"><a href="">Current Takeovers and Delisting</a></li>
            <li><a href="">Latest Intarday levearges</a></li>
          </ol>
 
          
        </div>
      </div>
      
    </section>
  );
}

export default Hero;
