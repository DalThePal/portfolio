import React, { Component } from 'react';
import pdf from '../files/web_dev_resume.pdf';

class NavBar extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            isHidden: false
        };
    }

    handleChange = (obj) => {
        this.setState(obj);
    }

    render = () => {
        return (
            <div className='NavBar'>
                <div className='desktop'>
                    <img 
                        className='menu-img' 
                        src="/DH-white.png" 
                        width="30px;"
                        onClick={() => this.props.changeScrollTo('picture')}
                    />
                    <div className="route-container">
                        <div className='route' onClick={() => this.props.changeScrollTo('about')}>About</div>
                        <div className='route' onClick={() => this.props.changeScrollTo('projects')}>Projects</div>
                        <div className='route' onClick={() => this.props.changeScrollTo('skills')}>Skills</div>
                        <div className='route' onClick={() => this.props.changeScrollTo('contact')}>Contact</div>
                        <a className='route' href={pdf} target='_blank'>Resume</a>
                    </div>
                </div>
                <div className='mobile'>
                    <img 
                        className='menu-img'
                        src='/DH-white.png'
                        alt='dropdown' 
                        width='30px' 
                        onClick={() => this.handleChange({isHidden: !this.state.isHidden})}
                    />
                </div>
                {this.state.isHidden && <DropDown handleChange={this.handleChange} changeScrollTo={this.props.changeScrollTo}/>}
            </div>
        )
    }
}

const DropDown = (props) => {
    return (
        <div className='DropDown'>
            <div className='dropDownRoute' onClick={() => {props.changeScrollTo('about'); props.handleChange({isHidden: false})}}>About</div>
            <div className='dropDownRoute' onClick={() => {props.changeScrollTo('projects'); props.handleChange({isHidden: false})}}>Projects</div>
            <div className='dropDownRoute' onClick={() => {props.changeScrollTo('skills'); props.handleChange({isHidden: false})}}>Skills</div>
            <div className='dropDownRoute' onClick={() => {props.changeScrollTo('contact'); props.handleChange({isHidden: false})}}>Contact</div>
            <a className='dropDownRoute' href={pdf} target='_blank'>Resume</a>
        </div>
    )
}

export default NavBar