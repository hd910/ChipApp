import React, {Component} from 'react';
import GameMessage from './GameMessage';
import { subscribeToTimer } from '../api';

class App extends Component{
    constructor(props){
        super(props);
        subscribeToTimer((err, timestamp) => this.setState({ 
            timestamp 
        }));
    }
    state = {
        timestamp: 'no timestamp yet'
    };
    render(){
        return(
            <div>
                <div className="container">
                    {/* <GameMessage></GameMessage> */}
                    This is the timer value: {this.state.timestamp}
                </div>
            </div>
        );
    }
}

export default App;