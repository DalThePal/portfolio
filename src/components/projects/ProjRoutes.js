import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProjHome from './ProjHome';
import ProjOverview from './ProjOverview';

export default () => {
    return (
        <Switch>
            <Route exact path='/' component={ProjHome} />
            <Route 
                name='project-overview'
                path='/:route'
                render={props => <ProjOverview props={props} />}
            />
                    
        </Switch>
    )
};