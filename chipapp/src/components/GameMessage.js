import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setGameMessage} from '../actions'

class GameMessage extends Component{
    render(){
        console.log('this.props', this.props)

        return(
            <div>
                <h2 onClick={()=> this.props.setGameMessage("New Message here")}> GameMessage Here</h2>
                 <h2>{this.props.gameMessage.message}</h2> 
            </div>

        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {setGameMessage})(GameMessage);