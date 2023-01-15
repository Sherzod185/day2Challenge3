import React from "react";
import { movies } from "./movies";
export const Card = () => {
  return (movies.map((item)=>{
    return <div className="card">
    <div className="topCard">
      <h2>{item.names}</h2>
      <img src={item.imgSrc} alt="" />
    </div>
    <div className="bottomCard">
      <p>{item.like}</p>
      <p>{item.produced}</p>
    </div>
    </div>
  })) 
};
