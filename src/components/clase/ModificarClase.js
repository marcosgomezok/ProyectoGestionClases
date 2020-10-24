import React from 'react'
import { Link } from 'react-router-dom';
import { TablaCursos } from '../../TablaCursos';

export const ModificarClase = () => {
    return (
        <div>
        <h3 className="barra">Modificar una Clase</h3>
        <div className="container-fluid">
        <div className="row">
                        <div className="col-sm-12">
                            <h3>Listado de Clases para Modificar:</h3>
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
