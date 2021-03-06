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
					Howdy!
					<br></br>
					<br></br>
					These are a bunch of write-ups about my installations and issues
					I've encountered.
					This is just documentation for my own sanity, but if these do help you,
					that's fantastic!
					<br></br>
					<br></br>
					My <a href="https://github.com/krithravi/dotfiles">dotfiles</a> and these write-ups
					are a compilation of things
					I've found online, typically from the ArchWikis, Reddit, StackExchange, and
					other folks' GitHub pages. Here are some <Link to="/writeup/preferences">standard things I do for setups</Link>.
					<br></br>
					<br></br>
					These are my current set ups:
					<ul>
						<li>&Eacute;owyn: Dell XPS 15 9570, with Arch Linux</li>
						<li>Pippin: Raspberry Pi 3B+, with Raspbian Lite </li>
					</ul>
				</p>
			</div>
		</div>
	);
}

export default WriteUpIntro;
