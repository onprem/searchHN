import React from 'react';

const ButtonCard = ({value, isActive, isDisabled}) => {
	return(
		<li className={(isActive)?"active":""}>
			{(isDisabled)?
				<button disabled dangerouslySetInnerHTML={{__html: value}} ></button>
				:
				<button dangerouslySetInnerHTML={{__html: value}} ></button>
			}
		</li>
	);
}

export default ButtonCard;