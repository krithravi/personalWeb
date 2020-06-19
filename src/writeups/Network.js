import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css'
// u gotta use react-router-dom, not just react-router
import Header from '../components/Header'
import MiniHeader from './MiniHeader'

function Network(){
    return(
        <div>
            <Header />
            {MiniHeader("Network Connection for Arch Linux ARM")}
            <div class="box">
                <h3>The Problem</h3>This is pretty fundamental: I just wanted to get
                access to WiFi, so that I could install the rest of my packages and
                continue setting up Pippin. I needed this to work before I could do much
                else - I was working without an Ethernet cable for most part. I ran
                everything as root for the following steps, so I have no clue which
                commands require superuser privileges.
        </div>
        <br></br>
        <div class="box">
                <h3>Stuff I tried that didn't work</h3>
                Holy heavens. This was my first
                time tinkering with Arch, and people did warn me that it'd be rough. I
                just hadn't imagined that it'd take me the better part of half a day to get
                the WiFi to work. I tried a bunch of different things ... none of which
                worked.
                <h4>Wifi Menu</h4>
                The first thing I tried was running the <span class="directory">wifi-menu</span> as root. It prompted me to pick the WiFi
                network and enter in the password. I tried a few different networks, all
                with correct passwords, but I kept getting an error message.
                <br></br><br></br>
                I also ran into other issues while trying to figure this out. Turns out,
                sometimes it'll save a network profile for you, which will make it so
                that that same network will not appear in the <span class="directory">wifi-menu</span>. These profiles will appear in the <span class="monospace">/etc/netctl</span> directory, which you'll have to delete
                if you want the corresponding networks to show up in the menu. This led
                me to the next thing I tried.
                <h4>Netctl</h4>
                I spent a ridiculous number of hours in the <span class="monospace">/etc/netctl</span> directory; I'm sick of it. By the way,
                everything in these steps was done as root, since (a) I didn't feel like
                typing <span class="monospace">sudo</span> every time, and (b), I couldn't even
                install it without network connection.
                <br></br><br></br>
                I ran the command <div class="realcode">lspci -k </div> to check if the
                kernel loaded the driver. I got no result. As I mentioned early, the
                <span class="directory">wifi-menu</span> and the <span class="directory">netctl</span> methods talk to each other,
                in terms of creating profiles. Since I'd already established that
                the <span class="directory">wifi-menu</span> method wasn't working to create
                a valid profile, I tried to make my own.
                <ol>
                        <li> To figure out the name of my interface, so I ran the
                                command <div class="realcode">iwconfig</div> I saw three labels
                                on the LHS, <span class="monospace">lo</span>, <span class="monospace">wlan0</span>, and <span class="monospace">eth0</span>. Hence,
                                my interface was called <span class="monospace">wlan0</span>.</li>
                        <li>I went to the <span class="monospace">examples</span> and took a look. I
                                made a copy of the <span class="monospace">wireless-wpa</span> profile in
                                the <span class="monospace">netctl</span> directory. </li>
                        <li> I edited my copy of the profile and filled in the necessary
                                components:
                                <ul>
                                        <li>Interface (in my case) is <span class="monospace">wlan0</span> </li>
                                        <li>ESSID is name of WiFi network</li>
                                        <li>key is the WiFi password</li>
                                </ul>
                        </li>
                        <li>Run the command <div class="realcode">netctl start
                                        my_profile</div>
                        </li>
                        <li>At this point, you should test your connection. Consider
                                <span class="directory">ping</span>ing a website you like. </li>
                        <li>If it works, great! You can set it to be long-term using the
                                command <div class="realcode">netctl enable
                                        my_profile</div> Since I didn't even get it to work
                                (the previous two steps), I didn't bother running this.</li>

                </ol>
                I tested this several times with different spellings of the WiFi
                networks (I don't think it would have made a difference
                either way, but it was worth a shot). I also repeated this
                process with the other <span class="monospace">wpa</span>-related
                example profile to no avail.

                <h4>WPA Supplicant </h4>
                I spend an inordinate amount of time watching videos on people
                setting up their machines with Arch, and some of them set up their
                WiFi by setting up their <span class="monospace">/etc/wpa_supplicant</span>
                directories. To be honest, I couldn't really follow them easily, but
                here's what I did based on the <a href="https://wiki.archlinux.org/index.php/WPA_supplicant"> ArchLinux page </a>. 
                I ran the following commands in the <span class="monospace">/etc/wpa_supplicant</span> directory:

                <pre>
                    <div class="realcode">
                        touch wpa_supplicant.conf <br></br>
                        echo "ctrl_interface=/run/wpa_supplicant" >> wpa_supplicant.conf <br></br>
                        echo "update_config=1" >> wpa_supplicant.conf <br></br>
                        wpa_supplicant -B -i wlan0 -c wpa_supplicant.conf <br></br>
                        wpa_cli <br></br>
                        </div>
                </pre>
                        After starting the program, I ran the commands
                        <pre><div class="realcode">
                            scan <br></br>
                            scan_results
                            </div>
                        </pre>
                        On the these commands, however, I got error messages. I didn't proceed with the
                        rest of the instructions, since I couldn't even see the available networks,
                        which was necessary to set the SSID and password of the network. However, I was
                        a dumb frog, and didn't realize that I just needed to read further on the page.
                        <br></br><br></br>
                        I don't know why none of these worked.
                </div>
                <br></br>
                <div class="box">
                        <h3>The Solution</h3>The solution is underwhelmingly simple, and
                        involves the WPA supplicant method:
                        <br></br><br></br>
                        I had to run:
                <pre><div class="realcode">
                    <span class="monospace">{'cat << EOF >> root/etc/systemd/network/wlan0.network'}</span> <br></br>
            
                    [Match] <br></br>
                    Name=wlan0 <br></br>
                    <br></br>
                    [Network]<br></br>
                    DHCP=yes <br></br>
                    EOF <br></br>
                    <br></br>
                    <span class="monospace">{'wpa_passphrase "${SSID}" "${PASS}" > root/etc/wpa_supplicant/wpa_supplicant-wlan0.conf'}</span> <br></br>
                    <br></br>
                    ln -s \ <br></br>
                    /usr/lib/systemd/system/wpa_supplicant@.service \ <br></br>
                    root/etc/systemd/system/multi-user.target.wants/wpa_supplicant@wlan0.service <br></br>
                    </div>
                </pre>


                            replacing <span class="monospace">{'$"{SSID}"'}</span> with the name of the network, and the
                            <span class="monospace">{'$"{PASS}"'}</span> with the password.
<br></br><br></br>
This finally worked :)

<br></br><br></br>
I'm adding this at another date. Another solution that's substantially easier
is to hook yourself up to an Ethernet connection, and install the <span class="directory">network manager</span>, which comes with both <span class="directory">nmcli</span> and <span class="directory">nmtui</span> programs, which are
pretty intuitive to use.
<br></br><br></br>
While I had initially tried to install this program, I hadn't realized that
being on a university campus (with the weird login page) may have been affecting
my ability to login. Again, I'm not sure, but when I took Pippin back home and
retried some things, I was magically able to install this. I figured this out by
reflashing Pippin with Debian, but running into the same issues (not being able
to install/update anything).
<br></br><br></br>
Moral of the story? Do this at home.
</div>
        </div>
    )
}

export default Network;