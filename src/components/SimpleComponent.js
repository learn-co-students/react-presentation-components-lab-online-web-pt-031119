// Code SimpleComponent Here

import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    
        state = {
        mood: "happy"
    }
    

    changeHappy = () => {
        
       if (this.state.mood === "happy") {
            this.setState( {
                mood: "sad"
            })
        } else {
            this.setState({
                mood: "happy"
            })
        }
            this.setState({
                mood: "sad"
                })
        }

    render() {
        return (
            <div onClick={this.changeHappy}>
                {this.state.mood}
                
            </div>
        )
    }
}
