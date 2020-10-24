import React from 'react'
import { Link } from 'react-router-dom';

export const Curso = () => {
    return (
        <div>
            <div class="container">
            <div class="menucentrado">
                <div class="row mb-2">
                    <div class="col-md-3"></div>
                        <div class="col-md-6">
                        <table>
                            <tr>
                            <th>Gestion de cursos</th>
                            </tr>
                            <tr>
                            <td><Link to="/inicio">Alta curso</Link></td>
                            </tr>
                            <tr>
                            <td><Link to="/inicio">Modificar curso</Link></td>
                            </tr>
                            <tr>
                            <td><Link to="/inicio">Baja curso</Link></td>
                            </tr>
                            <tr>
                            <td><Link to="/inicio">Listado curso</Link></td>
                            </tr>
                        </table>
                        </div>
                    <div class="col-md-3"></div>
                </div>        
            </div>
            <div class="centrar">
                <Link to="/inicio" class="btn btn-success">Atras</Link>
            </div>
            </div>
        </div>
    )
}
