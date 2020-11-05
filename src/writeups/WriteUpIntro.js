import React from 'react';
import '../style.css'
import Header from '../components/Header'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';

function WriteUpIntro(){
	return (
		<div> 
			<Header />
			<div className="box">
				<p> 
					Hi, how's it going?
					<br></br>
					<br></br>
					This is essentially a series of write-ups for various tech issues
					I've encountered. I'm not sure if these will be that helpful for
					you, since this is just documentation for my own
					sanity. However, if these do help, that's fantastic!
					<br></br>
					<br></br>
					My <Link to="/writeup/dotfiles">dotfiles</Link> {' '} and these write-ups are a compilation of various things
					I've found online (typically from wiki sites, StackExchange, and
					other folks' GitHub pages). Here are some <Link to="/writeup/preferences">standard things I do for setups</Link>.
					<br></br>
					<br></br>
					These are my current set ups: 
					<ul>
						<li>&Eacute;owyn: Dell XPS 15 9570, with Debian Buster (Cinnamon desktop)</li>
						<li>Pippin: Raspberry Pi 3B+, with Arch Linux ARM </li>
					</ul>
				</p>
			</div>
		</div>
	);
}

export default WriteUpIntro;
