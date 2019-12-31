import React from 'react';

const Searchbox =({searchfield,searchChange,onRouteChange,routed,fetchData}) => {
if (routed) {
	return (
		<div className = "pa3 mr2 dib">
		<input className ="mr2"
		type = "search" 
		placeholder="Search Last Name"
		onChange={searchChange}
		/> 
		
		<button className = "mybuttons"
		onClick={() => {
            fetchData();
            onRouteChange("mynetwork");
          }}
		>My Network</button> 
		
		
		<button className = "mybuttons"
		onClick={() => {
			console.log("i'm clicked")
            fetchData();
            onRouteChange("allsuggestions");
          }}
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

		<button className = "mybuttons"
		onClick={() => {
            fetchData();
            onRouteChange("home");
          }}>All Network</button> 
				
		<button className = "mybuttons"
		onClick={() => {
            fetchData();
            onRouteChange("allsuggestions");
              }}
		>All Suggestions</button> 
			</div>
		)		
}

}

export default Searchbox;