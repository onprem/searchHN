import React, { Component } from 'react';
import Header from '../Header/Header';
import Section from '../Section/Section';
import './Home.css';

class Home extends Component {

	constructor(){
		super();
		this.state={
		}
	}
	render() {
		return (
			<div className="home-container">
				<Header />
				<Section />
			</div>
		);
	}
}

export default Home;