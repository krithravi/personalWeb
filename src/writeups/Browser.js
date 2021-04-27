import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css'
// u gotta use react-router-dom, not just react-router
import Header from '../components/Header'
import MiniHeader from './MiniHeader'
import { FaArrowRight } from 'react-icons/fa';

function Browser(){
	return(
		<div>
			<Header />
			{MiniHeader("Browser Reviews")}
			<div class="box">
				<p>
					I get to sound like one of those Youtubers that test out new products! Fun times. Let's get started.
				</p>
				<h3>The Situation</h3>
					<p>
						I wanted to test something other than the default browser, Firefox.
						Plus, I was kinda bored one evening and did not want to start my homework.
					</p>
				<h3>GNOME Web/Epiphany</h3>
					<p>
						I started out by looking into GNOME Web (aka Epiphany), which is supposed to be
						lightweight and amazing. TL;DR: it wasn’t.
					</p>

					<p>
						First off, install Epiphany by typing in the following commands (this is on Ubuntu):
					</p>
					<pre>
						<div class="realcode">
						sudo add-apt-repository ppa:gnome3-team/gnome3 <br></br>
						sudo apt-get update <br></br>
						sudo apt-get install epiphany-browser
						</div>
					</pre>
					<h4>Pros</h4>
					<p>
						<ul>
								<li>It’s faster than Firefox</li>
								<li>It deals with passwords cleaner in non-private browsing mode</li>
						</ul>
					</p>
					<h4>Cons</h4>
					<p>
						<ul>
								<li>It makes &Eacute;owyn make a high-pitched sound and leads to overheating. I tried recali-
										brating powertop after installation, but that didn’t help any.</li>
								<li>It doesn’t have a “never remember history” option</li>
								<li>Private browsing settings are kinda weird</li>
								<li>Difficult and nonintuitive to customize</li>
						</ul>
					</p>
					<p>
						Overall, I wasn’t really a big fan (no pun intended, but the fans were running a bit too
						much). The main reason why I didn’t go with Epiphany was probably the weird hissing
						sounds my laptop started making. I cleaned up afterwards by getting rid of the repo and
						by uninstalling Epiphany.
					</p>
				<h3>Chromium</h3>
				<p>
					I installed and used Chromium for the better part of 10 minutes. This (obviously) had
					the same look and feel as Chrome, but I still wasn’t a big fan of its RAM consumption and
					lack of a PDF viewer (which I figured was super standard, but I guess not). I uninstalled
					Chromium and moved on with life.
				</p>
				<h3>Tor/Onion Browser</h3>
					<p>
						I heard about Tor through the DuckDuckGo newsletter (which gives the average human a
						pretty decent intro to privacy).
						I'd heard fairly good things about the Onion Browser, that it would give the user more
						privacy and that it was FOSS.
					</p>
					<p>
						Yeah, I tried to make it my default browser, but I ran into
						one fundamental issue: it was far too slow for me. The performance drawback was a bit too
						much to bear, so I moved on. On my mobile devices, this was my only issue. However, on
						my laptop, the additional concern I had is that I had to launch the application from an
						executable every time. I wasn't sure that the program was exiting correctly, since when I
						'X'-ed out the application, the command prompt would not return on its own.
					</p>
				<h3>Opera</h3>
					<p>
						I installed Opera using the Ubuntu Software app, and not through command line.
					</p>
				<h4>Pros</h4>
					<p>
						<ul>
								<li>It has a battery conserving mode! You can choose whether you want to enable it all
										the time, or only when you’re not connected to external power</li>
								<li>Super easy to customize, with multiple themes! The task bar is easier to customize
										than any other browser I’ve used. There are so many options</li>
								<li>The GUI is intuitive, more so than MS Edge, Firefox, or Chrome.</li>
								<li>It seems faster than Firefox</li>
								<li>Videos work (HTML5), unlike in GNOME Web/Epiphany.</li>
								<li>VPNS! I love them</li>
								<li>The pop-out video feature is super cool and useful</li>
						</ul>
					</p>
				<h4>Cons</h4>
					<p>
						<ul>
								<li>Not all programs support Opera (like Overleaf), since it's not that popular.</li>
								<li>There’s not really a “never remember history” option, like there was in Firefox</li>
								<li>FB Messenger is kinda weird; it only works sometimes</li>
						</ul>
						It also gives you an option to <a href="https://help.opera.com/en/latest/security-and-privacy/#VPN">enable VPN</a>:
						<ol>
								<li>Go to <span class="directory">Settings</span> <FaArrowRight /><span class="directory">Advanced</span> and double click <span class="directory">Advanced</span></li>
								<li>Go to <span class="directory">VPN</span> and turn on <b>Enable VPN</b></li>
								<li>Go to the top of the search bar; you’ll see the letters “VPN” in a light grey. Click on
										that, so that it becomes blue. This will let you pick the location.</li>
						</ol>
					</p>

				<p>
					<u>Update:</u> as of September 2020, I'm back to Firefox.
				</p>

			</div>
		</div>
	)
}

export default Browser;
