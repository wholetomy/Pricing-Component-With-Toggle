import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'; 

import Cards from "./Components/Cards/Cards.jsx"

function App() {

  let Card1 = {
    isPurple: false,
    title: "Basic",
    price: "199.99",
    text1: "500 GB Storage",
    text2: "2 Users Allowed",
    text3: "Send Up to 3 GB"
  }
  let Card2 = {
    isPurple: true,
    title: "Professional",
    price: "249.99",
    text1: "1 TB Storage",
    text2: "5 Users Allowed",
    text3: "Send Up to 10 GB"
  }
  let Card3 = {
    isPurple: false,
    title: "Master",
    price: "399.99",
    /* price: "399.99", */
    text1: "1 TB Storage",
    text2: "10 Users Allowed",
    text3: "Send Up to 20 GB"
  }

  function changePrices() {
    let Price1 = document.querySelector("#root > div > div.cards > div:nth-child(1) > div > h1");
    let Price2 = document.querySelector("#root > div > div.cards > div.cards-container-purple > div > h1");
    let Price3 = document.querySelector("#root > div > div.cards > div:nth-child(3) > div > h1");

    if (Price1.innerHTML == "199.99" && Price2.innerHTML == "249.99" && Price3.innerHTML == "399.99") {
      Price1.innerHTML = "19.99";
      Price2.innerHTML = "24.99";
      Price3.innerHTML = "39.99";
    }
    else
    {
      Price1.innerHTML = "199.99";
      Price2.innerHTML = "249.99";
      Price3.innerHTML = "399.99";
    }
  }

  return (
    <>
      <div className='container'>
        <div className='title'>
          <h1>Our Pricing</h1>
          <div className='toggle-div'>
            <span>Annually</span>
            <div className='center'>
              <label className='switch'>
                <input id='toggle-checkbox' type='checkbox' onChange={changePrices}></input>
                <span className='slider round'></span>
              </label>
            </div>
            <span>Monthly</span>
          </div>
        </div>
        <div className='cards'>
          <Cards data={Card1} />
          <Cards data={Card2} />
          <Cards data={Card3} />
        </div>
      </div>
    </>
  );
}

export default App;
