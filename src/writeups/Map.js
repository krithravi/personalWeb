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
                    The <code class="inline">Caps Lock</code> key serves mainly as a
                    source of annoyance, and receives far too much real estate relative
                    to its use. However, the <code class="inline">Esc</code> key is
                    quite useful (I'm primarily a Vim user), but is far too hard to
                    reach. Currently, &Eacute;owyn has altered key settings to make
                    life a bit easier. The <code class="inline"> Caps Lock</code> key
                    now acts like the <code class="inline">Esc</code> key.
            </div>
            <br></br>
            <div class="box">
		        <h3>Stuff that didn't work</h3>
                I first tried this using the command <div class="realcode">xmodmap
                    -e `clear Lock' -e `keycode 0x42 = Escape'</div> but for some
                reason, it stopped working for one of my <span class="roman">
                    T</span><sub><span class="roman">E</span></sub><span
                    class="roman">X</span>&nbsp; files.
	        </div>
            <br></br>
            <div class="box">
				<h3>The Solution</h3>
				<ol>
					<li> I installed the <span class="directory">dconf-editor</span> using <div class="realcode"> sudo apt-get install
							dconf-tools</div>
					</li>
					<li> I started the editor, and went to <span class="directory">org</span> <FaArrowRight /> <span class="directory">gnome</span> <FaArrowRight /> <span class="directory">desktop</span> <FaArrowRight /> <span class="directory">input-sources</span></li>
					<li> At the bottom of the page, I saw two square braces with nothing in them. These
						braces are <u>required</u>.</li>
					<li> Within these braces, I added <div class="realcode">
							`caps:escape'</div> to add the <code class="inline">Caps
							Lock</code> key as another <code class="inline">
							Esc</code>. The command you want to use needs to be enclosed in
						single quotes. If you want multiple options, they need to be comma
						separated. A full list of commands can be found by typing <div class="realcode">man 7
							xkeyboard-config</div>
					</li>
					<li> Exit out, and you're good to go! </li>
				</ol>
				I still haven't done this in Pippin yet.
			</div>
        </div>
    )
}

export default Map;