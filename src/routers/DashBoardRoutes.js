import React from 'react'
//import { Navbar } from './../components/ui/Navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ReactNavbar } from '../components/ui/ReactNavbar';
import { Catedra } from '../components/catedra/Catedra';
import { Curso } from '../components/curso/Curso';


export const DashBoardRoutes = () => {
    return (
        <>
             <ReactNavbar/>
            <div>
                <Switch>
                    <Route exact path="/curso" component={Curso}/>
                    <Route exact path="/catedra" component={Catedra}/>
                    <Redirect to="/inicio"/>
                </Switch>
            </div>
        </>
    )
}
//<Navbar/>0