import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Repositories from './pages/Repositories/repositories';
import Home from './pages/Home/home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/repositorios' component={Repositories}/>
            </Switch>
        </BrowserRouter>
        
    )
}