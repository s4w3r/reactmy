import React from "react";
import Tarjeta from "./Tarjeta";

const Iterador = ({chao})=>(
    <React.Fragment>
        {
            chao.map((chao)=>{
                return(
                    <Tarjeta
                        key={chao.id_b}
                        {...chao}
                    />
                )
            })
        }
    </React.Fragment>
)

export default Iterador