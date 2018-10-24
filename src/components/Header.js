import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div className='Header' ref='picture'>
                <div className='background-img'></div>
                <div className='profile-gap'>
                    <div className='f_name-wrapper'>
                        <div className='first-name'>COME</div>
                    </div>
                    <div className='l_name-wrapper'>
                        <div className='last-name'>OVER</div>
                    </div>
                    <div className='pic-wrapper'>
                        <div className='profile-pic'></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;