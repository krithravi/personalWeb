import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css'
// u gotta use react-router-dom, not just react-router
import Header from '../components/Header'
import MiniHeader from './MiniHeader'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';

function Preferences(){
	return(
		<div>
			<Header />
			{MiniHeader("My Preferences")}
			<div class="box">
				<p>
					Yep, this is basically a checklist to get close to my setup/rice.
				</p>
				<h3>Things to install</h3>
					<p>
						These are ranked vaguely in the order I need them.
							<ul>
								<li>Vim/Neovim</li>
									<ul>
										<li>Vundle (dependent on Git)</li>
									</ul>
								<li>Git</li>
								<li>i3 and related things like <span class="monospace">feh/dmenu/gtk3</span></li>
								<li>Browser (Firefox + yes, I have a <a href="https://color.firefox.com/?theme=XQAAAAJMAQAAAAAAAABBKYhm849SCia48_6EGccwS-xMDPr9496nlLQBCLx8FrDpvuwijYJpAI4Ec1CBgYqCTiq3FKDlB52GlnruSgwxWut4q010CN_Q1YsNG7aE4PEnJc_7EAxCCxEye2_PIqy417PCbCv5Wi0HlKO8j6NhjGf0SMFVjgijWJNac7vlT80CQvMpEOdEfZvgHVgT1U0NF4oYHeQLqr8lvwwI-5wDbS2F3iXvlduUpLL7LmrpII6fOqM0Tjen1BjuVmr0spzRcYtHIcWNhglIMTbqwadWqseY_256IAA">custom theme</a>)</li>
								<li>Terminator</li>
								<li>Zathura</li>
									<ul>
										<li>Get support for DjVu: <span class="monospace">zathura-djvu</span></li>
											<li>Get support for EPUB: <span class="monospace">zathura-pdf-mupdf</span> </li>
									</ul>
								<li>Set up SSH with <span class="monospace">openssh</span> package; OpenVPN is quite nice</li>
								<li>Get additional displays working with <span class="monospace">xrandr</span>, which comes
									from <span class="monospace">xorg-xrandr</span>. Update your <span class="monospace">.xinitrc</span>!
								</li>
								<li>Set brightness with <span class="monospace">brightnessctl</span></li>
								<li>Get audio working with <span class="monospace">pulseaudio-alsa/pavucontrol/alsa-utils</span></li>
								<li>Bar; I use Polybar for now</li>
								<li>Compositing; I use picom.</li>
								<li>Mutt for mail //TODO </li>
							</ul>
					</p>
				<h3>Languages!</h3>
					<p>
						<ul>
							<li>C/C++ (check for <span class="monospace">gcc</span>/<span class="monospace">g++</span>)</li>
							<li>Java</li>
							<li>LaTeX (check for <span class="monospace">texlive</span>)</li>
							<li>Python and corresponding packages</li>
							<li>NodeJS/ReactJS (check for <span class="monospace">npm</span> and <span class="monospace">nodejs</span>)</li>
							<li>R</li>
						</ul>
					</p>
				<h3>Todo list (other things I like) </h3>
					<p>
						<ul>
							<li> Adding yourself to the sudoers file</li>
							<li><Link to="/writeup/scroll">Natural scrolling</Link></li>
							<li><Link to="/writeup/map">Setting up custom key bindings</Link> </li>
								<ul>
									<li><span class="directory">Caps Lock</span> to <span class="directory">Esc</span></li>
									<li> Multilingual keyboard with dead keys. I prefer having <span class="directory">AltGr</span> as
										my dead key (<span class="directory">Compose</span> key).
									</li>
								</ul>
							<li>
								<s>Set the DejaVu font collection as system default. I used to do this with <Link to="/writeup/tweaks">GNOME tweaks</Link></s>.
								Nope, NotoSans is way better for multilingual support and emojis. For the rest, Source Code Pro works great!
							</li>
							<li>Set default apps! (mime-y stuff) </li>
							<li>Set up cronjobs for updates and cleaning up</li>
							<li><Link to="/writeup/dislike">Zoom</Link> (sad pandemic times) </li>
						</ul>
					</p>
				<h3><Link to="/writeup/practices">A list of good practices I've learned over the years</Link></h3>
			</div>
		</div>

	)
}

export default Preferences;
