import React, { useState } from "react";
import style from "./style.module.css"

function SearchBar (props) {
    const {value,setValue}=props;
    const search = (e) => {
        setValue (e.target.value);
    }        
    console.log(value);
    return(
        <div className={style.input}>
        <input type={"text"} 
        placeholder="Buscar"
        value={value}
        onChange={search}
        />
        </div>

    )

}

export {SearchBar} 