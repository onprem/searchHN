import React, { Component } from 'react';
// import Header from '../Header/Header';
import Pagination from '../Pagination/Pagination';
import './Section.css';

class Section extends Component {

	render() {
		return (
			<section className="main">
				<Pagination />
			</section>
		);
	}
}

export default Section;