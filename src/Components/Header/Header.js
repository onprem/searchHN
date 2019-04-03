import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
// import Header from '../Header/Header';
// import Section from '../Section/Section';
import logo from '../../assets/logo-hn-search.png';
import algoliaLogo from '../../assets/algolia-logo-white.svg';
import './Header.css';
import {
  changeSearch,
  fetchArticles
} from '../../actions'

class Header extends Component {
	handleSearchChange = (event) => {
		this.props.onSearchChange(event);
		const { query, articleType, timeRange, sort } = this.props.searchSettings;
		const { page } = this.props.searchResults;
		this.props.getArticles(query, articleType, timeRange, page, sort);
	}
	render() {
		const { user,  searchResults } = this.props;
		const { name, isLoggedIn } = user;
		const { query } = searchResults;
		return (
			<header className="page-header">
				<div className="logo-wrapper">
					<Link className='logo' to='/?'>
						<img src={logo} alt='logo'/>
						{(!isLoggedIn)?
							<div className="logo-name">
								Search
								<br />
								Hacker News
							</div>
						:
							<div className="logo-name">
								{ name }
							</div>
						}
					</Link>
				</div>
				<div className="search-wrapper">
					<div className="input-item-wrapper">
						<i className="icon-search">
						</i>
						<input onChange={this.handleSearchChange} type="search" placeholder="Search stories by title, url or author" autoComplete="off" autoCapitalize="off" spellCheck="false" autoCorrect="off" autoFocus />
					</div>
					<span className="powered-by">
						by 
						<a href="https://www.algolia.com/?utm_source=hn_search&amp;utm_medium=link&amp;utm_term=logo&amp;utm_campaign=hn_algolia" title="Realtime Search Engine">
							<img src={algoliaLogo} alt="Algolia logo white" width="60" height="15" />
						</a>
					</span>
				</div>
				<div className='account-wrapper'>
					<i className="icon-head"></i>
				</div>
			</header>
		);
	}
}
function mapStateToProps(state) {
  const { user, searchSettings, searchResults } = state
  return {
  	user,
  	searchResults,
    searchSettings
  }
}
const mapDispatchToProps = dispatch =>{
	return{
		onSearchChange: (event) => dispatch(changeSearch(event.target.value)),
		getArticles: (query, articleType, timeRange, page, sort) => dispatch(fetchArticles(query, articleType, timeRange, page, sort))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);