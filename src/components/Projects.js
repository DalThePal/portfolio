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
                        img={'/images/dnd/dnd1.png'}
                        liveSite={'http://www.dalthepal.com'}
                        repo={'https://github.com/DalThePal/personal-proj'}
                        route={null}
                    />
                    <Project
                        title={'VShoppify'}
                        img={'/images/vShoppify/vShoppify.png'}
                        liveSite={'http://vshoppify.com'}
                        repo={'https://github.com/virtual-clothing/vr-store'}
                        route={null}
                    />
                    <Project
                        title={'PlantMe'}
                        img={'/images/plantMe/plantme1.png'}
                        liveSite={'http://plantme.dallenhoyal.com'}
                        repo={'https://github.com/DalThePal/plant-me'}
                        route={null}
                    />
                    {/* <Project
                        title={'BitexMining'}
                        img={'/images/bitex/BitexHomePage.png'}
                        liveSite={'https://www.bitexmining.com'}
                        repo={null}
                        route={null}
                    /> */}
                    <Project
                        title={'BitSquad'}
                        img={'/images/bitSquad/BitSquad-Main.png'}
                        liveSite={null}
                        repo={null}
                        route={null}
                    />
                    <Project
                        title={'BitDash'}
                        img={'/images/bitDash/BitDash-Main.png'}
                        liveSite={null}
                        repo={null}
                        route={null}
                    />
                    
                </div>
            </div>
        );
    }
}