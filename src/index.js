import React from "react";
import ReactDOM from "react-dom";
import './index.css';


const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const heading = {
  color: '#fa9191',
  textAlign: 'center',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  textShadow: '0px 2px 4px #ffe9c5',
  margin: '70px 0',
  fontFamily: "'Josefin Sans', sans-serif",
}
ReactDOM.render(
  <>
    <h1 style={heading}>Random Images</h1>
    <div className="img_div">
      <img src={img1}
        alt="randomImages" srcset="" />
      <img src={img2}
        alt="randomImages" srcset="" />
      <img src={img3}
        alt="randomImages" srcset="" />
    </div>
    <div className="btn">
      <a href=""><button>More Random Picture</button></a>
    </div>

  </>,
  document.getElementById('root'));