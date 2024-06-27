import React, { useState,useEffect } from "react";
import Componentes from "../Componentes";
import useFetch from "../../Hook/hook";

const ContenedorComponentes=()=>{
    const {data} = useFetch(`${url}/info`)
    return <Componentes
            data={data}
            />
}
/* class ContenedorComponentes extends React.Component{
        state = {
            data:[

            ]
        }
        async componentDidMount(){
            await this.cargarComponentes()
        }

        cargarComponentes = async()=>{
            let res = await fetch('http://localhost:8000/api/info')
            let data = await res.json()
            this.setState({
                data
            })
        }

    render(){
        return <Componentes
                data={this.state.data}
                />
    }
} */
export default ContenedorComponentes