import React from 'react';
import '../style.css'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';
var title="krithika";

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
			<header>
				<Link to="/" style={{textDecoration:"none"}}>
					<button style={buttonstyle} className="button">
						<img style={imgstyle} src={ require('./filledtransparentfrog.png') } />
					</button>
					<h1>
						{title}
					</h1>
				</Link>
			<hr />
			</header>
		</div>
	);
}

export default Header;
