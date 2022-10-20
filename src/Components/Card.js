import React from "react";
import "./Card.css";
import imdb from "../images/imdb.png";

const Card = (props) => {
  return (
    
  //  <div className="crd">
    <div className="card" >
    <img src={props.imgurl} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      {/* <div className="sub-body">
      <h6 className="card-title">{props.genre}</h6>
      <h6 className="card-title">{props.lang}</h6>
      </div> */}
      <p className="card-text">Release: {props.year} 
             <img className="imdblogo" src={imdb} alt="imdb" /> <b>{props.rating}/10</b>
       </p>
      <a href={props.trail} className="btn btn-dark">Watch Trailer</a>
      <a href="#" className="btn btn-dark">Watch Movie</a>
    </div>
  </div>
  // </div>
  
  );
};

export default Card;
