import React, {Component} from 'react';
import GameMessage from './GameMessage';
import UserAction from './UserAction';
import '../styles/bootstrap.litera.min.css';
import '../styles/index.css';

class App extends Component{

    render(){
        return(
            <div>
                <GameMessage></GameMessage> 
                <UserAction />
            </div>
        );
    }
}

export default App;