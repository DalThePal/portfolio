import React, { Component } from 'react';
import Skill from './Skill';

export default class Skills extends Component {

    render() {
        return (
            <div className='Skills' ref='skills'>
                <h1>SKILLS</h1>
                <div className='skills-content'>
                    <Skill 
                        title={'React'}
                        img={'/icons/react-icon.png'}
                    />
                    <Skill
                        title={'Redux'}
                        img={'/icons/redux-icon.png'}
                    />
                    <Skill
                        title={'Vue'}
                        img={'/icons/vue-logo.png'}
                    />
                    <Skill
                        title={'VueX'}
                        img={'/icons/vuex-icon.png'}
                    />
                    <Skill
                        title={'JavaScript'}
                        img={'/icons/javascript-logo.png'}
                    />
                    <Skill
                        title={'HTML5'}
                        img={'/icons/html-logo.png'}
                    />
                    <Skill
                        title={'CSS3'}
                        img={'/icons/css3-logo.png'}
                    />
                    <Skill
                        title={'SASS'}
                        img={'/icons/sass-icon.png'}
                    />
                    <Skill
                        title={'Node'}
                        img={'/icons/nodejs-logo.png'}
                    />
                    <Skill
                        title={'PostgreSQL'}
                        img={'/icons/postgresql-logo.png'}
                    />
                    <Skill
                        title={'Python'}
                        img={'/icons/python-logo.png'}
                    />
                </div>
            </div>
        )
    }
}