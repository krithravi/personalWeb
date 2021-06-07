import React from 'react'
import '../style.css'
import Header from '../components/Header'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';

function Academics (){
	return (
		<div>
			<Header />
				<div className="box">
					<p>
					Hello, hello! Here are some blogs I've made for my courses!
					Here's one I did
					for <Link to="/academics/cs371g">CS371g</Link> (Generic
						Programming and the STL).
					</p>
				</div>
		</div>
	)
}
export default Academics;
