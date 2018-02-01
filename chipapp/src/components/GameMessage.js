import React, {Component} from 'react';
import {connect} from 'react-redux';

class GameMessage extends Component{

    render(){
        var gameMessage = 'This is the game message board';
        if(this.props.gameMessage.message){
            gameMessage = this.props.gameMessage.message;
        }
        return(
            <div className="message">
                <div className="container message-item">
                    <span>{gameMessage}</span> 
                </div>
            </div> 
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, null)(GameMessage);