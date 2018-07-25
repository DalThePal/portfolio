import React, { Component } from 'react';

export default class Projects extends Component {
    constructor() {
        super();
        this.state = {
            isDNDHovering: false,
            isVHovering: false,
            isPlantHovering: false,
            isShedHovering: false
        }
    }

    handleHoverChange(obj) {
        this.setState(obj)
    }

    render() {
        return (
            <div className='Projects' ref='projects'>
                <h1>PROJECTS</h1>
                <div className='projects-content'>
                    <div className='Project'>
                        <div className='project-pic-dnd' onClick={() => this.handleHoverChange({isDNDHovering: !this.state.isDNDHovering})} onMouseEnter={() => this.handleHoverChange({isDNDHovering: !this.state.isDNDHovering})} onMouseLeave={() => this.handleHoverChange({isDNDHovering: !this.state.isDNDHovering})}>
                            {this.state.isDNDHovering ? <div className='project-info'>
                                <h2>DND CAMPAIGN PLANNER</h2>
                                <div className='button-container'>
                                    <a href='https://www.dalthepal.com'><button onClick={(e) => e.stopPropagation()}>LIVE SITE</button></a>
                                    <a href='https://github.com/DalThePal/personal-proj'><button onClick={(e) => e.stopPropagation()}>GITHUB</button></a>
                                </div>
                            </div> : ''}
                        </div>
                    </div>
                    <div className='Project'>
                        <div className='project-pic-v' onClick={() => this.handleHoverChange({isVHovering: !this.state.isVHovering})} onMouseEnter={() => this.handleHoverChange({isVHovering: !this.state.isVHovering})} onMouseLeave={() => this.handleHoverChange({isVHovering: !this.state.isVHovering})}>
                            {this.state.isVHovering ? <div className='project-info'>
                                <h2>VSHOPPIFY</h2>
                                <div className='button-container'>
                                    <a href='https://www.vshoppify.com'><button onClick={(e) => e.stopPropagation()}>LIVE SITE</button></a>
                                    <a href='https://github.com/virtual-clothing/vr-store'><button onClick={(e) => e.stopPropagation()}>GITHUB</button></a>
                                </div>
                            </div> : ''}
                        </div>                    
                    </div>
                    <div className='Project'>
                        <div className='project-pic-plant' onClick={() => this.handleHoverChange({isPlantHovering: !this.state.isPlantHovering})} onMouseEnter={() => this.handleHoverChange({isPlantHovering: !this.state.isPlantHovering})} onMouseLeave={() => this.handleHoverChange({isPlantHovering: !this.state.isPlantHovering})}>
                            {this.state.isPlantHovering ? <div className='project-info'>
                                <h2>PLANTME</h2>
                                <div className='button-container'>
                                    <a href='https://github.com/DalThePal/plant-me'><button onClick={(e) => e.stopPropagation()}>GITHUB</button></a>
                                </div>
                            </div> : ''}
                        </div>                    
                    </div>
                    <div className='Project'>
                        <div className='project-pic-shed' onClick={() => this.handleHoverChange({isShedHovering: !this.state.isShedHovering})} onMouseEnter={() => this.handleHoverChange({isShedHovering: !this.state.isShedHovering})} onMouseLeave={() => this.handleHoverChange({isShedHovering: !this.state.isShedHovering})}>
                            {this.state.isShedHovering ? <div className='project-info'>
                                <h2>SHEDWOOL</h2>
                                <div className='button-container'>
                                    <a href='https://www.shedwool.com'><button onClick={(e) => e.stopPropagation()}>LIVE SITE</button></a>
                                </div>
                            </div> : ''}
                        </div>                    
                    </div>
                </div>
            </div>
        )
    }
}