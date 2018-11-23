import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dnd extends Component {

    render() {
        return (
            <div className='projectDetails' ref='projects'>
                <h1>DND CAMPAIGN PLANNER</h1>
                <div className='row-links'>
                    <a className='github' href='https://github.com/DalThePal/personal-proj' target='_blank'>GitHub</a>
                    <a className='live-site' href='http://www.dalthepal.com' target='_blank'>Live Site</a>
                </div>
                <div className='row'>
                    <p className='desc'>
                        This application was built for the popular tabletop game Dungeons
                        & Dragons.  It pulls data from a DnD API and displays 
                        Monsters, Spells, and Items used in the game.  Additionally,
                        it allows you to create, edit, delete, and save your own Monsters, 
                        Spells and Items for quick reference throughout gameplay.
                    </p>
                    <img className='img1' src='/images/dnd/dnd1-min.png' width='400px' height='200px'/>
                </div>
                <div className='row'>
                    <img className='img1' src='/images/dnd/screen-min.png' width='400px' height='200px' />
                    <p className='desc'>
                        This is the "Mounts & Vehicles" section. It displays a card for 
                        each item in this list with a search bar in the header to quickly 
                        find exactly what you're looking for. Each section (Monsters, Spells, Armor,
                        Weapons, and Equipement) looks identical to this one, displaying 
                        a card for each monster, spell, etc.  Every card has an "ADD" 
                        button that creates a "quick link" on the right side dashboard.
                    </p>
                </div>
                <div className='row'>
                    <p className='desc'>
                        The dashboard serves has a navigation bar as well as houses links
                        to the saved items. Clicking on the section title will navigate to
                        the corresponding section. Each link is comprised of two buttons. 
                        The button named after the saved item will render that item's card.
                        The "DEL" button will delete the link. The "DISPLAY ALL" button on
                        the top will display all of the saved cards at once.
                    </p>
                    <img className='img2' src='/images/dnd/dashboard-min.png' width='200px' height='400px' />
                </div>
                <div className='row'>
                    <img className='img1' src='/images/dnd/create-min.png' width='400px' height='200px' />
                    <p className='desc'>
                        At the end of each section there is a blank card that allows you to 
                        create an item of your choice. Once created, the item is saved in the
                        database with a reference to your login so that you are able to access
                        it from any computer.
                    </p>
                </div>
                <div className='row'>
                    <p className='desc'>
                        On top of creating your own items, you are able to edit or delete any
                        items that you have already created.  You are even able to add it to 
                        your dashboard for quick reference during gameplay.
                    </p>
                    <img className='img1' src='/images/dnd/edit-min.png' width='450px' height='200px' />
                </div>
                <Link className='back-link' to='/'>&#8678; PROJECTS</Link>
            </div>
        );
    }
}

export default Dnd;