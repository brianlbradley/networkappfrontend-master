import React from 'react';

const Table = (props) => {

	return(
		<table className = 'bg-light-green dib br3 pa3 ma2 grow  shadow-5'>
		<tbody>
		<tr>
			<th>Name</th>
			<th>Location</th>
			<th>Restaurant</th>
			<th>Skills</th>
			<th>Hobbies</th>
			
		</tr>
		<tr>
			<td>{props.name}</td>
		 	<td>{props.location}</td>
		 	<td>{props.restaurants}</td> 
		 	<td>{props.skills}</td>
		 	<td>{props.hobbies}</td>
		 	
		 	
		 </tr>
		 </tbody>
		 </table>

		)
}

export default Table;