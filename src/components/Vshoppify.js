import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Vshoppify extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className='projectDetails' ref='projects'>
                <h1>VSHOPPIFY</h1>
                <div className='row-links'>
                    <a className='github' href='https://github.com/virtual-clothing/vr-store' target='_blank'>GitHub</a>
                    <a className='live-site' href='https://www.vshoppify.com/#/' target='_blank'>Live Site</a>
                </div>
                <div className='row'>
                    <p className='desc'>
                        This is an e-commerce web application built built by men and three others
                        to replicate common features found in an e-commerce site. Additionaly, 
                        AFrame was used to create an alternative Virtual Reality shopping experience 
                        for users.
                    </p>
                    <img className='img1' src='/images/vShoppify/vShoppify.png' width='400px' height='200px'/>
                </div>
                <div className='row'>
                    <img className='img1' src='/images/vShoppify/item-page.png' width='400px' height='200px' />
                    <p className='desc'>
                        Here is the item details page. Each item sold on the site directs to its
                        own page that looks identical to this one.  It allows you to choose your
                        clothing size, look through the pictures, write a review, and add it to
                        your cart.
                    </p>
                </div>
                <div className='row'>
                    <p className='desc'>
                        For each item, on the item details page, you are able to leave a review.
                        This review consists of your name, how many stars you wish to rate the item,
                        and a comment explaining why that rating was given. 
                    </p>
                    <img className='img1' src='/images/vShoppify/review.png' width='400px' height='200px' />
                </div>
                <div className='row'>
                    <img className='img2' src='/images/vShoppify/chatbot.png' width='250px' height='300px' />
                    <p className='desc'>
                        My team and I incorporated a chatbot to assist with the shopping
                        experience.  When asked questions or given commands like "Help me 
                        shop for my daughter", the chatbot will point you in the right
                        direction or give suggestions. 
                    </p>
                </div>
                <div className='row'>
                    <p className='desc'>
                        Here is the cart page.  It displays all of the items that have been 
                        added throughout browsing. Each item in the cart allows the quantity
                        to be changed and for the item to be removed.  On the right the
                        subtotal, tax, and total are calculated and displayed as well as a 
                        payment option through Stripe.
                    </p>
                    <img className='img1' src='/images/vShoppify/cart.png' width='400px' height='200px' />
                </div>
                <div className='row'>
                    <img className='img1' src='/images/vShoppify/account.png' width='400px' height='200px' />
                    <p className='desc'>
                        Upon logging in, the user is redirected to the account page.  This
                        page displays all of the applicable account information for the user
                        and allows them to edit their information when needed.
                    </p>
                </div>
                <div className='row'>
                    <p className='desc'>
                        To top off the project, there is an optional Virtual Reality experience
                        using Aframe. This allows your cart to be viewed in a fitting room, and 
                        lets you explore the store we built.
                    </p>
                    <img className='img1' src='/images/vShoppify/vr.png' width='400px' height='200px' />
                </div>
                <Link className='back-link' to='/'>&#8678; PROJECTS</Link>
            </div>
        );
    }
}

export default Vshoppify;