import React, { Component }from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';

import { connect } from 'react-redux'
import {
  // changeSearch,
  // changeSort,
  // changeTime,
  // changeType,
  // changePage,
  fetchArticles
} from './actions'

class App extends Component {
	// constructor(props) {
	// 	super(props)
	// 	//this.handleChange = this.handleChange.bind(this)
	// 	//this.handleRefreshClick = this.handleRefreshClick.bind(this)
	// }
	componentDidMount() {
		const { dispatch, searchSettings, searchResults } = this.props;
		const { query, articleType, timeRange, sort } = searchSettings;
		const { page } = searchResults;
		dispatch(fetchArticles(query, articleType, timeRange, page, sort))
	}

	// componentDidUpdate(prevProps) {
	// 	if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
	// 		const { searchSettings, dispatch, searchResults } = this.props;
	// 		const { query, articleType, timeRange, sort } = searchSettings;
	// 		const { page } = searchResults;
	// 		dispatch(fetchArticles(query, articleType, timeRange, page, sort))
	// 	}
	// }

	// handleChange(nextSubreddit) {
	// 	this.props.dispatch(selectSubreddit(nextSubreddit))
	// 	this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
	// }

	// handleRefreshClick(e) {
	// 	e.preventDefault()

	// 	const { searchSettings, user, searchResults, dispatch } = this.props;
	// 	const { query, articleType, timeRange, sort } = searchSettings;
	// 	const { page } = searchResults;
	// 	dispatch(fetchArticles(query, articleType, timeRange, page, sort))
	// }

	render() {
		const { searchSettings, user, searchResults } = this.props;
		const { query, articleType, timeRange, sort } = searchSettings
		const { data, number, timeTaken, page, totalPages } = searchResults

	  	if(window.location.pathname==='/')
			window.location.href=(`/query=${query}/sort=${sort}/page=${page}/dateRange=${timeRange}/type=${articleType}`);
		return (
			<div className="App">
				<Switch>
					<Route path="/query=:query?/sort=:sort/page=:page/dateRange=:dateRange/type=:type" render={(props) => {
						return(
							<Home {...props}
								searchSettings={searchSettings}
								searchResults={searchResults}
								//updateSearchStats={this.updateSearchStats}
								//updateSearchSettings={this.updateSearchSettings}
								//initialPage={this.state.searchSettings.page}
								//totalPages={this.state.searchRes.totalPage}
								//updateSearchPage={this.updateSearchPage}
							/>
						)
					}}
					/>
				</Switch>
			</div>
		);
	}
}
function mapStateToProps(state) {
  const { user, searchSettings, searchResults } = state
  return {
  	searchSettings,
    user,
    searchResults
  }
}

export default connect(mapStateToProps)(App)