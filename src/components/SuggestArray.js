import React from 'react';
import Table from './Table';

const SuggestArray = ({suggest}) => {
	const tableComponent = suggest.map((user,i) => {
		return(
		<Table 
			key = {i}
			location = {suggest[i].location} 
			restaurants = {suggest[i].restaurant}
			resdescription= {suggest[i].resdescription}
			attractions={suggest[i].attractions}
			attdescription = {suggest[i].attdescription}
			id={suggest[i].id}

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