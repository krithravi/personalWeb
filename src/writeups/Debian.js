import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css'
// u gotta use react-router-dom, not just react-router
import Header from '../components/Header'
import MiniHeader from './MiniHeader'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';
function Debian (){
    return(
        <div>
            <Header />
            {MiniHeader("Debian Installation")}
            <div class="box">
                <h3>The Problem</h3>
                    <p>
                        Oh man. Being the most careful person on the planet, I accidentally
                        formatted my drive this past weekend. Honestly, if I didn't do weekly backups,
                        I'd be so much more screwed. I tried to recover the lost data in vain,
                        so reformatting and using the backups seemed to be the 
                        fastest option. I used to run Ubuntu 20.04 on my Dell XPS, but
                        I decided to go with Debian for a change.
                    </p>
                <h3>Note to the reader:</h3>
                <p>
                    On these write-ups, I normally divide the sections up into a "things I tried that didn't work"
                    and a solution, but for this one, I'm finding it easier to just write it as a story. If you do intend
                    to use this write-up, make sure you read the whole paragraph before jumping the gun.
                </p>

                <h3>The Installation process</h3>
                    <p>
                        As most installation processes go, I started by flashing a USB with Debian Buster, 
                        with the standard image (so no desktop environment was already installed). After that,
                        the process is fairly simple: once you're at the boot loader and find your USB, go to 
                        the installer version. It'll walk you through the rest. On a side note, being connected
                        to Ethernet is pretty much vital (I suppose you could do it without, but I just don't 
                        recommend it, since you'll be messing around with more drives and stuff).
                    </p>
                    <p>
                        I went with most of the default
                        settings, but there is one critical step that I messed up the first time I tried to 
                        install Debian (spoiler alert: I screwed up twice):
                        there'll be a step asking you to load the firmware. Take a picture of this or note
                        down the respective packages if you choose to continue without loading the firmware
                        right then (I couldn't figure out how to load the binary files onto another USB). 
                        Debian, by default, does not include certain firmware (including most wireless firmware) 
                        if it's not FOSS. Since I wanted WiFi, I needed to get this firmware. Making a note of which
                        files are needed at this stage kinda makes things easier down the road. Also, during the
                        installation, there's a bit where they tell you to remove the USB. Make sure you actually do that,
                        as I didn't, and had to install it all over again (takes like 10 minutes, but those were 10 wasted minutes).
                    </p>
                

                <br></br>
                <h3>My struggle with the WiFi</h3>
                    <p>
                        I have another <Link to="/writeup/network">write-up</Link> to my struggles with getting a working
                        WiFi connection on Arch, and I tried a lot of the same methods to no avail, before realizing that 
                        I was missing some drivers. The <span class="monospace">lspci</span> command, once again, was pretty useful,
                        especially after <span class="monospace">grep</span>ping for "Wireless." After posting on 
                        Reddit, I found the <span class="monospace">journalctl</span> command 
                        to be quite useful in telling you what's wrong. You can never go wrong with the logs, I guess. 
                        Based on that, I found that I have Atheros 10k blah blah. I'm not 100% certain what that's about, but
                        at least it told me to get the <span class="monospace">ath10k</span> drivers. 
                    </p>
                    <p>

                        Remember when I said that by default, Debian only includes FOSS stuff? Well, we're going to have to change that
                        to get the right firmware. You'll need to edit the <span class="monospace">/etc/apt/sources.list</span> file as root. 
                        What I wound up doing was just adding the word <span class="monospace">non-free</span> after <span class="monospace">main</span>.
                        Again, if you have syntax highlighting enabled in your editor, you'll see it light up, so you 
                        know you're on the right track. After that, you should be able to go ahead and install your firmware. In my case,
                        I typed <div class="realcode">apt install firmware-atheros</div> (add <span class="monospace">sudo</span> if not root). 
                        Did this work? Maybe. After a second installation, something magically worked, maybe it had to do with this, maybe it didn't. 
                        I'm still not sure why, but I don't think
                        I have the emotional space to investigate. However, if you did keep track of the files earlier, like was recommended, theoretically,
                        you can just download and work with those. I personally did not choose this, however. 
                    </p>

                <h3>A Graphical Interface</h3>
                <p>
                    Having access to a graphical interface (such as being able to use a normal browser, as opposed to a TUI one) was
                    quite important to me (how else can I watch my <i>Say Yes to the Dress?</i> ). That said, I really wanted to 
                    try <span class="monospace">i3</span>, mostly because my friends have it. Again, I tried installing it, but
                    that came to a halt when it couldn't figure out what to do with my display. I tried setting it to a variety of things,
                    mainly just combinations of zeros and colons, but nothing worked. I gave up, and moved on. Again, I might come back to
                    this, but right now I have midterms to study for.
                    <br></br>
                    <br></br>
                    Since I'm not cool enough to go that minimalistic, I decided to go for a desktop environment, Cinnamon, a GNOME derivative (I want Cinnabon.
                    I want Cinnabon. I want ...). My experiences with this one live in <Link to="/writeup/deskenv">this write-up about 
                    desktop environments</Link>. Anyway, Debian has a nice utility called <span class="monospace">tasksel</span>, which
                    deals with the nasty business of installing it yourself.
                </p>

                <h3>That's all, folks!</h3>
                    <p>
                        After this, it was all about making this environment feel like home. 
                        Since this write-up is long enough, I'll talk about my personal preferences and things I can't live without
                        in <Link to="/writeup/preferences">another write-up</Link>.
                    </p>    
                    <p>
                        However, I will add that my <Link to="/writeup/power">displeasure with my laptop </Link> has been
                        significantly reduced ever since I moved to Debian with Cinnamon.
                        At this stage, I don't know why my laptop likes this setup better, but I'll keep you posted.
                        ReactJS didn't work out of the box; I had to adjust the <span class="monospace">package.json</span> file a bit
                        to get stuff to work. On the whole though, the performance makes the tradeoff certainly worth it, for now at
                        least. Zoom, Skype, and similar applications work terribly on both Debian and Ubuntu. CLI helps, though.
                        Future thoughts: might put a Kali VM on this one :) 
                    </p>
                    <p>
                        Thank you for reading to here! Happy hacking!
                    </p>

                
            </div>
        </div>
    )
}

export default Debian;
