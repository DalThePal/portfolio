import React, { Component } from 'react';

export default class Skills extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className='Skills'>
                <h1>SKILLS</h1>
                <div className='skills-content'>
                    <div className='skill'>
                        <img className='skill-picture' src={require('../images/react-icon.png')}></img>
                        <h3>REACT</h3>
                    </div>
                    <div className='skill'>
                        <img className='skill-picture' src={require('../images/redux-icon.png')}></img>
                        <h3>REDUX</h3>
                    </div>
                    <div className='skill'>
                        <img className='skill-picture' src={require('../images/vue-logo.png')}></img>
                        <h3>VUE</h3>
                    </div>
                    <div className='skill'>
                        <img className='skill-picture' src={require('../images/vuex-icon.png')}></img>
                        <h3>VUEX</h3>
                    </div>
                    <div className='skill'>
                        <img className='skill-picture' src={require('../images/javascript-logo.png')}></img>
                        <h3>JAVASCRIPT</h3>
                    </div>
                    <div className='skill'>
                        <img className='skill-picture' src={require('../images/html-logo.png')}></img>
                        <h3>HTML5</h3>
                    </div>
                    <div className='skill'>
                        <img className='skill-picture' src={require('../images/css3-logo.png')}></img>
                        <h3>CSS3</h3>
                    </div>
                    <div className='skill'>
                        <img className='skill-picture' src={require('../images/sass-icon.png')}></img>
                        <h3>SASS</h3>
                    </div>
                    <div className='skill'>
                        <img className='skill-picture' src={require('../images/nodejs-logo.png')}></img>
                        <h3>NODE</h3>
                    </div>
                    <div className='skill'>
                        <img className='skill-picture' src={require('../images/postgresql-logo.png')}></img>
                        <h3>POSTGRESQL</h3>
                    </div>
                    <div className='skill'>
                        <img className='skill-picture' src={require('../images/python-logo.png')}></img>
                        <h3>PYTHON</h3>
                    </div>
                </div>
            </div>
        )
    }
}