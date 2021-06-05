import React from 'react';
import '../style.css'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';
import Contact from './Contact'
var title="Krithika";

const imgstyle = {
	maxWidth: "100%",
};
const buttonstyle = {
	width: "4%",
	borderRadius: "35%",
	marginLeft: "1%",
	marginTop: "0",
	float: "left",
}

const titlestyle = {
	color: "#faf",
	float: "center",
	textAlign: "center"
}

function Header(){
	return (
		<div className="yee">

				<Link to="/" style={{textDecoration:"none"}}>
					<h1>
						<div class="eqi-container">
							<button className="button" style={buttonstyle}>
								<img style={imgstyle} src={ require('./filledtransparentfrog.png') } />
							</button>
							<div>{title}</div>
							<Contact />
						</div>

					</h1>
				</Link>
				<hr/>
		</div>
	);
}

export default Header;
