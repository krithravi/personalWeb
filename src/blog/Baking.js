import React from 'react'
import '../style.css'
import Header from '../components/Header'
import MiniHeader from './MiniHeader'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';


function Baking() {
	return (
		<div>
			<Header />
			{MiniHeader("Baking")}
			<div class="box">
				<h3>Background</h3>
				<p>
					Much like the majority of the population, I entered
					the baking and bread-making phases of the pandemic.
				</p>
			</div>
		</div>
	)
}

export default Baking;
