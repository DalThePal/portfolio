import React, { Component } from 'react';
import Project from './Project';

export default class Projects extends Component {

    render() {
        return (
            <div className='Projects' ref='projects'>
                <h1>PROJECTS</h1>
                <div className='projects-content'>
                    <Project 
                        title={'D&D Campaign Planner'}
                        img={'/images/dnd1.png'}
                        liveSite={'https://www.dalthepal.com'}
                        repo={'https://github.com/DalThePal/personal-proj'}
                        route={null}
                    />
                    <Project
                        title={'VShoppify'}
                        img={'/images/vShoppify.png'}
                        liveSite={null}
                        repo={'https://github.com/virtual-clothing/vr-store'}
                        route={null}
                    />
                    <Project
                        title={'PlantMe'}
                        img={'/images/plantme1.png'}
                        liveSite={'https://plantme.dallenhoyal.com'}
                        repo={'https://github.com/DalThePal/plant-me'}
                        route={null}
                    />
                    <Project
                        title={'BitexMining'}
                        img={'/images/BitexHomePage.png'}
                        liveSite={'https://www.bitexmining.com'}
                        repo={null}
                        route={null}
                    />
                    <Project
                        title={'BitSquad'}
                        img={null}
                        liveSite={null}
                        repo={null}
                        route={null}
                    />
                    <Project
                        title={'BitDash'}
                        img={null}
                        liveSite={null}
                        repo={null}
                        route={null}
                    />
                    
                </div>
            </div>
        );
    }
}