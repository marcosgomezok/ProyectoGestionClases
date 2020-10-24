import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const ReactNavbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Inicio
            </Link>

            <div className="navbar-collapse w-100">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/curso"
                    >
                        Gestionar Cursos
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/catedra"
                    >
                        Gestionar Catedras
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                <NavLink 
                                      aria-current="false"
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/inicio"
                    >
                        <i class="fas fa-user-tie"></i>  Administrador
                    </NavLink>

                    <NavLink 
  
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        <i class="fas fa-sign-out-alt"></i> Cerrar sesión
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
