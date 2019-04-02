import React, { Component } from 'react';
import './MainHeader.css';

class MainHeader extends Component {

	render() {
		return (
				<header>
					<span class="filter-label">Search</span>
					<div class="type-dropdown wrap-dd-select" dropdown-item-label="text" dropdown-model="ddTypeSelected" dropdown-onchange="selectType(selected)" dropdown-select="ddSelectType">
						<span class="selected">All</span>
						<ul class="dropdown">
							<li class="dropdown-item" dropdown-select-item="item" dropdown-item-label="labelField">
								<i class="dropdown-item">
									All
								</i>
							</li>
							<li class="dropdown-item" dropdown-select-item="item" dropdown-item-label="labelField">
								<i class="dropdown-item">
									Stories
								</i>
							</li>
							<li class="dropdown-item" dropdown-select-item="item" dropdown-item-label="labelField">
								<i class="dropdown-item">
									Comments
								</i>
							</li>
						</ul>
					</div>
					<span class="filter-label">by</span>
					<div class="type-dropdown wrap-dd-select" dropdown-item-label="text" dropdown-model="ddSortSelected" dropdown-onchange="sortBy(selected.value)" dropdown-select="ddSelectSort">
						<span class="selected">
							Popularity
						</span>
						<ul class="dropdown">
							<li class="dropdown-item" dropdown-select-item="item" dropdown-item-label="labelField">
								<i class="dropdown-item">
									Popularity
								</i>
							</li>
							<li class="dropdown-item" dropdown-select-item="item" dropdown-item-label="labelField">
								<i class="dropdown-item">
									Date
								</i>
							</li>
						</ul>
					</div>
					<span class="filter-label">for</span>
					<div class="type-dropdown wrap-dd-select" dropdown-item-label="text" dropdown-model="ddDateSelected" dropdown-onchange="selectDate(selected.value)" dropdown-select="ddSelectDate">
						<span class="selected">
							All time
						</span>
						<ul class="dropdown">
							<li class="dropdown-item" dropdown-select-item="item" dropdown-item-label="labelField">
								<i class="dropdown-item">
									All time
								</i>
							</li>
							<li class="dropdown-item" dropdown-select-item="item" dropdown-item-label="labelField">
								<i class="dropdown-item">
									Last 24h
								</i>
							</li>
							<li class="dropdown-item" dropdown-select-item="item" dropdown-item-label="labelField">
								<i class="dropdown-item">
									Past Week
								</i>
							</li>
							<li class="dropdown-item" dropdown-select-item="item" dropdown-item-label="labelField">
								<i class="dropdown-item">
									Past Month
								</i>
							</li>
							<li class="dropdown-item" dropdown-select-item="item" dropdown-item-label="labelField">
								<i class="dropdown-item">
									Past Year
								</i>
							</li>
							<li class="dropdown-item" dropdown-select-item="item" dropdown-item-label="labelField">
								<i class="dropdown-item">
									Custom range
								</i>
							</li>
						</ul>
					</div>
				
					<ul class="list-inline search-infos">
						<li>
							<span>Page 2 of </span>
							17,895,549 results (0.005 seconds)
						</li>
						<i class="placeholder">
						</i>
					</ul>
				</header>
		);
	}
}

export default MainHeader;