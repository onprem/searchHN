import React from 'react';
import './ItemCard.css';

export const ItemCard = ({title, id, points, author, comments, url, date, comment, commentTitle, commentNum, storyText, type}) => {
	let hrefPoint = `https://news.ycombinator.com/item?id=${id}`;
	let hrefUser = `https://news.ycombinator.com/user?id=${author}`;
	let profileTitle= `See ${author} profile`;
	let calcDate = (date1,date2) => {
	    var diff = Math.floor(date1.getTime() - date2.getTime());
	    var day = 1000 * 60 * 60 * 24;
	    var hour = 1000 * 60 * 60;
	    var minute = 1000 * 60 * 60;
	    var second = 1000 * 60;

	    var seconds = Math.floor(diff/second);
	    var minutes = Math.floor(diff/minute);
	    var hours = Math.floor(diff/hour);
	    var days = Math.floor(diff/day);
	    var months = Math.floor(days/31);
	    var years = Math.floor(months/12);
	    var message = '';
	    if(years>0)
	    	message= `${years} years ago`;
	    else if(months>0)
	    	message= `${months} months ago`;
	    else if(days>0)
	    	message= `${days} days ago`;
	    else if(hours>0)
	    	message= `${hours} hours ago`;
	    else if(minutes>0)
	    	message= `${minutes} minutes ago`;
	    else
	    	message= `${seconds} seconds ago`;

	    return message
    }
	let diff = calcDate(new Date(), new Date(date*1000))
	if (comment == null) {
		return (
			<div className="item" >
				<div className="item-main">
					<div className="item-content-wrapper">
						<div className="item-title-and-infos">
							<h2>
								<a href={url}>{title}</a>
							</h2>
							<ul className="item-infos list-inline">
								<li bo-show="hit.points">
									<a title="See original post on HN" href={hrefPoint}>
										<span className="date">{points} points</span>
									</a>
								</li>
								<li>
									<a title={profileTitle} href={hrefUser}>
										<span className="author">{author}</span>
									</a>
								</li>
								<li>
									<a title={new Date(date*1000)} href={hrefPoint}>
										<span className="date ng-binding">{diff}</span>
									</a>
								</li>
								<li>
									<a title="See original post on HN" href={hrefPoint}>
										<span className="comments">{commentNum} comment<span>s</span></span>
									</a>
								</li>
								<li bo-show="hit.url">
									<a className="hit-link" href={url}>
										({url})
									</a>
								</li>
							</ul>
						</div>
						{(type==='all')?
							<div className='text-container' dangerouslySetInnerHTML={{__html: storyText}}></div>
							:
							null
						}
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="item" >
				<div className="item-main">
					<div className="item-content-wrapper">
						<div className="item-title-and-infos">
							<h2>
								<a href={url}>{commentTitle}</a>
							</h2>
							<ul className="item-infos list-inline">
								<li bo-show="hit.points">
									<a title="See original post on HN" href={hrefPoint}>
										<span className="date">{points} points</span>
									</a>
								</li>
								<li>
									<a title={profileTitle} href={hrefUser}>
										<span className="author">{author}</span>
									</a>
								</li>
								<li>
									<a title={new Date(date*1000)} href={hrefPoint}>
										<span className="date ng-binding">{diff}</span>
									</a>
								</li>
								<li>
									<a title="See original post on HN" href={hrefPoint}>
										<span className="comments">{commentNum} comment<span>s</span></span>
									</a>
								</li>
								<li bo-show="hit.url">
									<a className="hit-link" href={url}>
										({url})
									</a>
								</li>
							</ul>
						</div>
						<div className="text-container" dangerouslySetInnerHTML={{__html: comment}}>
						</div>
					</div>
				</div>
			</div>
		);
	}
}