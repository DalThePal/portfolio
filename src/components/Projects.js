import React, { Component } from 'react';
import Project from './Project';

export default class Projects extends Component {
    constructor() {
        super();
        this.state = {
            isDNDHovering: false,
            isVHovering: false,
            isPlantHovering: false,
            isShedHovering: false
        }
    }

    handleHoverChange(obj) {
        this.setState(obj)
    }

    render() {
        return (
            <div className='Projects' ref='projects'>
                <h1>PROJECTS</h1>
                <div className='projects-content'>
                    <Project 
                        title={'D&D Campaign Planner'}
                        img={null}
                        liveSite={'https://www.dalthepal.com'}
                        repo={'https://github.com/DalThePal/personal-proj'}
                        route={null}
                    />
                    <Project
                        title={'VShoppify'}
                        img={null}
                        liveSite={null}
                        repo={'https://github.com/virtual-clothing/vr-store'}
                        route={null}
                    />
                    <Project
                        title={'PlantMe'}
                        img={null}
                        liveSite={'https://plantme.dallenhoyal.com'}
                        repo={'https://github.com/DalThePal/plant-me'}
                        route={null}
                    />
                </div>
            </div>
        )
    }
}