import React, { Component } from 'react';

export default class NavBar extends Component {

   

    render () {
        return (
            <div className='NavBar'>
                <div className='route' onClick={() => this.props.changeScrollTo('about')}>About</div>
                <div className='route' onClick={() => this.props.changeScrollTo('projects')}>Projects</div>
                <div className='route' onClick={() => this.props.changeScrollTo('skills')}>Skills</div>
                <div className='route' onClick={() => this.props.changeScrollTo('contact')}>Contact</div>
            </div>
        )
    }
}