import React, { Component } from 'react';
import Skill from './Skill';

export default class Skills extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className='Skills' ref='skills'>
                <h1>SKILLS</h1>
                <div className='skills-content'>
                    <Skill 
                        title={'React'}
                        img={'/images/react-icon.png'}
                    />
                    <Skill
                        title={'Redux'}
                        img={'/images/redux-icon.png'}
                    />
                    <Skill
                        title={'Vue'}
                        img={'/images/vue-logo.png'}
                    />
                    <Skill
                        title={'VueX'}
                        img={'/images/vuex-icon.png'}
                    />
                    <Skill
                        title={'JavaScript'}
                        img={'/images/javascript-logo.png'}
                    />
                    <Skill
                        title={'HTML5'}
                        img={'/images/html-logo.png'}
                    />
                    <Skill
                        title={'CSS3'}
                        img={'/images/css3-logo.png'}
                    />
                    <Skill
                        title={'SASS'}
                        img={'/images/sass-icon.png'}
                    />
                    <Skill
                        title={'Node'}
                        img={'/images/nodejs-logo.png'}
                    />
                    <Skill
                        title={'PostgreSQL'}
                        img={'/images/postgresql-logo.png'}
                    />
                    <Skill
                        title={'Python'}
                        img={'/images/python-logo.png'}
                    />
                </div>
            </div>
        )
    }
}