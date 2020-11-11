import React from 'react';
import '../style.css'
import Header from '../components/Header'
import MiniHeader from './MiniHeader'

function Color(){
    return(
        <div>
            <Header />
			{MiniHeader("Changing Login Color")}
            <div class="box">
		        <h3>The Situation</h3>
                    <p>
                        I didn’t really like the <a href="https://design.ubuntu.com/brand/colour-palette/"> default shades of
                        purple that Ubuntu uses
                        for boot-up</a>, so I wanted to change them to a pretty shade of green.
                    </p>

		        <h3>Stuff that didn't work</h3>
                    <p>
                        I tried changing the other instances of the aubergine purple by changing one
                        of the instances of <span class="monospace">#2c001e</span>, but to my knowledge, that did nothing.
                    </p>

		        <h3>The Solution</h3>
                    <p>
                        To change the color of the login screen:
                        <ol>
                            <li>Type <div class="realcode">xhost +local: && sudo vim
                            /etc/alternatives/gdm3.css</div> You can change the editor
                            to Emacs or whatever you like. </li>
                            <li>Go to the block that begins with <span class="monospace">#lockdialogGroup</span> , and change the hex color from
                                <span class="monospace"> #2c001e</span> to whatever you want. I’m using
                                <span class="monospace"> #0a3621</span>. </li>
                        </ol>
                
                        You know how there's a screen that appears before your lock screen? That
                        screen was still purple, so I wanted to make that green as well.

                        <ol>
                            <li>Type <div class="realcode"> sudo vim /usr/share/plymouth/themes/ubuntu-logo/ubuntu-logo.script</div> </li>
                            <li>Go to the lines beginning with <span class="monospace">Window.SetBackground</span>. 
                                There’ll be two of them. </li>
                            <li>The default color on these lines is <span class="monospace">(0.16, 0.00, 0.12)</span>, which corresponds to <span class="monospace">#2c001e</span>. 
                                Change this (on both lines) to whatever you want (these are ratios). I’m using <span class="monospace"> (0.04, 0.21, 0.13) </span>. </li>
                            <li>Type <div class="realcode">sudo update-initramfs -u</div></li>
                            <li>That should be it! Check out <a href="https://askubuntu.com/questions/20829/how-can-i-change-the-purple-background-color-of-ubuntu-plymouth-boot-screen">this link</a> for more info. </li>
                        </ol>
                        When I boot up, there's a quick flash of purple that still appears, but
                        I haven't yet figured out why that is.
                    </p>
	        </div>
        </div>
    )
}

export default Color;