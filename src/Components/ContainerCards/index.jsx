import React from "react"
import style from "./style.module.css"

function ContainerCards(props){
    const {children}= props;
    return(
        <main className={style.ContainerCards}>
            {children}
        </main>
    )
}

export {ContainerCards}