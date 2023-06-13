import React, { Component } from 'react';

class Employe extends Component {

    constructor(props) {
        super(props);
         
        this.state = {
            
            name: 'ketan',
            age: 19
        }
    }

    handleage = () => {
        console.log('555555555555');
        this.setState
         ({
            age :25
        })
    }

    
    render() {
        return (
            <div>
                <h1>hellow employe</h1>
                
                <p>name : {this.state.name}</p>
                <p>age : {this.state.age}</p>
                <button onClick={this.handleage}>chenge it</button>
            </div>
        );
    }
}

export default Employe;