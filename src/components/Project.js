import React, { Component } from 'react';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            liveSite: props.liveSite,
            repo: props.repo,
            route: props.route,
            isHovering: false
        }
    }

    handleHoverChange() {
        this.setState({isHovering: !this.state.isHovering});
    }

    render() {
        return (
            <div className='Project'>
                <div 
                    className='project-pic-dnd' 
                    onClick={() => this.handleHoverChange()} 
                    onMouseEnter={() => this.handleHoverChange()} 
                    onMouseLeave={() => this.handleHoverChange()}
                >
                    {this.state.isHovering ? 
                        <div className='project-info'>
                            <h2>{this.state.title}</h2>
                            <div className='button-container'>
                                {this.state.liveSite ? 
                                    <a href={this.state.liveSite}><button onClick={(e) => e.stopPropagation()}>LIVE SITE</button></a> 
                                    : ""
                                }
                                {this.state.repo ?
                                    <a href={this.state.repo}><button onClick={(e) => e.stopPropagation()}>GITHUB</button></a>
                                    : ""
                                }
                                {this.state.route ?
                                    <a href={this.state.repo}><button onClick={(e) => e.stopPropagation()}>LEARN MORE</button></a>
                                    : ""
                                }
                            </div>
                        </div> 
                        : ""
                    }
                </div>
            </div>
        );
    }
}

export default Project;