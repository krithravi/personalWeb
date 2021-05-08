import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css'
// u gotta use react-router-dom, not just react-router
import Header from '../components/Header'
import MiniHeader from './MiniHeader'
import { FaArrowRight } from 'react-icons/fa';
function Tweaks(){
    return(
        <div>
            <Header />
            {MiniHeader("Accent Marks")}
            <div class="box">
                <h3>The Problem</h3>
                    <p>
                        I needed to be able to type diacritics with my keyboard on &Eacute;owyn.
                        I installed the "English (intl., with AltGr dead keys)" keyboard, but
                        when I typed in the correct key bindings, such as <code class="inline">AltGr</code>+<code class="inline">a</code>, the character
                        "&aacute;" was not produced.
                    </p>

                <h3>The Solution</h3>
                    <p>
                        The issue was that the <code class="inline">Compose</code> key was not set. Hence,
                        I had to set the <code class="inline">Compose</code> key to the
                        <code class="inline">AltGr</code> key.
                    </p>
                    <p>
                        I did this by installing the <span class="directory"> gnome-tweaks</span> utility with
                        <span class="monospace">sudo apt install gnome-tweak-tool</span> and ran it with
                        <span class="monospace"> gnome-tweaks</span>. In Tweaks,
                        I went to <span class="directory">Keyboard & Mouse</span> <FaArrowRight />
                        <span class="directory">Compose Key</span>. The default is set to <span class="monospace">off</span>,
                        but you can toggle that switch and pick the key you want. I went with
                        <code class="inline">AltGr</code>, since that was what the keyboard I downloaded said to use.
                    </p>
                <h3>Additional Fun Stuff</h3>
                    <p>
                        You can do a lot of other cool things with Tweaks - you can customize how pretty much
                        everything looks. You can change the fonts the OS uses, what format the time
                        should be printed in, pick which apps should be launched at boot up, and so much more
                        (and I realized I sound like an ad when I say this).
                    </p>
            </div>
        </div>
    )
}

export default Tweaks;
