import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setGameMessage} from '../actions'
import openSocket from 'socket.io-client';

const  socket = openSocket('http://localhost:8000');

class UserAction extends Component{
    userActionCheck(cb) {
        socket.emit('call');
    }

    userActionFold(cb) {
        socket.emit('fold');
    }

    userActionRaise(cb) {
        socket.emit('raise');
    }

    subscribeToMessage(cb) {
        socket.on('gameMessage', message => cb(message) );
    }

    constructor(props){
        super(props);
        this.subscribeToMessage((message)=> this.props.setGameMessage(message));
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <div className="btn btn-primary btn-action" onClick={() => this.userActionCheck()}>CHECK </div>
                    </div>
                    <div className="col-6">
                        <div className="btn btn-primary btn-action" onClick={() => this.userActionFold()}>FOLD </div>
                    </div>
                    <div className="col-6">
                        <div className="btn btn-primary btn-action" onClick={() => this.userActionRaise()}>ALL IN </div>
                    </div>
                </div>
                
            </div>
            
        )
    }
}

export default connect(null, {setGameMessage})(UserAction);