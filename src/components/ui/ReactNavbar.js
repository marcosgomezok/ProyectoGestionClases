import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const ReactNavbar = () => {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
                <Link 
                  className="navbar-brand" 
                  to="/"
                  >
                  Inicio
                </Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                Gestionar Clases
              </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <NavLink 
                      activeClassName="active"
                      className="dropdown-item" 
                      exact
                      to="/altaClase"
                    >Alta clase
                    </NavLink>
                    <NavLink 
                      activeClassName="active"
                      className="dropdown-item" 
                      exact
                      to="/modificarClase"
                    >Modificar clase
                    </NavLink>
                    <NavLink 
                      activeClassName="active"
                      className="dropdown-item" 
                      exact
                      to="/bajaClase"
                    >Baja clase
                    </NavLink>
                    <NavLink 
                      activeClassName="active"
                      className="dropdown-item" 
                      exact
                      to="/listarClase"
                    >Listar clases
                    </NavLink>
                  </div>
                </li>
              <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown"  aria-expanded="false">
                        Gestionar Catedras
                    </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <NavLink 
                      activeClassName="active"
                      className="dropdown-item" 
                      exact
                      to="/altaCatedra"
                    >Alta catedra
                    </NavLink>
                    <NavLink 
                      activeClassName="active"
                      className="dropdown-item" 
                      exact
                      to="/modificarCatedra"
                    >Modificar catedra
                    </NavLink>
                    <NavLink 
                      activeClassName="active"
                      className="dropdown-item" 
                      exact
                      to="/bajaCatedra"
                    >Baja catedra
                    </NavLink>
                    <NavLink 
                      activeClassName="active"
                      className="dropdown-item" 
                      exact
                      to="/listarCatedra"
                    >Listar catedras
                    </NavLink>
                  </div>
              </li>
            </ul>
          </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <NavLink 
              activeClassName="active"
              className="nav-item nav-link" 
              exact to="/admin"
              >
              <i class="fas fa-user-tie"></i>  Administrador
            </NavLink>
            <NavLink 
              activeClassName="active"
              className="nav-item nav-link" 
              exact to="/login"
              >
              <i class="fas fa-sign-out-alt"></i> Cerrar sesión
            </NavLink>
          </ul>               
        </div>            
      </nav>
    )
}
