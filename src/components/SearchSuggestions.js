import React from 'react';

const Searchbox =({searchsuggest,searchSuggestions,onRouteChange,routed}) => {
//suggestions rout shows everything
if (routed) {
	return (
		<div className = "pa3 mr2 dib">
		<input className ="mr2"
		type = "search" 
		placeholder="Search City"
		onChange={searchSuggestions}
		onRouteChange={onRouteChange}

		/> 
		
		<button className = "mr2"
		onClick={() =>onRouteChange('mynetwork')}
		>
		My Network</button> 

		<button onClick = {()=> onRouteChange('home')}>
				
				All Network</button> 

		<button 
		onClick={() =>onRouteChange('allsuggestions')}
		>
		All Suggestions</button> 

		</div> 

		)
} else {
	return (
		<div className = "pa3 mr2 dib">
		<input className ="mr2"
		type = "search" 
		placeholder="Search City"
		onChange={searchSuggestions}

		/> 
		
		<button className = "mr2"
		onClick={() =>onRouteChange('mynetwork')}
		>
		My Network</button> 

		<button onClick = {()=> onRouteChange('home')}>
				
				All Network</button> 


		</div> 
		)

	}
}



export default Searchbox;