import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { ReactNavbar } from '../components/ui/ReactNavbar';
import { AltaClase } from '../components/clase/AltaClase';
import { ModificarClase } from './../components/clase/ModificarClase';
import { BajaClase } from './../components/clase/BajaClase';
import { ListarClase } from './../components/clase/ListarClase';
import { AltaCatedra } from '../components/catedra/AltaCatedra';
import { ModificarCatedra } from '../components/catedra/ModificarCatedra';
import { BajaCatedra } from '../components/catedra/BajaCatedra';
import { ListarCatedra } from '../components/catedra/ListarCatedra';
import { ListarInicio } from './../ListarInicio';


export const DashBoardRoutes = () => {
    return (
        <>
             <ReactNavbar/>
            <div>
                <Switch>
                    <Route exact path="/altaClase" component={AltaClase}/>
                    <Route exact path="/modificarClase" component={ModificarClase}/>
                    <Route exact path="/bajaClase" component={BajaClase}/>
                    <Route exact path="/listarClase" component={ListarClase}/>
                    <Route exact path="/altaCatedra" component={AltaCatedra}/>
                    <Route exact path="/modificarCatedra" component={ModificarCatedra}/>
                    <Route exact path="/bajaCatedra" component={BajaCatedra}/>
                    <Route exact path="/listarCatedra" component={ListarCatedra}/>
                    <Route exact path="/" component={ListarInicio}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        </>
    )
}
//<Navbar/>0
