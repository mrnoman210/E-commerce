import React from "react";
import { Carousel } from "react-responsive-carousel";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import tree from "./images/tree.jpg";
import ocean from "./images/ocean.jpg";
import mountain from "./images/mountain.jpg";
import house from "./images/house.jpg";
import lion from "./images/lion.jpg";
import "./CarouseOwn.css";
function CarouseOwn({ product }) {
  return (
    <>
      <carousel className={"block overflow-hidden"}>
        <input type="radio" id="page1cb" checked name="pages" />
        <input type="radio" id="page2cb" name="pages" />
        <input type="radio" id="page3cb" name="pages" />
        <input type="radio" id="page4cb" name="pages" />
        <input type="radio" id="page5cb" name="pages" />
        <page id="page1">
          <div>Page One!</div>
          <label for="page2cb" title="Start">
            <b>START</b>
          </label>
        </page>
        <page id="page2">
          <div>Page Two!</div>
          <label for="page3cb" title="Next">
            <b>NEXT</b>
          </label>
        </page>
        <page id="page3">
          <div>Page Three!</div>
          <label for="page4cb" title="Next">
            <b>NEXT</b>
          </label>
        </page>
        <page id="page4">
          <div>Page Four!</div>
          <label for="page5cb" title="Next">
            <b>NEXT</b>
          </label>
        </page>
        <page id="page5">
          <div>Page Five!</div>
          <label for="page1cb" title="That's all folks!">
            <b>START AGAIN?</b>
          </label>
        </page>
      </carousel>
    </>
  );
}

export default CarouseOwn;
