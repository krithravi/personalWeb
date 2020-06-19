import React from 'react';
import '../style.css'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'
var title="Krithika Ravishankar";

const imgstyle = {
	maxWidth: "100%",
};
const buttonstyle = {
	width: "4%",
	borderRadius: "40%",
	marginLeft: "1%",
	marginTop: "0"
}
function Header(){
	return (
		<div>
				<Link to="/">
					<button style={buttonstyle} className="button">
						<img style={imgstyle} src={ require('./filledtransparentfrog.png') } />
					</button>
				</Link>
				<h1>{title}</h1>
			<hr />
		</div>
	);
}

export default Header;
