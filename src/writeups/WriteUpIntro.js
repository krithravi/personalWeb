import React from 'react';
import '../style.css'
import Header from '../components/Header'

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
					sanity. However, if these help you, that's great!
					<br></br>
					<br></br>
					My dotfiles and these write-ups are a compilation of various things
					I've found online (typically from wiki sites, StackExchange, and
					other folks' GitHub pages).
					<br></br>
					<br></br>
					These are my current computers:
					<ul>
						<li>&Eacute;owyn: Dell XPS 15 9570, with Ubuntu 18.04 </li>
						<li>Pippin: Raspberry Pi 3B+, with Arch Linux ARM and Debian </li>
					</ul>
				</p>
			</div>
		</div>
	);
}

export default WriteUpIntro;
