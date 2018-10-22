import React, { Component } from 'react';
import ProjPreview from './ProjPreview';

class ProjHome extends Component {

    render() {
        return (
            <div className='ProjHome'>
                <h1>PROJECTS</h1>
                <div className='projects-content'>
                    <ProjPreview 
                        title={'D&D Campaign Planner'}
                        img={'/images/dnd/dnd1.png'}
                        liveSite={'https://www.dalthepal.com'}
                        repo={'https://github.com/DalThePal/personal-proj'}
                        route={null}
                    />
                    <ProjPreview
                        title={'VShoppify'}
                        img={'/images/vShoppify/vShoppify.png'}
                        liveSite={null}
                        repo={'https://github.com/virtual-clothing/vr-store'}
                        route={null}
                    />
                    <ProjPreview
                        title={'PlantMe'}
                        img={'/images/plantMe/plantme1.png'}
                        liveSite={'https://plantme.dallenhoyal.com'}
                        repo={'https://github.com/DalThePal/plant-me'}
                        route={'PlantMe'}
                    />
                    <ProjPreview
                        title={'BitexMining'}
                        img={'/images/bitex/BitexHomePage.png'}
                        liveSite={'https://www.bitexmining.com'}
                        repo={null}
                        route={null}
                    />
                    <ProjPreview
                        title={'BitSquad'}
                        img={'/images/bitSquad/BitSquad-Main.png'}
                        liveSite={null}
                        repo={null}
                        route={null}
                    />
                    <ProjPreview
                        title={'BitDash'}
                        img={'/images/bitDash/BitDash-Main.png'}
                        liveSite={null}
                        repo={null}
                        route={null}
                    />
                    
                </div>
            </div>
        )
    }
}

export default ProjHome;