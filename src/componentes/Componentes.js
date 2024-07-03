import React from "react";
import Hi from "../componentes/Saludo"
import Iterador from "../componentes/iterante"
import Boton from "../componentes/boton";

const Componentes=({data,loading})=>{
    return(
        <React.Fragment>
        <Hi
           username = "Juli"
        />
        <Iterador
           chao={data}
        />
        <Boton/>
    </React.Fragment>
        
    )
    }
export default Componentes