import React from "react";
import Tarjeta from "./Tarjeta";

const Iterador = ({chao})=>{
    console.log(chao)
    return(
        <React.Fragment>
            {chao ? (
                chao.length > 0 ? (
                    chao.map((chao) => (
                        <Tarjeta
                            key={chao.id_b}
                            {...chao}
                        />
                    ))
                ) : (
                    <p> No hay datos ERROR</p>
            )

        ) : (
            <p>Cargando...</p>
           )}

        </React.Fragment>
    );
};

export default Iterador