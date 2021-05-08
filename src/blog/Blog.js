import React from 'react'
import '../style.css'
import Header from '../components/Header'
import MiniHeader from './MiniHeader'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';
import listwrite from './listwrite.json'

function BlogIntro() {
	return (
		<div>
			<Header />
			<div class="box">
			<p>
			Hi y'all!
			<br />
			<br />
			Very, very similar to <Link to="/writeup">my tech-related writeups</Link>,
			this blog is about other hobbies and things I've tried out. This'll also
			mainly be about things I've learned from some combination of trial-and-error
			and others' advice.
			</p>
			<h3></h3>
			</div>
		</div>
	)
}

class Makebutton extends React.Component {

	render (){
		return (
				<div>
					<div class="box" style={{color: "green", border: '1px solid #0cf2b4'}}>

						<Link to={this.props.path}>
							<span style={{color: '#0cf2b4', fontSize: 28}}>{this.props.title}</span>
						</Link>
						<br />
						<span style={{fontSize: 18}}>{this.props.date}</span>
						<p>
							{this.props.desc}
						</p>
					</div>
					<br />
				</div>
		);
	}
}

function Blog (){
	return (
		<div>
			<BlogIntro />
			<h2 style={{textAlign: 'center'}}>{"Write-Ups"}</h2>
			{ listwrite.map (item => <Makebutton title={item.title} path={item.path} date={item.date} desc={item.desc} /> ) }
		</div>
	)
}
export default Blog;
