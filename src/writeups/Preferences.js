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
                <h3>Things to install</h3>
                    <p>
                        These are ranked vaguely in the order I need them.
                            <ul>
                                <li>Vim</li>
                                    <ul>
                                        <li>Vundle (dependent on Git)</li>
                                    </ul>
								<li>Git</li>
                                <li>Curl</li>
                                <li>Sudo</li>
                                <li>Network-Manager</li>
                                <li>A desktop environment or tiling manager - i3/i3-gaps is nice</li>
                                <li>Web browser (Firefox)</li>
                                <li>Terminator</li>
                                <li>Zathura</li>
                                    <ul>
                                        <li>Get support for DjVu: <span class="monospace">zathura-djvu</span></li>
                                        <li>Get support for EPUB: // wanted to do with mupdf backend, but currently just convert to PDF/DjVu </li>
                                    </ul>
                                <li>VS Code, get it from <span class="monospace">.deb</span> file</li>
                                <li>Set up SSH; OpenVPN is quite nice</li>
								<li>Spotify and spicetify</li>
								<li></li>
							</ul>
                    </p>
                <h3>Languages to check for (some might already be there)</h3>
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
                            <li> Adding yourself to the sudoers file (on Debian, <span class="monospace">visudo</span> didn't work for me)</li>
							<li>Natural scrolling</li>
                            <li><Link to="/writeup/map">Mapping</Link> <code class="inline">Caps Lock</code> to <code class="inline">Esc</code></li>
                            <li> I need a multilingual keyboard with dead keys. I prefer having <code class="inline">AltGr</code> as
                                my dead key (<code class="inline">Compose</code> key).
                            </li>
                        </ul>
                    </p>
                <h3><Link to="/writeup/practices">A list of good practices I've learned over the years</Link></h3>
		    </div>
        </div>

    )
}

export default Preferences;
