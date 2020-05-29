import React, { Component } from "react";
import sixPieceBonBon from "../assets/sixpcbonbon.jpg";
import twelvePieceBonBon from "../assets/twelvepcbonbon.jpg";
import twentyFourBonBon from "../assets/twentyfourbonbon.jpg";
import fiftyFourBonBon from "../assets/fiftyfourpcbonbon.jpg";
import birthdaybox from "../assets/birthdaybox.jpg";
import customBox from "../assets/customflavorbonbon.jpg";

class Shop extends Component {
  render() {
    return (
      <div className="container">
        <div className="shop-heading">
          <h1 className="text-center font-weight-bold"> BonBons</h1>
        </div>
        <div class="row row-cols-2 ">
          <div class="card col" style={{ width: "18rem" }}>
            <img src={sixPieceBonBon} class="card-img-top" alt="bonbon"></img>
            <div class="card-body">
              <h5 class="card-title">6pc BonBon Box</h5>
              <p class="card-text">$25</p>
              <a href="" class="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>

          <div class="card col" style={{ width: "18rem" }}>
            <img
              src={twelvePieceBonBon}
              class="card-img-top"
              alt="bonbon"
            ></img>
            <div class="card-body">
              <h5 class="card-title">12pc BonBon Box</h5>
              <p class="card-text">$49</p>
              <a href="" class="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>

          <div class="card col" style={{ width: "18rem" }}>
            <img src={twentyFourBonBon} class="card-img-top" alt="bonbon"></img>
            <div class="card-body">
              <h5 class="card-title">24pc BonBon Box</h5>
              <p class="card-text">$88</p>
              <a href="" class="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
        <div class="row row-cols-2">
          <div class="card col" style={{ width: "18rem" }}>
            <img src={fiftyFourBonBon} class="card-img-top" alt="bonbon"></img>
            <div class="card-body">
              <h5 class="card-title">54pc BonBon Box</h5>
              <p class="card-text">$188</p>
              <a href="" class="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>

          <div class="card col" style={{ width: "18rem" }}>
            <img src={birthdaybox} class="card-img-top" alt="bonbon"></img>
            <div class="card-body">
              <h5 class="card-title">Birthday Box Set</h5>
              <p class="card-text">$54</p>
              <a href="" class="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>

          <div class="card col" style={{ width: "18rem" }}>
            <img src={customBox} class="card-img-top" alt="bonbon"></img>
            <div class="card-body">
              <h5 class="card-title">Custom Box with Flavor Request</h5>
              <p class="card-text">$25</p>
              <a href="" class="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
