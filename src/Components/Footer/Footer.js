import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

	render() {
		return (
			<footer>
				<ul class="list-inline">
					<li>
						<a href="https://hn.algolia.com/about">About </a>
					</li>
					<li>
						•
					</li>
					<li>
						<a href="https://hn.algolia.com/help"> Help </a>
					</li>
					<li>
						•
					</li>
					<li>
						<a href="https://hn.algolia.com/api"> API </a>
					</li>
					<li>
						•
					</li>
					<li>
						<a href="https://news.ycombinator.com"> Hacker News </a>
					</li>
					<li>
						•
					</li>
					<li>
						<a href="https://github.com/algolia/hn-search"> Fork/Contribute </a>
					</li>
					<li>
						•
					</li>
					<li>
						<a href="http://status.algolia.com/hn"> Status </a>
					</li>
					<li>
						•
					</li>
					<li>
						<a href="https://hn.algolia.com/cool_apps"> Cool apps </a>
					</li>
					</ul>
			</footer>
		);
	}
}

export default Footer;