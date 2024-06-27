import React from "react";
import Contenedor from "./Contenedor";
import { useNavigate } from "react-router-dom";

const Navergar =()=>{
    const navigate = useNavigate()
    return <Contenedor navigate = {navigate}/>
}

export default Navergar