import React from 'react';

const Table = (props) => {

	return(
		<table className = 'bg-light-green dib br3 pa3 ma2 grow  shadow-5'>
		<tbody>
		<tr>
			<th>Location</th>
			<th>Restaurants</th>
			<th>Description</th>
			<th>Attractions</th>
			<th>Description</th>
		</tr>
		<tr>
		 	<td>{props.location}</td>
		 	<td>{props.restaurants}</td> 
		 	<td>{props.resdescription}</td>
		 	<td>{props.attractions}</td>
		 	<td>{props.attdescription}</td> 
		 	
		 </tr>
		 </tbody>
		 </table>

		)


}



export default Table;