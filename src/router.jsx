import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavigationBar from './components/navigationbar';

import CharactersPage from './pages/characters';

export default function () {
    return (
        <BrowserRouter>
            <NavigationBar/>
            <Switch>
                <Route exact path='/characters' component={CharactersPage}/>
            </Switch>
        </BrowserRouter>
    );
}