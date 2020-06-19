import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css'
// u gotta use react-router-dom, not just react-router
import Header from '../components/Header'
import MiniHeader from './MiniHeader'
function DeskEnv (){
    return(
        <div>
            <Header />
            {MiniHeader("Desktop Environment")}
            <div class="box">
                <h3>The Problem</h3>
                    So ... I was procrastinating on a few assignments and was looking into
                    different desktop environments. After a bit of Googling, I landed on
                    Xfce (comes as default with Xubuntu, which I don’t have installed). I
                    honestly don’t remember how I installed it; it had something to do
                    with xargs or xorgs or something to that effect.
                    <br></br>
                    <br></br>
                    Long story
                    short, it was a disaster. I half-heartedly tried to customize it, but
                    it’s really not worth it (at least with my config). From my experience,
                    GNOME is far more user-friendly. Perhaps Xfce would have been nicer had
                    I spend more time with it, but for the few hours I spent with it, It was
                    the worst<sup>TM</sup>.
                    <br></br>
                    <br></br>
                    Here’s some important advice: <b>don’t install something unless you know
                    how to uninstall it</b>. Seriously. The uninstallation process for
                    Xfce was not clean.
            </div>
            <br></br>
            <div class="box">
                <h3>The Solution</h3>
                    I tried uninstalling some packages and things
                    based off some answers I got from Stack- Overflow/StackExchange. I’m honestly
                    not sure what the difference is between Xubuntu and normal Ubuntu, but whenever
                    I rebooted my computer, it started out with the Xubuntu screen (maybe this was
                    harmless, or maybe not, but either way it was bugging me).
                    <br></br>
                    <br></br>
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
                    <br></br>
                    <br></br>
                    I'm probably going to wind up configuring a desktop environment for
                    Pippin at some point in time. Right now, I'm considering i3, but I'm not
                    sure. If/when I do set it up, I'll update it here.
            </div>
        </div>
    )
}

export default DeskEnv;