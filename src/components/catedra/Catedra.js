import React from 'react'
import { Link } from 'react-router-dom';

export const Catedra = () => {
    return (
        <div>
            <div>
            <div class="container">
            <div class="menucentrado">
                <div class="row mb-2">
                    <div class="col-md-3"></div>
                        <div class="col-md-6">
                        <table>
                            <tr>
                            <th>Gestion de catedras</th>
                            </tr>
                            <tr>
                            <td><Link to="/inicio">Alta catedra</Link></td>
                            </tr>
                            <tr>
                            <td><Link to="/inicio">Modificar catedra</Link></td>
                            </tr>
                            <tr>
                            <td><Link to="/inicio">Baja catedra</Link></td>
                            </tr>
                            <tr>
                            <td><Link to="/inicio">Listado catedra</Link></td>
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
        </div>
    )
}
