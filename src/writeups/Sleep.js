import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css'
// u gotta use react-router-dom, not just react-router
import Header from '../components/Header'
import MiniHeader from './MiniHeader'
import { FaArrowRight } from 'react-icons/fa';
function Sleep(){
    return(
        <div>
            <Header />
            {MiniHeader("Sleep and Wake")}
            <div class="box">
                <h3>The Problem</h3>
                    <p>
                        &Eacute;owyn, my lovely Dell XPS 15 9570, likes to give its Ubuntu (and Linux) users hell when
                        it comes to going to sleep mode and waking up. As it stood, I couldn't close my laptop and 
                        then resume working, which was rather problematic since closing the laptop should have theoretically
                        only put the computer in sleep mode. Every time I closed the lid, I had to power off and power on
                        my laptop.
                    </p>
                <h3>Stuff that didn't work</h3>
                    <p>
                        The first solution I looked up was command-line ways to put the computer to sleep. I
                        tried using the <div class="realcode">pm-suspend-hybrid</div> command from <span class="directory">pm-utils</span> as a superuser (which did
                        nothing) as well as tried the <div class="realcode">systemcl hibernate</div> command. The latter had the same
                        effect as closing the laptop, unfortunately.
                    </p>
                    <p>
                        The next step was checking out my BIOS settings.
                        <ol>
                                <li>Get drivers (an <span class="monospace">.exe</span> file) from the Dell website (a truly dreadful experience), put the
                                        file on a USB drive, and mount the drive.</li>
                                <li>Shut down the computer and enter the BIOS by pressing the F2 key, and going
                                        to <span class="directory">Settings</span> <FaArrowRight /><span class="directory">Power Management</span> <FaArrowRight /> <span class="directory">USB Wake Support</span> as well as <span class="directory">Settings</span> <FaArrowRight /> <span class="directory">Power
                                                Management</span> <FaArrowRight /><span class="directory">Block Sleep</span>.</li>
                                <li>One website said that the <code class="inline">Enable USB Wake Support </code> button would be disabled, and that
                                        I should enable it. It also said that that the <code class="inline">Block Sleep</code> option would also be selected,
                                        and that I should disable it. However, my BIOS settings were already in these states.</li>
                                <li>The next step was to update the BIOS.
                                        <ol>
                                                <li>Repeatedly pressing <code class="inline">F12</code> (I don’t actually know if doing it only once suffices)</li>
                                                <li>Selecting the <code class="inline">BIOS Flash Update</code></li>
                                                <li>Navigating to and selecting that <span class="monospace">.exe</span> file we talked about earlier</li>
                                                <li>Waiting for a <i>while</i></li>
                                        </ol>
                                </li>
                        </ol>
                        This did absolutely zilch to fix the issue, but it was a learning experience. Yay! I now
                        know how to update my BIOS.
                    </p>
                <h3>The Solution</h3>
                    <p>
                        There’s a pretty simple <a href="https://youtu.be/f-u7Zk_itUU">4-ish minute long YouTube video</a> that explained this the best. The
                        chap pulled a ton of this stuff from ArchWiki. The <a href="https://wiki.archlinux.org/index.php/Dell_XPS_15_7590">pertinent stuff</a> can be found in the
                        <b> Power Management</b> section of the page.
                        <ol>
                                <li>If you type <div class="realcode">cat /sys/power/mem_sleep</div> you’ll see the (default) response:
                                        <span class="monospace">[s2idle] deep</span>, meaning that the s2idle is selected.</li>
                                <li>To fix the issue, you’ll want to use the deep version instead. You could just go ahead
                                        and use the command <div class="realcode">echo deep|sudo tee/sys/power/mem_sleep</div> which would
                                        temporarily fix the issue.</li>
                                <li>To make the change permanent, change the kernel parameters by editing the <span class="monospace">/etc/default/grub</span> as a superuser.</li>
                                <li> In the <span class="monospace">grub</span> file, the <span class="monospace">GRUB_CMDLINE_LINUX_DEFAULT</span> (the boot options) is set to
                                        <span class="monospace"> quiet splash</span>.
                                        <ul>
                                                <li> The <span class="monospace">quiet</span> part just means “non-verbose.” Without this, a bazillion messages
                                                        would be printed to the screen. </li>
                                                <li>The <span class="monospace">splash</span> bit gives us something to look at while the real stuff loads in the
                                                        background. Without this, we’d just be staring at a blank screen.</li>
                                        </ul>
                                </li>
                                <li>After the <span class="monospace">quiet splash</span>, add the text <span class="monospace">mem_sleep_default=deep</span>.</li>
                                <li>Now type <div class="realcode">sudo grub-mkconfig -o /boot/grub/grub.cfg</div>
                                </li>
                                <li>Reboot, test, and we’re done!</li>
                        </ol>
                    </p>
            </div>
        </div>
    )
}

export default Sleep;