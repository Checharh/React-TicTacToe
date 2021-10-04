import React from 'react'
import './App.css';
// import {Square} from './components'
// import {Board} from './components'
import {Game} from './components'

const App =()=> {

    return (
    <>
    {/* <select value={this.state.userName} onChange={e => this.setState({ userName: e.target.value })}>
      <option value="Dan">Dan</option>
      <option value="Sophie">Sophie</option>
      <option value="Sunil">Sunil</option>
    </select> */}

    <div className="App">
      <Game />
    </div>
    </>
    )
}

export default App;
