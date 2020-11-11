import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css'
// u gotta use react-router-dom, not just react-router
import Header from '../components/Header'
import MiniHeader from './MiniHeader'
import { FaArrowRight } from 'react-icons/fa';

function Virtualbox(){
    return (
        <div>
            <Header />
            {MiniHeader("VirtualBox Setup")}
            <div className="box">
                <h3> The Situation </h3>
                <p>
                    My setups with ARM weren't doing so great, 
                    so I wanted to try using Oracle's VirtualBox.
                    Specifically, I was running into issues setting up
                    desktop environments.
                    Certain OS's I wanted to play with didn't 
                    offer images for ARM architecture.
                    In the future, I might try setting up dual booting,
                    possibly with Arch.
                </p>
                <br></br>
                <h3> Installation and setup </h3>
                <p>
                    The installation was relatively straightforward. 
                    I got the <span class = "monospace"> .deb </span> file from &nbsp;
                    <a href="https: //www.virtualbox.org/wiki/Linux_Downloads">
                        Oracle's page
                    </a>.
                    I then ran 
                    <pre>
                        <div class="realcode">
                        <span class="specialCase">{'sudo dpkg -i <blah> '}</span> <br></br>
                        </div>
                    </pre>
                    where <span class="monospace">{'<blah>'} </span>
                    represents the name of the uncompressed file.
                    I ran into a small error, where one package wasn't there, 
                    <span class="monospace"> libqt5openg15</span>. 
                    I installed it, then ran 
                    <pre>
                        <div class="realcode">
                        sudo apt --fix-broken install
                        </div>
                    </pre>
                    That fixed the issue.
                    You'll also need to go get <span class = "monospace"> .iso </span>
                    image of the OS you want. 
                    In my case, I went with &nbsp;
                    <a href="https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-10.5.0-amd64-xfce.iso">
                        Debian 10.5.0 with the XFCE desktop environment for 64-bit systems
                    </a>
                    . Since I was installing Debian, I basically followed &nbsp;
                    <a href="https://linuxhint.com/install_debian10_virtualbox/">
                        an excellent tutorial by linuxhint
                    </a>
                    . The version of VirtualBox is a bit different, but the steps to follow
                    are largely the same. 
                </p>
                <h3> My Thoughts </h3>
                    <p>
                        I think I'll start with what I liked.
                    </p>
                <h4>Pros</h4>
                    <p>
                        <ul>
                            <li>It’s ridiculously easy to set up</li>
                            <li>XFCE seems a tad lighter than GNOME</li>
                        </ul>
                    </p>
                <h4>Cons</h4>
                    <p>
                        <ul>
                                <li>Within the computer, though, it's a nightmare to get basic customization done.
                                    For example,
                                    getting a terminal to open up and customizing the default applications took a bit
                                    more effort than I would have liked.
                                </li>
                                <li>Working with a virtual box is <i>really, really</i> slow</li>
                        </ul>
                        Overall, my biggest issues were the speed and how nonintuitive customization was.
                        I think I'd prefer something that didn't try to guess what I want.
                    </p>
            </div>

        </div>
    )
}

export default Virtualbox;