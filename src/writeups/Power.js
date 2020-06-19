import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css'
// u gotta use react-router-dom, not just react-router
import Header from '../components/Header'
import MiniHeader from './MiniHeader'
import { FaArrowRight } from 'react-icons/fa';
function Power(){
    return(
        <div>
            <Header />
            {MiniHeader("Power Management")}
            <div class="box">
                <h3>The Problem</h3>
                &Eacute;owyn's battery consumption is ... less than optimal. From what the
                ArchWiki recommended, I’m testing out powertop, a “tool provided by Intel to enable
                various powersaving modes in userspace, kernel and hardware. It is possible to monitor
                processes and show which of them are utilizing the CPU and wake it from its Idle-States, allowing to identify applications with particular high power demands.”
                <br></br>
                <br></br>
                I’m also testing out TLP for better power management.
                <h3>Stuff to watch out for</h3>
                <ul>
                        <li>You’re going to want to keep powertop running for a bit only connected to
                                <u>battery power</u>. If you don’t, powertop won’t have enough measurement data. </li>
                        <li> Some folks have reported issues with powertop and USB. The fix is going to the
                                <span class="b">Tunables</span> selection, and changing the settings at the appropriate line from “Good”
                                to “Bad.”</li>
                        <li> You can calibrate using <div class="realcode">sudo powertop --calibrate</div>
                        </li>
                </ul>


                <h3>Setting Up Powertop</h3>
                <ol>
                        <li> Install using <div class="realcode">sudo apt-get install powertop</div>
                        </li>
                        <li> Type <div class="realcode">sudo powertop</div> or <div class="realcode">sudo powertop --auto-tune</div>. Using the <span class="b">auto-tune</span> flag
                                                changes all of the Tunables to “Good.”</li>
                        <li> However, these changes aren’t permanent. If you want to make these changes permanent, install powertop as a service by typing the following:
                                <pre> 
                                    <div class="realcode">
                                    
                                    <span class="monospace">{'cat << EOF | sudo tee /etc/systemd/system/powertop.service'}</span>
                                    [Unit] <br></br>
                                    Description=PowerTOP auto tune <br></br>
                                    <br></br>
                                    [Service]<br></br>
                                    Type=idle<br></br>
                                    Environment="TERM=dumb"<br></br>
                                    ExecStart=/usr/sbin/powertop --auto-tune<br></br>
                                    <br></br>
                                    [Install]<br></br>
                                    WantedBy=multi-user.target<br></br>
                                    EOF<br></br>
                                    <br></br>
                                    systemctl daemon-reload<br></br>
                                    systemctl enable powertop.service <br></br>
                                    </div>
                                </pre>
                        </li>
                        <li>You should be good to go! Check out <a href="https://askubuntu.com/questions/112705/how-do-i-make-powertop-changes-permanent">this link</a> for more info.</li>
                </ol>


                <h3>Installing TLP</h3>
                <ol>
                        <li>I installed TLP using <div class="realcode">sudo apt install tlp</div>
                        </li>
                        <li>There’s an optional graphical UI for TLP called TLPUI. First, add the PPA repository
                                using <div class="realcode">sudo add-apt-repository ppa:linuxuprising/apps</div>
                        </li>
                        <li>Then, type <div class="realcode">sudo apt install tlpui</div>
                        </li>
                        <li>If you don’t like TLP, uninstall using <div class="realcode">sudo apt remove --autoremove tlpui</div> and go to <span class="a">Software & Updates</span> <FaArrowRight /> <span class="a">Other Software</span> to remove the PPA. </li>
                </ol>


        </div>
        </div>
    )
}

export default Power;