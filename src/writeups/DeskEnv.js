import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css'
// u gotta use react-router-dom, not just react-router
import Header from '../components/Header'
import MiniHeader from './MiniHeader'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';

function DeskEnv (){
    return(
        <div>
            <Header />
            {MiniHeader("Desktop Environment")}
            <div class="box">
                <h3>The Problem</h3>
                    <p>
                        So ... I was procrastinating on a few assignments and was looking into
                        different desktop environments. After a bit of Googling, I landed on
                        Xfce (comes as default with Xubuntu, which I don’t have installed). I
                        honestly don’t remember how I installed it; it had something to do
                        with xargs or xorgs or something to that effect.
                    </p>
                    <p>
                        Long story
                        short, it was a disaster. I half-heartedly tried to customize it, but
                        it’s really not worth it (at least with my config). From my experience,
                        GNOME is far more user-friendly. Perhaps Xfce would have been nicer had
                        I spend more time with it, but for the few hours I spent with it, It was
                        the worst<sup>TM</sup>.
                    </p>
                    <p>
                        Here’s some important advice: <b>don’t install something unless you know
                        how to uninstall it</b>. Seriously. The uninstallation process for
                        Xfce was not clean.
                    </p>
                <h3>The Solution</h3>
                    <p>
                        I tried uninstalling some packages and things
                        based off some answers I got from Stack- Overflow/StackExchange. I’m honestly
                        not sure what the difference is between Xubuntu and normal Ubuntu, but whenever
                        I rebooted my computer, it started out with the Xubuntu screen (maybe this was
                        harmless, or maybe not, but either way it was bugging me).
                    </p>
                    <p>
                        <a href="https://askubuntu.com/questions/92084/how-to-remove-xubuntu-desktop">
                        Other StackOverflow answer </a> to the rescue! I used a couple of
                        commands:
                        <ol>
                            <li>
                                <div class="realcode">
                                    sudo apt-get autoremove --purge xubuntu-* && sudo apt-get autoremove --purge
                                    xfce* </div>
                            </li>
                            <li>
                                <div class="realcode">sudo apt-get autoremove --purge $( dpkg-query -l *xubuntu* | grep ii | tr -s " " | cut -d" " -f2; dpkg-query -l *xfce* | grep 'ii' | tr -s " " | cut -d" " -f2 )
                                </div>
                            </li>
                        </ol>
                        I'm not sure if both commands are necessary, but I ran both, rebooted,
                        and the Xubuntu screen did not appear!
                    </p>
                    <p>
                        I'm probably going to wind up configuring a desktop environment for
                        Pippin at some point in time. Right now, I'm considering i3, but I'm not
                        sure. If/when I do set it up, I'll update it here.
                    </p>

            </div>
            <div class="box">
                <h3>Cinnamon</h3>
                    <p>
                        I didn't like XFCE much after using it on my VM, Gwaihir. However, I now use Cinnamon on my Dell XPS.
                        It feels more lightweight than GNOME, but I'm now starting to feel the burden of not using the most
                        popular version of something. Certain tools have backwards compatibility, but others certainly don't.
                        One of my favorites, for example, <span class="monospace">gnome-tweaks</span> works in a really jank way:
                        it'll let you set the <code class="inline">Compose</code> key, but literally let you do nothing else.
                    </p>
             </div>
			<div class="box">
				<h3>i3/i3-gaps</h3>
				<p>
					I now use i3, a window manager that replaces your DE.
					I actually really like it. The customizability is really nice.
					There's a bit of a learning curve, since you have to kinda
					set up most things you want yourself. For example, I can't control
					the audio or brightness via my keyboard without setting that up myself. The
					default bar is really minimalistic, but probably needs customizing (This entry is dateed 11/25/20).
				</p>
				<p>
					As of 4/21/21, I'm head over heels in love with this setup. I'm not sure I'll even be able to switch
					to another WM. I now use polybar as my bar, which seems really nice! I've also switched over
					to i3-gaps (an i3 fork), which is really comparable. The performance is a bit lower, but that's something
					I can live with. I use <span class="monospace">alsamixer</span> for the audio, and
					sometimes <span class="monospace">pavucontrol (pulseaudio)</span>. They keyboard shortcuts are indeed
					a bit of a learning curve, but I'd say the speed and organization are really worth it.
				</p>
				<p>
					Brightness and audio were a bit weird. Previously, I used to use <span class="monospace">xrandr</span> to
					manage brightness. This didn't affect the brightness of the display; it just impacted what a user might perceive
					to be brightness by adjusting the saturation. My config used to contain the following:
                    <div class="realcode">
						bindsym XF86MonBrightnessUp exec path/bright_up.sh <br/>
						bindsym XF86MonBrightnessDown exec path/bright_down.sh
					</div>
					where the <span class="specialCase">{"bright_{up/down}.sh"}</span> contained the following:
					<pre>
						<div class="realcode">
							<span class="specialCase">{"set b {"}</span><br></br>
							&emsp;<span class="specialCase">{"b=$(xrandr --verbose | grep -m 1 -w connected -A8 | grep Brightness | cut -f2- -d: | tr -d ' ')"}</span> <br></br>
							&emsp;b=$(echo "$b+$1" | bc -l) <br></br>
							&emsp;xrandr --output eDP-1 --brightness $b <br></br>
							&emsp;echo $b <br></br>
							<span class="specialCase">{"}"}</span> <br></br>
							<br></br>
							# if up, bright_constant = 0.1; if down, bright_constant = -0.1 <br></br>
							set bright_constant
                        </div>
                    </pre>

					For obvious reasons, that was a terrible solution, so I looked to <span class="monospace">brightnessctl</span> for guidance.
					The first time I tried it, I ran into weird errors regarding permissions, but it seems to work fine now.
					My <Link to="/writeup/dotfiles">i3 config</Link> now contains the lines
                    <div class="realcode">
						bindsym XF86MonBrightnessUp exec brightnessctl s +2% <br/>
						bindsym XF86MonBrightnessDown exec brightnessctl s 2%-
					</div>
				</p>
				<p>
					As for sound, the combo of <span class="monospace">alsamixer</span> and <span class="monospace">pavucontrol</span> is really, really weird,
					especially for certain apps like Spotify and Zoom (which used to blow my ears out because it would default to 100% audio
					on <span class="monospace">alsamixer</span>; the workaround is to make 
					100% audio not much at all using <span class="monospace">pavucontrol</span>).
					I have no idea how to fix or deal with this, but it certainly does annoy me. At any rate, my <Link to="/writeup/dotfiles">i3 config</Link> 
					now contains the lines
                    <div class="realcode">
						bindsym XF86AudioRaiseVolume exec --no-startup-id amixer set Master 2%+ <br/>
						bindsym XF86AudioLowerVolume exec --no-startup-id amixer set Master 2%- <br/>
						bindsym XF86AudioMute exec --no-startup-id amixer set Master toggle
					</div>
					Hopefully future me will figure this out!
				</p>
			</div>
        </div>
    )
}

export default DeskEnv;
