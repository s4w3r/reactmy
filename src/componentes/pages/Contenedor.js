import React, { useState } from "react";
import Dibujar from "../Dibujar";

const Contenedor=()=>{
const [data,setData] = useState()
}
/* class Contenedor extends React.Component{
    state={
        formu:{
            title:'',
            descripcion:'',
            img:''
        }
    }

    handleChange=e=>{
        this.setState({
            formu:{
                ...this.state.formu,
                [e.target.name]:e.target.value
            }
        })
    }
    handleSubmit= async e=>{
        e.preventDefault()
        try{
            let config ={
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(this.state.formu)
            }
            let res = await fetch('http://localhost:8000/api/info',config)
            let json = await res.json()
            console.log(json)
            this.props.navigate('/Lista')
        }

        catch(error){

        }
        console.log(this.state)
    }
    
   render(){
    return <Dibujar
            form={this.state.form}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            />
   }

} */
export default Contenedor