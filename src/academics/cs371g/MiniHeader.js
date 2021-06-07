import React from 'react';
import '../../style.css'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';

const somestyling = {
	top: "70%",
	marginLeft: "47%",
	padding: "5px",
	maxWidth: "10%",
};

function MiniHeader(title){
	return(
		<div>
			<Link to="/academics/cs371g">
				<button style={somestyling} className="button home">
				 <span>CS371g Summer 2021: Krithika Ravishankar</span>
				</button>
			</Link>
			<h2 style={{textAlign: 'center'}}>{title}</h2>
		</div>
	)
}

export default MiniHeader;
