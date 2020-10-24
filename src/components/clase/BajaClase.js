import React from 'react'
import { Link } from 'react-router-dom';
import { TablaCursos } from '../../TablaCursos';

export const BajaClase = () => {
    return (
        <div>
            <h3 className="barra">Baja de Clase</h3>
            <div className="container-fluid">
            <div className="row">
                        <div className="col-sm-12">
                            <h3>Listado de Clases a dar de Baja:</h3>
                        </div>
                    </div>
                    <TablaCursos/>
                    <div className="espacioblanco">
                    <div className="row">
                        <div className="col-sm-12">

                            <Link to="/"className="btn btn-success">Volver</Link>
                        </div>  
                    </div> 
                    </div>     
            </div>
        </div>
    )
}
