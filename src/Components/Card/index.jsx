import React from "react";
import style from "./style.module.css"

function Card (props){
    const{ 
    name,           
    status,
    species,
    gender,
    image,
    type
      }= props;

return(
    <div className={style.Card}>
        <img src= {image}/>
        <h2>{name}</h2>
        <p> Status:{status} </p>
        <p> Specie: {species}</p>
        <p>Gender: {gender}</p>
        {type ? <p>Description: {type} </p>:null}
    </div>
);
}

export default Card;