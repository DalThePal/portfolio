import React from 'react';
import { Switch, Route } from 'react-router';

import BitexDash from './BitexDash';
import Dnd from './Dnd';
import PlantMe from './PlantMe';
import Projects from './Projects';
import Vshoppify from './Vshoppify';

const ProjectRoutes = React.forwardRef((props, ref) => {

    return (
        <Switch>
            <Route exact path='/' render={() => <Projects ref={ref} />} />
            <Route path='/projects/DnD' render={() => <Dnd ref={ref}/>} />
            <Route path='/projects/Vshoppify' render={() => <Vshoppify ref={ref}/>} />
            <Route path='/projects/PlantMe' render={() => <PlantMe ref={ref}/>} />
            <Route path='/projects/BitexDash' render={() => <BitexDash ref={ref}/>} />
        </Switch>
    );

});

export default ProjectRoutes;
