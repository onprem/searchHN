import React, { Component } from 'react';
import Header from '../Header/Header';
import Section from '../Section/Section';
import Footer from '../Footer/Footer';
import './Home.css';

class Home extends Component {

	render() {
		return (
			<div className="home-container">
				<Header />
				<Section />
				<Footer />
			</div>
		);
	}
}

export default Home;