import React, { Component } from 'react';

import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.changeScrollTo = this.changeScrollTo.bind(this);
        this.picture = React.createRef();
        this.about = React.createRef();
        this.projects = React.createRef();
        this.skills = React.createRef();
        this.contact = React.createRef();
        this.state = {
            scrollTo: 'about'
        };
    }

    changeScrollTo(anchor) {
        switch (anchor) {

            case 'picture':
                return this.picture.current.refs.picture.scrollIntoView({ block: 'start', behavior: 'smooth'});

            case 'about':
                return this.about.current.refs.about.scrollIntoView({ block: 'start', behavior: 'smooth' });

            case 'projects':
                return this.projects.current.refs.projects.scrollIntoView({ block: 'start', behavior: 'smooth' });

            case 'skills':
                return this.skills.current.refs.skills.scrollIntoView({ block: 'start', behavior: 'smooth' });

            case 'contact':
                return this.contact.current.refs.contact.scrollIntoView({ block: 'start', behavior: 'smooth' });

            default: return
        }

    }

    render() {
        return (
            <div className="App">
                <NavBar changeScrollTo={this.changeScrollTo} about={this.about} contact={this.contact} />
                <Header ref={this.picture}/>
                <About ref={this.about} />
                <Projects ref={this.projects} />
                <Skills ref={this.skills} />
                <Contact ref={this.contact} />
            </div>
        );
    }
}

export default App;
