import React from 'react'
import { Link } from 'react-router-dom';

export const AltaClase = () => {
    return (
        <div>
            <h3 className="barra">Añadir Nueva Clase</h3>
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Datos de la clase:</h3>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="catedra" className="col-sm-2 col-form-label">Catedra</label>
                        <div className="col-sm-10">
                                <input type="text" className="form-control" id="catedra"/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="tema" className="col-sm-2 col-form-label">Tema</label>
                        <div className="col-sm-10">
                                <input type="text" className="form-control" id="tema"/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="date" className="col-sm-2 col-form-label">Fecha</label>
                        <div className="col-sm-10">
                                <input type="date" className="form-control" id="date"/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="tipo" className="col-sm-2 col-form-label">Tipo</label>
                        <div className="col-sm-10">
                                <input type="text" className="form-control" id="tipo"/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="profesor" className="col-sm-2 col-form-label">Profesor</label>
                        <div className="col-sm-10">
                                <input type="text" className="form-control" id="profesor"/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="grabacion" className="col-sm-2 col-form-label">Link Grabacion</label>
                        <div className="col-sm-10">
                                <input type="url" className="form-control" id="grabacion"/>
                            </div>
                    </div>

                    <div className="form-group row">
                        <label for="asistencia" className="col-sm-2 col-form-label">Asistencia </label>
                        <div className="col-sm-10">
                                <input type="text" className="form-control" id="asistencia"/>
                            </div>
                    </div>

                    <div className="form-group row">
                        <label for="observacion" className="col-sm-2 col-form-label">Observaciones </label>
                        <div className="col-sm-10">
                                <input type="text" className="form-control" id="observacion"/>
                            </div>
                    </div>



                    <div className="espacioblanco">
                    <div className="row">
                        <div className="col-sm-12">
                            <button type="submit" className="btn btn-success">Aceptar</button>
                            <Link to="/"className="btn btn-success">Cancelar</Link>
                        </div>  
                    </div> 
                    </div>     

                </form>
            </div>



        </div>
    )
}
