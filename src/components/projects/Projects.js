import React, { Component } from 'react';
import ProjPreview from './ProjPreview';
import ProjRoutes from'./ProjRoutes';

export default class Projects extends Component {

    render() {
        return (
            <div className='Projects' ref='projects'>
                <ProjRoutes/>
            </div>
        );
    }
}