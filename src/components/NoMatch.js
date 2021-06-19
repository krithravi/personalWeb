import React from 'react';
import '../style.css'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';
import { FaSadCry } from 'react-icons/fa'
import Header from './Header'
function NoMatch(){
	return (
		<div>
			<Header/>
				<div className="box">
					<h1>404: File not found! &nbsp; <FaSadCry /></h1>
					<p>
						Nooooooooooo! It looks you've reached a page that doesn't exist
						or a malformed link.
						<br />
						<br />
						Click <Link to='/'>here</Link> or on my name above
						to head back to the home page.
						<br />
						<br />
						If there's a link that was supposed to lead you here (and you think
						there's something I can do to fix it), feel free to reach
						out to me
						at <a href="mailto:krithravi@utexas.edu">krithravi@utexas.edu</a>!
						I'll be happy to get back to you!!
					</p>
			</div>

		</div>
	);
}

export default NoMatch;
