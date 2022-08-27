import React from "react";
import "./Carousel.css";
// import image1 from ".../iamge/food1.jpg";

function Carousel() {
  return (
    <>
      <div class="_container block">
        <div class="carousel">
          <div
            class="carousel__face"
            // style={{backgroundImage:}}
          >
            <span>This is something</span>
          </div>
          <div class="carousel__face">
            <span>Very special</span>
          </div>
          <div class="carousel__face">
            <span>Special is the key</span>
          </div>
          <div class="carousel__face">
            <span>For you</span>
          </div>
          <div class="carousel__face">
            <span>Just give it</span>
          </div>
          <div class="carousel__face">
            <span>A try</span>
          </div>
          <div class="carousel__face">
            <span>And see</span>
          </div>
          <div class="carousel__face">
            <span>How IT Works</span>
          </div>
          <div class="carousel__face">
            <span>Woow</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
