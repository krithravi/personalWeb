import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css'
// u gotta use react-router-dom, not just react-router
import Header from '../components/Header'
import MiniHeader from './MiniHeader'
import { FaArrowRight } from 'react-icons/fa';
function Scroll(){
	return(
		<div>
			<Header />
			{MiniHeader("Natural Scrolling with i3")}
			<div className="box">
				<h3>The Problem</h3>
					<p>
						i3 seems to have traditional scrolling, where your scrolling motion
						matches that of the scrollbar, as the default, but I wanted natural
						scrolling where your scrolling motion matches the motion of the page.
					</p>
		        <h3>Stuff that didn't work</h3>
					<p>
						<a href="https://wiki.archlinux.org/index.php/Libinput#Via_xinput">
							Based on the ArchWiki
						</a>,
						I decided to
						use <span class="monospace">xinput</span>.
						Since I didn't have  <span class="monospace">libinput</span> installed,
						I decided to run
						<pre>
							<div class="realcode">
								xinput list
							</div>
						</pre>

						At any rate, I tried the solution recommended, which did nothing.
						The device in question was the "PS/2 Synaptics TouchPad"; this is really
						important, keep this in mind for later.
                    </p>
					<p>
						The next thing I tried was screwing with some config files.
						I was told to add a file
						to the <span class="monospace">/etc/X11/xorg.conf.d</span> directory,
						but that directory didn't exit.

						I therefore tried editing
						the <span class="monospace">/usr/share/X11/xorg.conf.d</span> directory,
						since it at least contained
						the <span class="monospace">xorg.conf.d</span> directory.
						I made a file called
						called <span class="monospace">70-libinput.conf</span> and
						filled it with the following:
						<pre>
							<div class="realcode">
								Section "InputClass" <br />
									&emsp; 	&emsp; Identifier "libinput touchpad catchall"<br />
									&emsp; 	&emsp; MatchIsTouchpad "on"<br />
									&emsp; 	&emsp; MatchDevicePath "/dev/input/event*"<br />
									&emsp; 	&emsp; Option "NaturalScrolling" "false"<br />
									&emsp; 	&emsp; Option "Tapping" "on"<br />
									&emsp; 	&emsp; Driver "libinput"<br />
								EndSection
							</div>
						</pre>
						The "tapping" bit is since I don't like pressing my trackpad
						all the way for it to register as a click.
					</p>
					<p>
						After a bit more searching, I found that you're supposed
						to copy the files to <span class="monospace">/etc/X11/xorg.conf.d</span>.
						I tried that, and renamed the file, different things,
						such as <span class="monospace">30-touchpad</span> and <span class="monospace">40-libinput</span>,
						and playing with different numbers, which refer to the priority of the file.
						These didn't work either.
					</p>
                    <p>
						Evidently, I can't read.
						The ArchWiki's linked in the beginning suggested running
						<pre>
							<div class="realcode">
								libinput list-devices
							</div>
						</pre>
						However, I didn't have <span class="monospace">libinput</span> installed.
						There wasn't a package with that exact name, so
						I decided to install <span class="monospace">libinput-tools</span>. This
						seemed to do the trick.
                    </p>
					<p>
						The <span class="monospace">list-devices</span> bit just displays the info
						a bit differently; it's not that big of a deal breaker. However,
						this time, when I tried the <span class="monospace">xinput</span> command
						from earlier, it now showed another touchpad, "SYNA2393:00 06CB:7A13 Touchpad".
						I repeated the steps from earlier using this device instead, and the steps from
						the ArchWiki worked.
					</p>
					<p>
						Since I was satisfied with the changes I'd made, I need to write
						them to file. I needed a <span class="monospace">.xinitrc</span> file,
						so I copied it over
						from <span class="monospace">/etc/X11/xinit/xinitrc</span> to
						my home directory. To this file, I added the lines
						<pre>
							<div class="realcode">
								xinput set-prop "SYNA2393:00 06CB:7A13 Touchpad" "libinput Tapping Enabled" 1 <br />
								xinput set-prop "SYNA2393:00 06CB:7A13 Touchpad" "libinput Natural Scrolling Enabled" 1
							</div>
						</pre>
						Again, I wanted both tapping and natural scrolling.
						For the temporary testing, the device numbers work fine, but
						for something to be loaded for every session, it's recommended
						to use the actual names, since the numbers can change.
                        This <span class="monospace">/etc/X11/xinit/xinitrc</span> solution did not work for me,
                        since on reboot, it only did the first command.
					</p>
                    <h3>The Solution</h3>
                    <p>
                        The final solution was adding the following lines to my i3 config:
                        <pre>
							<div class="realcode">
                                exec --no-startup-id xinput set-prop "SYNA2393:00 06CB:7A13 Touchpad" "libinput Tapping Enabled" 1 & <br/>
                                exec --no-startup-id xinput set-prop "SYNA2393:00 06CB:7A13 Touchpad" "libinput Natural Scrolling Enabled" 1
							</div>
						</pre>
                    </p>

			</div>
        </div>
    )
}

export default Scroll;
