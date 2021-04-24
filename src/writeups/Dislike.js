import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css'
// u gotta use react-router-dom, not just react-router
import Header from '../components/Header'
import MiniHeader from './MiniHeader'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';

function Dislike(){
	return(
		<div>
			<Header />
			{MiniHeader("Good heavens. I can't staaand these.")}
			<div class="box">
				<p>
					Some programs are just annoying. Either they don't work properly, or they're too bloated, or because of something else.
					Here are some things that I have installed out of necessity and some I've since deleted.
				</p>
				<h3>Things I still have</h3>
				<p>
					<ul>
						<li>Zoom</li>
							<ul>
								<li>Bloated</li>
								<li>
									Strange behavior when using a desktop icon: launches once, but fails on subsequent attempts.
									This is due to child processes not being killed properly and left as orphans. One workaround
									is using <span class="monospace">killall -r [z,Z]oom</span>.
									The easier option is launching with command line or <span class="monospace">dmenu</span>.
								</li>
								<li>
									Right. Zoom also defaults to 100% volume with some combo of <span class="monospace">alsamixer </span>
									and <span class="monospace">pavucontrol</span>, which has probably caused me a great deal of ear damage.
								</li>
								<li>
									On i3 (exiting with <span class="directory">Mod</span> +
									<span class="directory">Shift</span> + <span class="directory">q</span>),
									you'll need to quit twice to get rid of the program. No idea why, but it's just a mild annoyance.
								</li>
							</ul>
						<li>Spotify</li>
							<ul>Oh, boy. This one's a guilty pleasure. </ul>
					</ul>
				</p>
				<h3>Things I don't.</h3>
					<p>
						<ul>
							<li>Chrome</li>
								<ul>
									<li>Chrome is a different kind of hell. (yep, that deserved its own bullet.)</li>
									<li>Google. Privacy. Need I say more? (yeah, "don't be evil" doesn't cut it.)</li>
									<li>Chrome is insanely slow to load websites and JS</li>
									<li>Chrome was one of the most intensive things I'd run, at least on my computer, and used up wayyyy more memory than Firefox or Opera.</li>
									<li>
										By the way, when you uninstall, it doesn't do it cleanly.
										On Debian, you have to go in and remove the corresponding files from your <span class="monopace">/etc/apt/sources.list.d</span>.
										Yes, it'll ping the corresponding sites every time you run updates. I couldn't stand this.
									</li>
								</ul>
							<li>Microsoft Teams/Skype</li>
								<ul>
									<li>
										Same complaints as Zoom, except I've never dealt with any i3 specific issues,
										since I had these installed back when I used Ubuntu with GNOME or Debian with Cinammon.
									</li>
									<li>You get the same issue with MS Teams as in Chrome, where you have to go in and remove sources. It's annoying.</li>
								</ul>
							<li>Firebase CLI</li>
								<ul>
								</ul>
						 </ul>
					</p>
			</div>
		</div>

	)
}

export default Dislike;
