import React from 'react';

export default class Tile extends React.Component {
    tileClick(props){
        props.updateBoard(props.loc, props.currentTurn);
    }

    render(){
        return(
            <div className={'tile'} onClick={() => this.tileClick(this.props)}>
            <p>{this.props.value}</p>
            </div>
        )
    }
}