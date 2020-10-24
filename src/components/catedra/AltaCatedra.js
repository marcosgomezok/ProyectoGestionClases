import React from 'react'
import { Link } from 'react-router-dom';

export const AltaCatedra = () => {
    return (
        <div>
        <h3 className="barra">Añadir Nueva Catedra</h3>
        <div className="container">
            <form>
                <div className="row">
                    <div className="col-sm-12">
                        <h3>Datos de la catedra:</h3>
                    </div>
                </div>

                <div className="form-group row">
                    <label for="nombre" className="col-sm-2 col-form-label">Nombre</label>
                    <div className="col-sm-10">
                            <input type="text" className="form-control" id="nombre"/>
                        </div>
                </div>
                <div className="form-group row">
                    <label for="codigo" className="col-sm-2 col-form-label">Codigo</label>
                    <div className="col-sm-10">
                            <input type="text" className="form-control" id="codigo"/>
                        </div>
                </div>
                <div className="form-group row">
                    <label for="cargaHoraria" className="col-sm-2 col-form-label">Carga Horaria</label>
                    <div className="col-sm-10">
                            <input type="number" className="form-control" id="cargaHoraria"/>
                        </div>
                </div>

                <div className="form-group row">
                    <label for="area" className="col-sm-2 col-form-label">Area</label>
                    <div className="col-sm-10">
                            <input type="text" className="form-control" id="area"/>
                        </div>
                </div>

                <div className="form-group row">
                    <label for="plan" className="col-sm-2 col-form-label">Plan </label>
                    <div className="col-sm-10">
                            <input type="number" className="form-control" id="plan"/>
                        </div>
                </div>

                <div className="form-group row">
                    <label for="regimen" className="col-sm-2 col-form-label">Regimen </label>
                    <div className="col-sm-10">
                            <input type="text" className="form-control" id="regimen"/>
                        </div>
                </div>

                <div className="form-group row">
                    <label for="profesores" className="col-sm-2 col-form-label">Profesores </label>
                    <div className="col-sm-10">
                            <input type="text" className="form-control" id="profesores"/>
                        </div>
                </div>
                <div className="form-group row">
                    <label for="correlativas" className="col-sm-2 col-form-label">Correlativas </label>
                    <div className="col-sm-10">
                            <input type="text" className="form-control" id="correlativas"/>
                        </div>
                </div>

                <div className="form-group row">
                    <label for="programa" className="col-sm-2 col-form-label">Programa Analitico </label>
                    <div className="col-sm-10">
                            <input type="file" className="form-control" id="programa"/>
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
