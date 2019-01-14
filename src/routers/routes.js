import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import AddBeer from '../components/AddBeer';
import Header from '../components/Header';
const AppRoutes = ()=>{
    return (
        <BrowserRouter>
            <div>
               <Header/>
               <Switch>
                      <Route path="/" component={Dashboard} exact={true}/>
                      <Route path="/create" component={AddBeer}/>
                      <Route path="/edit/:id" component={Dashboard}/>

               </Switch>
            </div>
        </BrowserRouter>
    )
}
export default AppRoutes;