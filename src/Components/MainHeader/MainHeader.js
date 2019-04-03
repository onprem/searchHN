import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MainHeader.css';

class MainHeader extends Component {

	render() {
		let type, sortt, time;
		const { searchSettings, searchResults } = this.props;
		const { articleType, sort, timeRange } = searchSettings;
		const { timeTaken, page, number } = searchResults;
		
		if (articleType === 'all') type = 'All';
		else if (articleType === 'story') type = 'Stories';
		else type = 'Comments';

		if (sort === 'byPopularity') sortt = 'Popularity';
		else sortt = 'Date';

		if (timeRange === 'all' ) time = 'All time';
		else if (timeRange === 'last24h') time = 'Last 24h';
		else if (timeRange === 'pastWeek') time = 'Past Week';
		else if (timeRange === 'pastMonth') time = 'Past Month';
		else time = 'Past Year';
		// const { name, email, isLoggedIn } = user;
		//console.log(this.props);
		return (
				<header>
					<span className="filter-label">Search</span>
					<div className="type-dropdown wrap-dd-select" dropdown-item-label="text" dropdown-model="ddTypeSelected" dropdown-onchange="selectType(selected)" dropdown-select="ddSelectType">
						<span className="selected">{ type }</span>
						<ul className="dropdown">
							<li className="dropdown-item" dropdown-select-item="item" dropdown-item-label="labelField">
								<i className="dropdown-item">
									All
								</i>
							</li>
							<li className="dropdown-item" dropdown-select-item="item" dropdown-item-label="labelField">
								<i className="dropdown-item">
									Stories
								</i>
							</li>
							<li className="dropdown-item" dropdown-select-item="item" dropdown-item-label="labelField">
								<i className="dropdown-item">
									Comments
								</i>
							</li>
						</ul>
					</div>
					<span className="filter-label">by</span>
					<div className="type-dropdown wrap-dd-select" dropdown-item-label="text" dropdown-model="ddSortSelected" dropdown-onchange="sortBy(selected.value)" dropdown-select="ddSelectSort">
						<span className="selected">
							{ sortt }
						</span>
						<ul className="dropdown">
							<li className="dropdown-item" dropdown-select-item="item" dropdown-item-label="labelField">
								<i className="dropdown-item">
									Popularity
								</i>
							</li>
							<li className="dropdown-item" dropdown-select-item="item" dropdown-item-label="labelField">
								<i className="dropdown-item">
									Date
								</i>
							</li>
						</ul>
					</div>
					<span className="filter-label">for</span>
					<div className="type-dropdown wrap-dd-select" dropdown-item-label="text" dropdown-model="ddDateSelected" dropdown-onchange="selectDate(selected.value)" dropdown-select="ddSelectDate">
						<span className="selected">
							{ time }
						</span>
						<ul className="dropdown">
							<li className="dropdown-item" dropdown-select-item="item" dropdown-item-label="labelField">
								<i className="dropdown-item">
									All time
								</i>
							</li>
							<li className="dropdown-item" dropdown-select-item="item" dropdown-item-label="labelField">
								<i className="dropdown-item">
									Last 24h
								</i>
							</li>
							<li className="dropdown-item" dropdown-select-item="item" dropdown-item-label="labelField">
								<i className="dropdown-item">
									Past Week
								</i>
							</li>
							<li className="dropdown-item" dropdown-select-item="item" dropdown-item-label="labelField">
								<i className="dropdown-item">
									Past Month
								</i>
							</li>
							<li className="dropdown-item" dropdown-select-item="item" dropdown-item-label="labelField">
								<i className="dropdown-item">
									Past Year
								</i>
							</li>
						</ul>
					</div>
				
					<ul className="list-inline search-infos">
						<li>							
							{(number || timeTaken)?
								(page)?
									`Page ${page+1} of ${number.toLocaleString('en')} results (${timeTaken/1000} seconds)`
									:
									`${number.toLocaleString('en')} results (${timeTaken/1000} seconds)`	
								:
								null
							}
							{//17,895,549 results ({timeTaken/1000} seconds)
							}
						</li>
						<i className="placeholder">
						</i>
					</ul>
				</header>
		);
	}
}
function mapStateToProps(state) {
  const { searchSettings, searchResults } = state
  return {
  	searchResults,
    searchSettings
  }
}

export default connect(mapStateToProps)(MainHeader);