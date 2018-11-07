import React from 'react';
import ReactDOM from 'react-dom';

import ResetGame from './ResetGame.jsx';
import Announcement from './Announcement.jsx';
import Tile from './Tile.jsx'

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            playerOne:"X",
            plaerTwo:"O",
            currentTurn: "X",
            board: [
                "","","","","","","","",""
            ]
        }
    }
    handelClick(index){
        if(this.state.board[index] === ""){
            this.state.board[index] = this.state.currentTurn
            this.setState({
                board:this.state.board,
                currentTurn: this.state.currentTurn === this.state.playerOne ? this.state.plaerTwo : this.state.playerOne,
            })
        }
        
        console.log(index);
    }
    updateBoard(loc,player){

    }

    resetBoard(){
        this.setState({
            board: ["","","","","","","","",""],
            currentTurn: "X",
        })
    }

    render(){
        return(
            <div className="container">
                  <div className="header">
                  Tic Tac Toe Game
                  </div>
                  <div className="content">
                    <nav className="sidebar">
                        <Announcement />
                        <ResetGame reset={this.resetBoard.bind(this)}/>
                        <Tile />
                    </nav>
                    <main className="board">
                    {this.state.board.map((cell, index) => {
                        return (
                            <Tile 
                                key={index}
                                loc={index}
                                cell={cell}
                                updateBoard={this.updateBoard.bind(this)}
                                currentTurn={this.state.currentTurn}
                                onClick={() => this.handelClick(index)}/>
                        )})}
                    </main>
                  </div>
            </div>
             
        )
    }
}

