import React from "react";

const Formulario = ({onChange,formu,onSubmit}) =>(
    <React.Fragment>
                <form onSubmit={onSubmit}>
                    <React.Fragment>
                        <label>Nombre:</label>
                        <input type="text" name="title" placeholder="Nombre" onChange={onChange} value={formu.title}/>
                    </React.Fragment>
                    <React.Fragment>
                        <label>Descripcion:</label>
                        <input type="text" name="descripcion" placeholder="Descipcion" onChange={onChange} value={formu.descripcion}/>
                    </React.Fragment>
                    <React.Fragment>
                        <label>Url de la imagen:</label>
                        <input type="text" name="img" placeholder="Imagen" onChange={onChange} value={formu.img}/>
                    </React.Fragment>
                    <button type="submit">Enviar</button>
                </form>
            </React.Fragment>
)

/* export default class Formulario extends React.Component{

    render(){
        const {onChange,formu,onSubmit} = this.props
        return(
            <React.Fragment>
                <form onSubmit={onSubmit}>
                    <React.Fragment>
                        <label>Nombre:</label>
                        <input type="text" name="title" placeholder="Nombre" onChange={onChange} value={formu.title}/>
                    </React.Fragment>
                    <React.Fragment>
                        <label>Descripcion:</label>
                        <input type="text" name="descripcion" placeholder="Descipcion" onChange={onChange} value={formu.descripcion}/>
                    </React.Fragment>
                    <React.Fragment>
                        <label>Url de la imagen:</label>
                        <input type="text" name="img" placeholder="Imagen" onChange={onChange} value={formu.img}/>
                    </React.Fragment>
                    <button type="submit">Enviar</button>
                </form>
            </React.Fragment>
        )
    }
} */