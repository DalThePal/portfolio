import React, { Component } from 'react';
import pdf from '../files/web_dev_resume.pdf';

class NavBar extends Component {

    render = () => {
        return (
            <div className='NavBar'>
                <div className='files'>
                    <a href={pdf}>Resume</a>
                </div>
                <div className='routes'>
                    <div className='route' onClick={() => this.props.changeScrollTo('about')}>About</div>
                    <div className='route' onClick={() => this.props.changeScrollTo('projects')}>Projects</div>
                    <div className='route' onClick={() => this.props.changeScrollTo('skills')}>Skills</div>
                    <div className='route' onClick={() => this.props.changeScrollTo('contact')}>Contact</div>
                </div>
            </div>
        )
    }
}

export default NavBar