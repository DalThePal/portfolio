import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PlantMe extends Component {

    render() {
        return (
            <div className='projectDetails' ref='projects'>
                <h1>PLANTME</h1>
                <div className='row-links'>
                    <a className='github' href='https://github.com/DalThePal/plant-me' target='_blank'>GitHub</a>
                    <a className='live-site' href='http://plantme.dallenhoyal.com' target='_blank'>Live Site</a>
                </div>
                <div className='row'>
                    <p className='desc'>
                        This application is an e-commerce site designed by a friend. It is
                        not yet completed as I have only developed content that has been
                        given to me.  The purpose of this project is to demonstrate my
                        capability of replicating a design when given to me.
                    </p>
                    <img className='img1' src='/images/plantMe/plantme1-min.png' width='400px' height='200px'/>
                </div>
                <div className='row'>
                    <img className='img1' src='/images/plantMe/plants-min.png' width='400px' height='200px' />
                    <p className='desc'>
                        Here the items available for purchase are shown.  A custom dropdown
                        menu allows the plants to be filtered by how easy they are to care for.
                    </p>
                </div>
                <div className='row'>
                    <p className='desc'>
                        Clicking on a plant will display a modal with more information such as the
                        name, price, and the ability to add it to your cart.
                    </p>
                    <img className='img1' src='/images/plantMe/plant-min.png' width='400px' height='200px' />
                </div>
                <Link className='back-link' to='/'>&#8678; PROJECTS</Link>
            </div>
        );
    }
}

export default PlantMe;