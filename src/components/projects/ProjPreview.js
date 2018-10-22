import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            liveSite: props.liveSite,
            repo: props.repo,
            route: props.route,
            img: props.img,
            isHovering: false
        }
    }

    handleHoverChange() {
        this.setState({isHovering: !this.state.isHovering});
    }

    render() {

        var style = {
            backgroundImage: 'url(' + this.state.img + ')'
        }

        return (
            <div 
                className="Project"
                style={style} 
                onClick={() => this.handleHoverChange()} 
                onMouseEnter={() => this.handleHoverChange()} 
                onMouseLeave={() => this.handleHoverChange()}
            >
                {this.state.isHovering ? 
                    <div className='project-info'>
                        <h2>{this.state.title}</h2>
                        <div className='button-container'>
                            {this.state.liveSite ? 
                                <a className="project-link" href={this.state.liveSite} target='_blank'>LIVE SITE</a> 
                                : ""
                            }
                            {this.state.repo ?
                                <a className="project-link" href={this.state.repo} target='_blank'>GITHUB</a>
                                : ""
                            }
                            {this.state.route ?
                                <Link className="project-link" params={{ route: this.state.route }} to='project-overview'>LEARN MORE</Link>
                                : ""
                            }
                        </div>
                    </div> 
                    : ""
                }
            </div>  
        );
    }
}

export default Project;