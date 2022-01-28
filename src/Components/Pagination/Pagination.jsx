import React from "react";
import style from "./style.module.css"

const Pagination = ({ prev, next, onPrevius, onNext }) => {
  const handlePrevius = () => {
    onPrevius();
  };
  const handleNext = () => {
    onNext();
  };
  return (
    <nav>
      <ul>
        {prev ? (
          <li>
            <button className={style.button} onClick={handlePrevius}>Anterior</button>
          </li>
       
       ) : null}
       {
       next?
        <li>
          <button className={style.button}  onClick={handleNext}> Siguiente</button>
        </li>
        :
        null

       }
        
      </ul>
    </nav>
  );
};

export default Pagination;
