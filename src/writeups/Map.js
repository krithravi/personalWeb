import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css'
// u gotta use react-router-dom, not just react-router
import Header from '../components/Header'
import MiniHeader from './MiniHeader'
import { FaArrowRight } from 'react-icons/fa';
function Map(){
    return(
        <div>
            <Header />
			{MiniHeader("Mapping Keys")}
			<div className="box">
                <h3>The Problem</h3>
                    <p>
                        The <code class="inline">Caps Lock</code> key serves mainly as a
                        source of annoyance, and receives far too much real estate relative
                        to its use. However, the <code class="inline">Esc</code> key is
                        quite useful (I'm primarily a Vim user), but is far too hard to
                        reach. Currently, &Eacute;owyn has altered key settings to make
                        life a bit easier. The <code class="inline"> Caps Lock</code> key
                        now acts like the <code class="inline">Esc</code> key.
                    </p>
		        <h3>Stuff that didn't work</h3>
                    <p>
                        I first tried this using the command <div class="realcode">xmodmap
                        -e `clear Lock' -e `keycode 0x42 = Escape'</div> but for some
                        reason, it stopped working for one of my <span class="roman">
                        T</span><sub><span class="roman">E</span></sub><span
                        class="roman">X</span>&nbsp; files.
                    </p>

				<h3>The Solution</h3>
                    <p>
                        <ol>
                            <li> I installed the <span class="directory">dconf-editor</span> using <div class="realcode"> sudo apt-get install
                                    dconf-tools</div>
                            </li>
                            <li> I started the editor, and went to <span class="directory">org</span> <FaArrowRight /> <span class="directory">gnome</span> <FaArrowRight /> <span class="directory">desktop</span> <FaArrowRight /> <span class="directory">input-sources</span></li>
                            <li> At the bottom of the page, I saw two square braces with nothing in them. These
                                braces are <u>required</u>.</li>
                            <li> Within these braces, I added <div class="realcode">
                                    'caps:escape'</div> to add the <code class="inline">Caps
                                    Lock</code> key as another <code class="inline">
                                    Esc</code>. The command you want to use needs to be enclosed in
                                single quotes. If you want multiple options, they need to be comma
                                separated. A full list of commands can be found by typing <div class="realcode">man 7
                                    xkeyboard-config</div>
                            </li>
                            <li> Exit out, and you're good to go! </li>
                        </ol>
                    </p>
				<h3>On Debian</h3>
                    <p>
                        On Debian, which is what I'm currently running, the solution was a bit different, and I must say
                        I liked it less.
                    </p>
                    <p>
                        Edit the file <span class="monospace">/etc/default/keyboard</span> as
                        superuser. There'll be a line
                        with <span class="monospace">XKBOPTIONS="blah"</span>, 
                        where <span class="monospace">blah</span> represents
                        your current settings, most likely nothing. Just put the
                        string <span class="monospace">caps:escape</span> inside of 
                        those quotes and restart. That's it!
                    </p>
				<h3>Update on XKB stuff</h3>
					<p>
						Yeehaw. On i3, things, uh, work a bit differently, since the normal
						tools I use are not easily available to me.
						Here's the entirety of the previous file:
						<pre>
							<div class="realcode">
								XKBMODEL="pc105" <br />
								XKBLAYOUT="us" <br />
								XKBVARIANT="" <br />
								XKBOPTIONS="compose:ralt,caps:escape" <br />
								<br />
								BACKSPACE="guess" <br />
							</div>
						</pre>
					</p>
				<h3>Arrow Keys</h3>
                    <p>
                        I really felt the need to add this at a later date. Why, you might ask?
                        Sheer fear (which is also what I felt writing half the content on this website).
                    </p>
                    <p>
                        To be kinda vulnerable on the internet: like a lot of folks, when I'm stressed, I like
                        to change things, often a bit impulsively. This could be a haircut, reflashing my computer
                        with a new distro, clean up/decorate my work space, etc. And these actions all have their
                        own consequences.
                    </p>
                    <p>
                        This time, I disabled my arrow keys, using <span class="monospace">xmodmap</span>, which I 
                        talked about earlier on this page. 
                        I guess I thought I needed to learn Vim and Emacs (since the default for terminals is Emacs) keybindings.
                        Based on what <a href="https://superuser.com/questions/775785/how-to-disable-a-keyboard-key-in-linux-ubuntu">another user said on StackExchange</a>,
                        I ran the command 
                        <div class="realcode">
                            xmodmap -e 'keycode 116='; xmodmap -e 'keycode 113='; xmodmap -e 'keycode 114='
                        </div>
                        Initially, I panicked, since I couldn't reverse it, and there are unanswered 
                        comments below the accepted answer
                        (this entry is dated 10/18/20) asking how to undo the action. However, somehow, it, um, undid itself?
                        I'm not entirely sure what's up with that. But we'll see, I guess.
                    </p>
			</div>
        </div>
    )
}

export default Map;
