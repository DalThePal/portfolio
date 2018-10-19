import React, { Component } from 'react';

export default class About extends Component {

    render() {
        return (
            <div className='About'>
                <div className='background-img'></div>
                <div className='profile-gap'>
                    <div className='f_name-wrapper'>
                        <div className='first-name'>DALLEN</div>
                    </div>
                    <div className='l_name-wrapper'>
                        <div className='last-name'>HOYAL</div>
                    </div>
                    <div className='pic-wrapper'>
                        <div className='profile-pic'></div>
                    </div>
                </div>
                <div className='profile-content' ref='about'>
                    <h1 className='about-header'>ABOUT ME</h1>
                    <p className='about-paragraph'>
                        I am a Junior Web Developer that strives for excellence in everything I do.   My
                        pursuit of Web Development stems from my passion of creating. I love to create,
                        tear apart, and fix things.  But what I enjoy more than creating is discovering
                        new ways to create and exploring the world I live in.
                    </p>
                    <p className='about-paragraph'>
                        Whenever I am asked what my hobbies are, I often find myself explaining that my
                        hobby is finding new hobbies. I've explored knife making, restoring old motorcycles,
                        painting miniatures, building my own gameboy, mushroom hunting, and so many more.  I
                        just love learning new things and in Web Development, there is always something new to
                        learn.
                    </p>
                </div>
                
            </div>
        )
    }
}
