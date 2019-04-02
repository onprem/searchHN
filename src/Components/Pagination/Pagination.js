import React, { Component } from 'react';
// import Header from '../Header/Header';
import ButtonCard from './ButtonCard';
import './Pagination.css';

class Pagination extends Component {

	render() {
		
		const createPagination = () => {
			let buttons = [];
			const currentIndex = 5;
			const lastIndex = 50;
			if ( currentIndex !== 1) {
				buttons.push({
					value: '<i class="icon-rewind"></i>',					
					isActive: false,
					isDisabled: false
				});
			}

			const low = (currentIndex - 4 > 0) ? 4 : currentIndex - 1;
			const high = (currentIndex + 4 <= lastIndex) ? 4 : lastIndex - currentIndex;
			if (currentIndex-low >= 2){
				buttons.push({
					value: 1,					
					isActive: false,
					isDisabled: false
				});
				if (currentIndex-low > 2){
					buttons.push({
						value: '<i class="icon-ellipsis"></i>',					
						isActive: false,
						isDisabled: true
					});
				}
			}
			for (var i = low; i > 0; i--) {
				buttons.push({
					value: currentIndex-i,					
					isActive: false,
					isDisabled: false
				});
			}
			buttons.push({
				value: currentIndex,				
				isActive: true,
				isDisabled: false
			});
			for (i = 0; i < high; i++) {
				buttons.push({
					value: currentIndex+i+1,				
					isActive: false,
					isDisabled: false
				});
			}
			if (lastIndex - currentIndex >= 5) {
				if (lastIndex - currentIndex > 5) {
					buttons.push({
						value: '<i class="icon-ellipsis"></i>',					
						isActive: false,
						isDisabled: true
					});
				}
				
				buttons.push({
					value: lastIndex,					
					isActive: false,
					isDisabled: false
				});
			}
			if ( lastIndex !== currentIndex){
				buttons.push({
					value: '<i class="icon-fast-forward"></i>',					
					isActive: false,
					isDisabled: false
				});
			}
			return buttons;
		}
		const PagiN = ({buttons}) => {
		    const pageComponent = buttons.map((button, i) =>
		        <ButtonCard 
		            key={i}
		            value={button.value}
		            isActive={button.isActive}
		            isDisabled={button.isDisabled}
		            isHidden={button.ishidden}
		        />
		    );
		    return (
		        <ul className="search-pagination">
		        	{pageComponent}
		        </ul>
		    );
		}
		return (
			<PagiN buttons={createPagination()} />
		);
	}
}

export default Pagination;