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
                    These are ranked vaguely in the order I need them. I honestly do not know how to live without Vim,
                    so that's the first. Obviously, I also install their dependencies. :)
                        <ul>
                            <li>Vim</li>
                                <ul>
                                    <li>Vundle (dependent on Git)</li>
                                    <li>Pathogen (dependent on Git)</li>
                                </ul>
                            <li>Curl</li>
                            <li>Sudo</li>
                            <li>Network-Manager</li>
                            <li>Git</li>
                            <li>Terminator</li>
                            <li>Zathura</li>
                            <li>Zim</li>
                            <li>Plank</li>
                            <li>VS Code, get it from <span class="monospace">.deb</span> file</li>
                        </ul>
                <h3>Languages to check for (some might already be there)</h3>
                    <ul>
                        <li>C/C++ (check for <span class="monospace">gcc</span>/<span class="monospace">g++</span>)</li>
                        <li>Java</li>
                        <li>LaTeX (check for <span class="monospace">texlive</span>)</li>
                        <li>Python</li>
                        <li>NodeJS/ReactJS (check for <span class="monospace">npm</span> and <span class="monospace">nodejs</span>)</li>
                        <li>R</li>
                    </ul>
                <h3>Todo list (other things I like) </h3>
                    <ul>
                        <li> Adding yourself to the sudoers file (on Debian, <span class="monospace">visudo</span> didn't work for me)</li>
                        <li><Link to="/writeup/map">Mapping</Link> <code class="inline">Caps Lock</code> to <code class="inline">Esc</code></li>
                        <li> I need a multilingual keyboard with dead keys. I prefer having <code class="inline">AltGr</code> as 
                            my dead key (<code class="inline">Compose</code> key). On the same note,
                            I need to set <code class="inline">Compose</code> to the corresponding dead key.
                        </li>
                        <li>On startup, I want a dock-like thing (Plank) and a terminal (Terminator).
                            I don't want this to be terminal dependent.
                            I run this with <span class="monospace">gnome-tweaks</span> currently.
                        </li>
                    </ul>
                <br></br>
		    </div>
        </div>

    )
}

export default Preferences;