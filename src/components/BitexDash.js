import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BitexDash extends Component {

    render() {
        return (
            <div className='projectDetails' ref='projects'>
                <h1>BITEX DASHBOARD</h1>
                <div className='row-links'>
                    {/* <a className='github' href='https://github.com/DalThePal/personal-proj' target='_blank'>GitHub</a> */}
                    {/* <a className='live-site' href='http://www.dalthepal.com' target='_blank'>Live Site</a> */}
                </div>
                <div className='row'>
                    <p className='desc'>
                        This application was built for Bitex Mining. It allows the customer to 
                        login and view their account information, how much their mining machine
                        has earned them, and the current price of popular crypto currencies.
                    </p>
                    <img className='img1' src='/images/bitexDash/BitDash-Main.png' width='400px' height='200px'/>
                </div>
                <div className='row'>
                    <img className='img1' src='/images/bitexDash/BitDash-AccountEdit.png' width='400px' height='200px' />
                    <p className='desc'>
                        Here the customer is able to edit their email and  wallet address where 
                        it is then saved in the database as well as reflected in the company's CRM
                        platform using the corresponding API. 
                    </p>
                </div>
                <div className='row'>
                    <p className='desc'>
                        In addition to a graph displaying their monthly earnings, the customer is 
                        able to view a detailed list of their earnings showing the date it was paid,
                        the gross amount, any fees that were deducted, and the net amount.
                    </p>
                    <img className='img1' src='/images/bitexDash/BitDash-Payouts(1).png' width='400px' height='200px' />
                </div>
                <div className='row'>
                    <img className='img1' src='/images/bitexDash/BitDash-CSV.png' width='400px' height='200px' />
                    <p className='desc'>
                        This page is only accessible by an authorized employee.  Here they are able 
                        to take a spread sheet exports as a CSV document and upload it.  This populates
                        the earning database.
                    </p>
                </div>
                <Link className='back-link' to='/'>&#8678; PROJECTS</Link>
            </div>
        );
    }
}

export default BitexDash;