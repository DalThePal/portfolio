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
                            '/images/dnd/dnd1.png',
                            '/images/dnd/screen.png',
                            '/images/dnd/dashboard.png',
                            '/images/dnd/create.png',
                            '/images/dnd/edit.png'
                        ]}
                        route={'/projects/DnD'}
                    />
                    <Project
                        title={'VShoppify'}
                        imgs={[
                            '/images/vShoppify/vShoppify.png',
                            '/images/vShoppify/vr.png',
                            '/images/vShoppify/men.png',
                            '/images/vShoppify/cart.png',
                            '/images/vShoppify/review.png',
                            '/images/vShoppify/item-page.png',
                            '/images/vShoppify/chatbot.png',
                        ]}
                        route={'/projects/Vshoppify'}
                    />
                    <Project
                        title={'PlantMe'}
                        imgs={[
                            '/images/plantMe/plantme1.png',
                            '/images/plantMe/plants.png',
                            '/images/plantMe/plant.png'
                        ]}
                        route={'/projects/PlantMe'}
                    />
                    <Project
                        title={'Bitex Dashboard'}
                        imgs={[
                            '/images/bitexDash/BitDash-Main.png',
                            '/images/bitexDash/BitDash-Account.png',
                            '/images/bitexDash/BitDash-AccountEdit.png',
                            '/images/bitexDash/BitDash-CSV.png',
                        ]}
                        route={'/projects/BitexDash'}
                    />
                    
                </div>
            </div>
        );
    }
}

export default Projects;