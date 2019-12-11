import React, { Component } from 'react'

class SimpleComponent extends Component {
    state = {
        mood: 'happy'
    }

    render() {
        return (
            <div 
                onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }

    handleClick = e => {
        this.setState(prevState => {
            return prevState.mood === 'happy' ? {mood: 'sad'} : {mood: 'happy'}
        })
    }
}
export default SimpleComponent
