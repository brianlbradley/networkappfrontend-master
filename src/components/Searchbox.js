import React from 'react';

const Searchbox =({searchfield,searchChange,onRouteChange,routed}) => {
if (routed) {
	return (
		<div className = "pa3 mr2 dib">
		<input className ="mr2"
		type = "search" 
		placeholder="Search Last Name"
		onChange={searchChange}

		/> 
		
		<button className = "mr2"
		onClick={() =>onRouteChange('mynetwork')}
		>
		My Network</button> 
		<button className = "mr2"
		onClick={() =>onRouteChange('allsuggestions')}
		>All Suggestions</button> 
		</div>
)
	}else {
		return (
		
		<div className = "pa3 mr2 dib">
		<input className ="mr2"
		type = "search" 
		placeholder="Search Last Name"
		onChange={searchChange}

		/> 
		
		<button className = "mr2"
		onClick = {()=> onRouteChange('home')}>All Network</button> 
				

		<button className = "mr2"
		onClick={() =>onRouteChange('allsuggestions')}
		>All Suggestions</button> 
			</div>
		)		
}

}

export default Searchbox;