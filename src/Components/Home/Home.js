import React, { Component } from 'react';
import Header from '../Header/Header';
import Section from '../Section/Section';
import Footer from '../Footer/Footer';
import './Home.css';
import Modal from 'react-awesome-modal';
import { connect } from 'react-redux'
import {
  userLogin,
  changeSearch,
  changeSort,
  changeType,
  changeTime,
  changePage,
  fetchArticles
} from '../../actions'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visibleModal: false
		}
	}
	componentDidMount(){
		let {sort, dateRange, type, page, query} = this.props.match.params;
		this.props.typeChange(type);
		this.props.sortChange(sort);
		this.props.timeChange(dateRange);
		this.props.pageChange(page);
		if(query === undefined || query === null)
			query='';
		else
			this.props.queryChange(query);
		this.props.getArticles(query, type, dateRange, page, sort);
		document.getElementById("search").value = query;
		window.history.pushState(null, null, `/query=${query}/sort=${sort}/page=${page}/dateRange=${dateRange}/type=${type}`);
	}
	toggleModal = () => {
		//var bool = this.state.visibleModal;
		this.setState({visibleModal: true})
	};
	handleLogin = () => {
		const name = document.getElementById('input_name').value;
		const email = document.getElementById('input_email').value;
		const storage = window.localStorage;
		storage.setItem('name', name);
		storage.setItem('email', email);
		this.props.setLogin(name, email)
		this.setState({visibleModal: false})
	}
	render() {
		return (
			<div className="home-container">
				<Header toggleModal={this.toggleModal} />
				<Section />
				<Footer />
				<Modal 
	                visible={this.state.visibleModal}
	                effect="fadeInDown"
	                onClickAway={() => this.setState({visibleModal: false})}
	            >
	                <div className='login-form'>
	                	<label htmlFor="input_name" className="inp">
							<input type="text" name="name" className="inputBox" placeholder="" id="input_name" />
							<span className="label">Name</span>
							<span className="border"></span>
						</label>
						<label htmlFor="input_email" className="inp">
	                    	<input type="text" name="email" className="inputBox" placeholder="" id="input_email" />
	                    	<span className="label">Email</span>
							<span className="border"></span>
						</label>
						<label htmlFor="input_pass" className="inp">
	                    	<input type="password" name="password" className="inputBox" placeholder="" id="input_pass" />
	                    	<span className="label">Password</span>
							<span className="border"></span>
						</label>
	                    <button type="submit" onClick={this.handleLogin}>Login</button>
	                </div>
	            </Modal>
			</div>
		);
	}
}
function mapStateToProps(state) {
  const { user } = state
  return {
  	user
  }
}
const mapDispatchToProps = dispatch =>{
	return{
		setLogin: (name, email) => dispatch(userLogin(name, email)),
		typeChange: (value) => dispatch(changeType(value)),
		timeChange: (value) => dispatch(changeTime(value)),
		sortChange: (value) => dispatch(changeSort(value)),
		queryChange: (value) => dispatch(changeSearch(value)),
		pageChange: (value) => dispatch(changePage(value)),
		getArticles: (query, articleType, timeRange, page, sort) => dispatch(fetchArticles(query, articleType, timeRange, page, sort))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);