import React, { Component } from 'react';

import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.changeScrollTo = this.changeScrollTo.bind(this);
    this.state = {
      scrollTo: 'about'
    };
  }

  changeScrollTo(string) {
    this.setState({
      scrollTo: string
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar changeScrollTo={this.changeScrollTo}/>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default App;
