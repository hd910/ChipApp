import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setGameMessage} from '../actions'
import openSocket from 'socket.io-client';

const  socket = openSocket('http://localhost:8000');

class UserAction extends Component{
    userActionCheck(cb) {
        socket.on('gameMessage', message => cb(message));
        socket.emit('call');
    }

    userActionFold(cb) {
        socket.on('gameMessage', message => cb(message));
        socket.emit('fold');
    }

    userActionRaise(cb) {
        socket.on('gameMessage', message => cb(message));
        socket.emit('raise');
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <div className="btn btn-primary btn-action" onClick={() => this.userActionCheck((message) => this.props.setGameMessage(message))}>CHECK </div>
                    </div>
                    <div className="col-6">
                        <div className="btn btn-primary btn-action" onClick={() => this.userActionFold((message) => this.props.setGameMessage(message))}>FOLD </div>
                    </div>
                    <div className="col-6">
                        <div className="btn btn-primary btn-action" onClick={() => this.userActionRaise((message) => this.props.setGameMessage(message))}>ALL IN </div>
                    </div>
                </div>
                
            </div>
            
        )
    }
}

export default connect(null, {setGameMessage})(UserAction);