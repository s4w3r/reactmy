import React from "react";
import Formulario from "../componentes/formulario"
import Tarjeta from "../componentes/Tarjeta";


const Dibujar =({formu,onChange,onSubmit})=>
(<React.Fragment>
        <Tarjeta
            {...formu}
        />
        <Formulario
            onSubmit= {onSubmit}
            onChange = {onChange}
            formu={formu}
        />
    </React.Fragment>)

export default Dibujar