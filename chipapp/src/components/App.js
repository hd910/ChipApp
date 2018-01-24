import React, {Component} from 'react';
import GameMessage from './GameMessage';

class App extends Component{
    render(){
        return(
            <div>
                {/* <GameMessage /> */}
                <div className="container">
                    <GameMessage></GameMessage>
                    
                </div>
            </div>
        );
    }
}

export default App;