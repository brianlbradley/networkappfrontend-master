import React from 'react';
import Table from './Table';

const SuggestArray = ({items}) => {
	const tableComponent = items.map((user,i) => {
		return(
		<Table 
			key = {i}
			location = {items[i].location} 
			restaurants = {items[i].restaurant}
			hobbies= {items[i].hobbies}
			skills={items[i].skills}
			name = {items[i].name}
			id={items[i].id}

			/>

					)
	})
		return ( 
				<div> 
					
				 {tableComponent}

					
				</div> 
			)
}

export default SuggestArray;