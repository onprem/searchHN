import React, { Component }from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';

import Home from './Components/Home/Home';

class App extends Component {
  render() {
    return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
		</div>
    );
  }
}

export default App;
