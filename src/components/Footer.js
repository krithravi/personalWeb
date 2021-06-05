import React from 'react';
import '../style.css'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';
import { FaCopyright } from 'react-icons/fa'

function Footer(){
	return (
		<div>
			<p style={{fontSize:"14px"}}>
				Copyright <FaCopyright /> 2021 Krithika Ravishankar.
					All images property of Krithika Ravishankar.
			</p>
		</div>
	);
}

export default Footer;
