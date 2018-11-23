import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component {
    
    render() {
        return (
            <div className='Projects' ref='projects'>
                <h1>PROJECTS</h1>
                <div className='projects-content'>
                    <Project 
                        title={'D&D Campaign Planner'}
                        imgs={[
                            '/images/dnd/dnd1-min.png',
                            '/images/dnd/screen-min.png',
                            '/images/dnd/dashboard-min.png',
                            '/images/dnd/create-min.png',
                            '/images/dnd/edit-min.png'
                        ]}
                        route={'/projects/DnD'}
                    />
                    <Project
                        title={'VShoppify'}
                        imgs={[
                            '/images/vShoppify/vShoppify-min.png',
                            '/images/vShoppify/vr-min.png',
                            '/images/vShoppify/men-min.png',
                            '/images/vShoppify/cart-min.png',
                            '/images/vShoppify/review-min.png',
                            '/images/vShoppify/item-page-min.png',
                            '/images/vShoppify/chatbot-min.png',
                        ]}
                        route={'/projects/Vshoppify'}
                    />
                    <Project
                        title={'PlantMe'}
                        imgs={[
                            '/images/plantMe/plantme1-min.png',
                            '/images/plantMe/plants-min.png',
                            '/images/plantMe/plant-min.png'
                        ]}
                        route={'/projects/PlantMe'}
                    />
                    <Project
                        title={'Bitex Dashboard'}
                        imgs={[
                            '/images/bitexDash/BitDash-Main-min.png',
                            '/images/bitexDash/BitDash-Account-min.png',
                            '/images/bitexDash/BitDash-AccountEdit-min.png',
                            '/images/bitexDash/BitDash-CSV-min.png',
                        ]}
                        route={'/projects/BitexDash'}
                    />
                    
                </div>
            </div>
        );
    }
}

export default Projects;