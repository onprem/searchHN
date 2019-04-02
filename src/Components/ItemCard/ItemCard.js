import React, { Component } from 'react';
import './ItemCard.css';

class ItemCard extends Component {

	render() {
		return (
			<div className="item" >
				<div class="item-main">
					<div class="item-content-wrapper">
						<div class="item-title-and-infos">
							<h2>
								<a href="http://www.bbc.com/news/uk-43396008">Stephen Hawking has died</a>
							</h2>
							<ul class="item-infos list-inline">
								<li bo-show="hit.points">
									<i class="icon-heart"></i>
									<a title="See original post on HN" href="https://news.ycombinator.com/item?id=16582136">
										<span class="date">6015 points</span>
									</a>
								</li>
								<li>
									<i class="icon-head"></i>
									<a title="See Cogito&nbsp;profile" href="https://news.ycombinator.com/user?id=Cogito">
										<span class="author">Cogito</span>
									</a>
								</li>
								<li>
									<i class="icon-clock"></i>
									<a title="2018-03-14T03:50:30.000Z" href="https://news.ycombinator.com/item?id=16582136">
										<span class="date ng-binding">a year ago</span>
									</a>
								</li>
								<li>
									<i class="icon-speech-bubble"></i>
									<a title="See original post on HN" href="https://news.ycombinator.com/item?id=16582136">
										<span class="comments">436 comment<span>s</span></span>
									</a>
								</li>
								<li bo-show="hit.url">
									<a class="hit-link" href="http://www.bbc.com/news/uk-43396008">
										(http://www.bbc.com/news/uk-43396008)
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ItemCard;