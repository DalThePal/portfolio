import React from 'react';

const Skill = (props) => {
    return (
        <div className='skill'>
            <img className='skill-picture' src={props.img}></img>
            <h3>{props.title.toUpperCase()}</h3>
        </div>
    )
}

export default Skill;