import React, { Component } from 'react';
import Header from '../Header/Header';
import Section from '../Section/Section';
import Footer from '../Footer/Footer';
import './Home.css';
import Modal from 'react-awesome-modal';
import { connect } from 'react-redux'
import {
  userLogin
} from '../../actions'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visibleModal: false
		}
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
	                	<label for="input_name" class="inp">
							<input type="text" name="name" className="inputBox" placeholder="" id="input_name" />
							<span class="label">Name</span>
							<span class="border"></span>
						</label>
						<label for="input_email" class="inp">
	                    	<input type="text" name="email" className="inputBox" placeholder="" id="input_email" />
	                    	<span class="label">Email</span>
							<span class="border"></span>
						</label>
						<label for="input_pass" class="inp">
	                    	<input type="password" name="password" className="inputBox" placeholder="" id="input_pass" />
	                    	<span class="label">Password</span>
							<span class="border"></span>
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
		setLogin: (name, email) => dispatch(userLogin(name, email))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);