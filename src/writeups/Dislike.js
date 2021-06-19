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
			{MiniHeader("Good heavens.")}
			<div class="box">
				<p>
					Some programs don't support Linux very well.
					This isn't to say that the apps are altogether bad or anything; it just means that the app-to-Linux compatibility is pretty bad.
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
									Right. <Link to="/writeup/deskenv">Zoom also defaults to 100% volume</Link> with some combo of <span class="monospace">alsamixer </span>
									and <span class="monospace">pavucontrol</span>, which has probably caused me a great deal of ear damage.
								</li>
								<li>
									On i3 (exiting with <span class="directory">Mod</span> +
									<span class="directory">Shift</span> + <span class="directory">q</span>),
									you'll need to quit twice to get rid of the program until you disable that setting.
								</li>
							</ul>

					</ul>
				</p>
				<h3>Things I don't.</h3>
					<p>
						<ul>
							<li>Chrome</li>
								<ul>
									<li>Chrome is a different kind of hell. (yep, that deserved its own bullet.)</li>
									<li>Privacy, dudes.</li>
									<li>Chrome is insanely slow to load websites and JS</li>
									<li>Chrome was one of the most intensive things I'd run, at least on my computer, and used up wayyyy more memory than Firefox or Opera.</li>
									<li>
										By the way, when you uninstall, it doesn't do it cleanly.
										On Debian, you have to go in and remove the corresponding files from your <span class="monospace">/etc/apt/sources.list.d</span>.
										Yes, it'll ping the corresponding sites every time you run updates. I couldn't stand this.
									</li>
								</ul>
							<li>Microsoft Teams/Skype</li>
								<ul>
									<li>
										Same complaints as Zoom, except I've never dealt with any i3 specific issues,
										since I had these installed back when I used Ubuntu with GNOME or Debian with Cinammon.
									</li>
									<li> Also, as an OS-independent frustration, the default setting is to have it run as a background process
											even after exiting the app.
									</li>
									<li>You get the same issue with MS Teams as in Chrome, where you have to go in and remove sources. It's annoying.</li>
								</ul>
							<li><Link to="/writeup/spotify">Spotify</Link></li>
								<ul>
									<li>Oh, boy. This one's a guilty pleasure. </li>
									<li>Really, really bloated.</li>
									<li>It takes up a bunch of storage, but as long as you periodically delete the cache, it'll be fine, I guess.</li>
								</ul>
							<li>Firebase CLI</li>
								<ul>
									<li>Keeping something linked to a Google account on my computer just rubbed me the wrong way.</li>
								</ul>
							<li>VS Code</li>
								<ul>
									<li><s>As soon as I find good plugins/snippets for frontend-y stuff, this goes, stat.</s> Update: there's some good plugins :) </li>
									<li>
										This one makes you remove sources from <span class="monospace">/etc/apt/sources.list.d</span> if you want to uninstall.
									</li>
								</ul>
						 </ul>
					</p>
			</div>
		</div>

	)
}

export default Dislike;
