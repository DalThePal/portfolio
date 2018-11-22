import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Project extends Component {
    constructor(props) {
        super(props);
        this.changeImage = this.changeImage.bind(this);
        this.state = {
            title: props.title,
            route: props.route,
            imgs: props.imgs,
            isHovering: false,
            style: {},
            i: 0
        }
    }

    componentDidMount() {
        this.changeImage()
    }

    handleHoverChange() {
        this.setState({isHovering: !this.state.isHovering});
    }

    changeImage() {
        if(this.state.i === this.props.imgs.length) {
            this.setState({i: 0});
        }
        this.setState({
            style: {
                backgroundImage: `url(${this.state.imgs[this.state.i]})`,
            },
            i: this.state.i + 1
        });
        setTimeout(this.changeImage, 4000);
    }

    render() {        
        return (
            <div 
                className="Project"
                style={this.state.style} 
                onClick={() => this.handleHoverChange()} 
                onMouseEnter={() => this.handleHoverChange()} 
                onMouseLeave={() => this.handleHoverChange()}
            >
                {this.state.isHovering ? 
                    <div className='project-info'>
                        <h2>{this.state.title}</h2>
                        <div className='button-container'>
                            {this.state.route ?
                                <Link className="project-link" to={this.state.route}>LEARN MORE</Link>
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