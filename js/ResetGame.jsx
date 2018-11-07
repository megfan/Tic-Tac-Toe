import React from 'react';

export default class ResetGame extends React.Component{
    render(){
        return(
            <button onClick={this.props.reset}>Reset</button>
        )
    }
}