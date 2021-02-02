import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';
import FullArticle from './FullArticle';

export const RouterArticle = () => {
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/full_article" component={FullArticle}>                       
                    </Route>
                </Switch>
            </Router>
        </div>
    )  
}
