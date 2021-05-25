import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css'
// u gotta use react-router-dom, not just react-router
import Header from '../components/Header'
import MiniHeader from './MiniHeader'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';
var riceImg = require('./archRice-blurred.png')

function Arch(){
	return(
		<div>
			<Header />
			{MiniHeader("Arch Linux Setup")}
			<div class="box">
				<h3>Why the switch?</h3>
					<p>
						I previously used to run Debian on &Eacute;owyn, and Ubuntu prior to that.
						I was getting frustrated with Debian for a fair bit of time.
						For one, support for Debian packages seemed like an afterthought.
						The <span class="monospace">mupdf</span> plugin
						for <span class="monospace">zathura</span> is officially supported for
						Arch, and there's a ppa for Ubuntu folks. For Debian, though? Zilch.
						Other packages seemed to require the latest versions of programs
						like vim/neovim, and the latest version of the package Debian would let
						me get was still way behind the latest released version.
						I really just wanted the most updated software, and Arch seemed to offer that.
						Arch also seemed to have really, really nice documentation about everything.
						Some combination of the wikis and the forums seemed to cover just about
						everything I needed. I wasn't really seeing that much of an involved
						user base in Debian.
					</p>
					<p>
						My Debian installation was also getting to be a bit bloated and gross.
						I had no idea what half the things that lived in
						my <span class="monospace">.config</span> directory were, so I wanted
							to build from ground-up.
						Being able to pick and choose what I wanted my setup to look and
						feel like, and not having loads of unnecessary packages installed
						and programs launched was important to me.
					</p>
				<h3>Installation</h3>
					<p>
						With that said, let's talk about the installation process. As of April 2021,
						Arch has an <a href="https://wiki.archlinux.org/title/Archinstall"> official
						guided installation script (archinstall) </a>, which radically simplifies things. With
						the installer, most of the installation should be rather seamless, so don't
						worry too much.
					</p>
					<p>
						As always, burn the image to a flash drive, and launch from there.
						As for the burning, I like using <span class="monospace">dd</span> after
						praying to the Linux gods; programs like Etcher are really jank.
						Once you're in, use <span class="monospace">iwctl</span> (this tool is so nice!)
						to get an internet
						connection going. Then you can proceed
						with <span class="monospace">archinstall</span>!
					</p>
					<p>
						Go ahead and pick the options you like! For the formatting, I chose
						the Linux file system, and formatted the whole disk.
						I chose to keep the same network settings, and
						installed <span class="monospace">xorg</span> for the DE-related
						question, and had it install Intel drivers for the graphics card.
						That was pretty much it! There'll be a bit at
						the end that tells you that you can reboot; remember to take
						your flash drive out before you do that.
					</p>
					<p>
						Ideally, you'll be golden if you did all that.
						In my case, Dell was being weird, and after some screwing with the BiOS,
						and after using rEFInd as a boot loader (first burn it as a live USB),
						it worked.
					</p>
				<h3>X</h3>
					<p>
						Yay! You're in! Now, you'll want to probably start X if you're going
						to do anything vaguely graphic-ey. I added the line
						<div class="realcode">
							exec startx
						</div>
						to your <span class="monospace">.bash_profile</span>.
						Now, your <span class="monospace">.xinitrc</span> will contain
						everything that's being launched, like any window manager you like.
						I went with i3! Install whatever you like and its dependencies (might
						take a bit of trial-and-error).
						This should work; if not, you might need to install
						some <span class="monospace">xorg</span>-ey things.
						The errors should give you a pretty good idea of what you need to install.
					</p>
					<p>
						Yay! Assuming that works, you can resume setting everything else up
						mentioned in my <Link to="/writeup/preferences">preferences</Link>.
						That file and its links should contain the rest!
					</p>
				<h3>Miscellaneous</h3>
					<p>
						I'm just putting down some things I had to do during this process.
						<br/> <br/>
						When I plugged in my monitor (through HDMI), it just duplicated
						the display. I wanted it to be more of an extention, so
						I had to add the following lines to my <span class="monospace">.xinitrc</span>:
						<div class="realcode">
							xrandr --output DP3 --right-of eDP1 <br/>
							xrandr --output eDP1 --left-of DP3
						</div>
						Do I know why the monitor is labeled "DP3" instead of HDMI-1 or something? Nope.
						Do I know what DP1 and DP2 are? Also, nope. Please let me know if you find out, though!
						<br/> <br/>
						Initially, <span class="monospace">pulseaudio</span> gave me some weird error
						about "fail[ing] to open cookie file '~/.config/pulse/cookie'". I found
						some solution about symlinking it to another cookie file, but that failed. I don't know
						what that's about, but running it again helped.
						FYI, you'll need to run <span class="monospace">pulseaudio</span> before you run
							<span class="monospace">pavucontrol</span>.
						I added this to my i3 config as
						<div class="realcode">
							exec_always --no-startup-id pulseaudio
						</div>
						<br/><br/>
						I have no idea how to install fonts. I'll update this when I figure out how/find the
						the need to. So far, the default seems to be holding up okay.
						<br/><br/>
						<img src={riceImg}/>
						Sorry, I had to blur the PDF a bit, since it's copyrighted.
					</p>
				<h3>That's all, folks!</h3>
					<p>
						I'm still setting things up, but I'll update this in the upcoming weeks as I learn
						more about Arch and figure out what I want/need.
						Feel free to reach out to me if you have any questions!
					</p>
			</div>
		</div>

	)
}

export default Arch;
