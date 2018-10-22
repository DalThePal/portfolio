import React, { Component } from 'react';

class ProjOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log(this.props)
        return (
            <div className='ProjOverview'>
                Hello
            </div>
        )
    }
}

export default ProjOverview;