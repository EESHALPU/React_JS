import React from 'react';
import ReactDOM from 'react-dom';
	import Header from './Header';
	
	const App=()=>{
		return(
		<div>		
    <center>
			<Header/>
			<hr size="10" color="blue" />
			<h1>Thanks for Visiting!----</h1></center>	
      </div>
			
		)
	}
	
	ReactDOM.render(<App/>,document.getElementById('root'));
			