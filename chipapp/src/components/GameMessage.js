import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setGameMessage} from '../actions'
import openSocket from 'socket.io-client';

const  socket = openSocket('http://localhost:8000');

class GameMessage extends Component{
    userActionCheck(cb) {
        socket.on('gameMessage', message => cb(message));
        socket.emit('call');
    }

    render(){
        console.log('this.props', this.props)

        return(
            <div>
                <h2 onClick={() => this.userActionCheck((message) => this.props.setGameMessage(message))}> CHECK BUTTON 2</h2>
                 <h2>{this.props.gameMessage.message}</h2> 
            </div>

        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {setGameMessage})(GameMessage);