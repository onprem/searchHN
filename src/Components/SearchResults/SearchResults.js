import React, { Component } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './SearchResults.css';

class SearchResults extends Component {

	render() {
		return (
			<section className="search-results">
				<ItemCard />
			</section>
		);
	}
}

export default SearchResults;