import React from 'react';
import '../style.css'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';
import Contact from './Contact'
var title="KRITHIKA RAVISHANKAR";

function Header(){
	return (
		<div>
					<h1>
						<Link to="/" style={{textDecoration:"none"}}>
							<div style={{color:"#8fccf7"}}>{title}</div>
						</Link>
						<Contact />
					</h1>
		</div>
	);
}

export default Header;
