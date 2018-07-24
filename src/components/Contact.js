import React, { Component } from 'react';
import axios from 'axios';

export default class Contact extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    handleChange(obj) {
        this.setState(obj);
    }

    sendEmail() {
        const { name, email, subject, message } = this.state

        axios.post('/email', { name, email, subject, message }).then(() => {
            alert('Your email has been sent');
            this.setState({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        })
    }

    render() {
        return (
            <div className='Contact'>
                <h1>CONTACT</h1>
                <input placeholder='YOUR NAME' onChange={(e) => this.handleChange({name: e.target.value})}/>
                <input placeholder='YOUR EMAIL' onChange={(e) => this.handleChange({email: e.target.value})}/>
                <input placeholder='SUBJECT' onChange={(e) => this.handleChange({subject: e.target.value})}/>
                <textarea placeholder='MESSAGE' onChange={(e) => this.handleChange({message: e.target.value})}/>
                <button onClick={() => this.sendEmail()}>SEND</button>
            </div>
        )
    }
}