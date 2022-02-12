import React, { Component } from 'react';

export default class Ghe extends Component {
    render() {
        const { tenGhe } = this.props;
        return <button className='btn btn-danger'>
            {tenGhe}
        </button>;
    }
}
