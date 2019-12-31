import React from 'react';
import Card1 from './Card1';

const NetworkArray1 = ({networkfilter,handleChange,handleClick}) => {
	const cardComponent1 = networkfilter.map((user,i) => {
		return(
		<Card1 
			key = {networkfilter[i].id}
			name = {networkfilter[i].firstname + ' ' + networkfilter[i].lastname} 
			handleClick ={handleClick}
			
			/>

					)
	})
		return ( 
				<div> 
					
				 {cardComponent1}

					
				</div> 
			)
}

export default NetworkArray1;