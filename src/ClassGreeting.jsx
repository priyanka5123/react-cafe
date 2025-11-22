import React, { Component } from 'react';
import './styles.css'
class ClassGreeting extends Component{
    constructor(){
        super()
        this.state = {
            name:"John Doe"
        }
        this.changeName = this.changeName.bind(this);
    }
    changeName(){
        this.setState({name:"Jane Doe"})
    }
    render(){
        const name = this.state.name;
        return (
            <div>
                <p className='greeting'>Hello, {name}! This is a class-based greeting!</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}
export default ClassGreeting