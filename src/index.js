import React from "react";
import ReactDOM from "react-dom/client";
/* import Maestro from "./componentes/pages/maestro"; */
import App from "./componentes/app";


const root = ReactDOM.createRoot(
  document.getElementById('root')
)

root.render(
  <App/>
)



/* const user = {
  Nombre : 'Julian',
  Apellido: 'Rey',
  Edad: 20,
  Avatar:'https://i.pinimg.com/236x/e0/05/a9/e005a9f9675ab2a1961d76ff073546af.jpg'
}

function datouser(){
  return user.Nombre +""+ user.Apellido +""+ user.Edad
}

const element = (
<div>
  <h1>hola,{datouser(user.Nombre)}</h1>
  <img src={user.Avatar}/>
</div>
) */