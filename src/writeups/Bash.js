import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css'
// u gotta use react-router-dom, not just react-router
import Header from '../components/Header'
import MiniHeader from './MiniHeader'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';

function Bash(){
    return(
        <div>
            <Header />
            {MiniHeader("Beautifying the Bash Experience")}
            <div class="box">
                <h3>Customizing the Command Prompt</h3>
                    <p>
                        There’s an insane number of things you can do to improve your Bash experience, one
                        of which being changing up your command prompt.
                    </p>
                    <p>
                        There are couple of definitions to note within this section: the
                        environmental variables <span class="monospace">$PS1</span> and <span class="monospace">$PS2</span>. <span class="monospace">$PS1</span> refers to the primary
                        command prompt, the one you see every time you open up a Bash terminal.
                        <span class="monospace"> $PS2</span> refers to the secondary command prompt, which is
                        what you see when the terminal is expecting more input from you, like when
                        you use <span class="monospace">gcalccmd</span>.
                    </p>
                    <h4>The Problem</h4>
                    <p>
                        I found the default primary command prompt to be a bit too long; it was
                        eating up valuable screen space. Hence, I set it to something shorter,
                        my initials in bold green, and a dollar sign: <span class="monospace">\e[1;32mKR$ \e[m</span>.
                    </p>
                    <p>
                        However, when I used the <code class="inline">Ctrl</code>+<code class="inline">p</code> or 
                        the <code class="inline">Up Arrow</code> key to access the previous command,
                        it sometimes held a part of the previous line in the command line. This
                        did not affect the next command I ran, but it still bugged me.
                    </p>
                    <h4>Stuff that didn't work</h4>
                    <p>
                        Based on StackOverflow's answers, I enclosed my prompt 
                        in <span class="monospace">\[</span> and <span class="monospace">\]</span>, to 
                        get <span class="monospace">\[\e[1;32mKR$ \e[m\]</span>, but that
                        was even worse.
                    </p>
                    <h4>The Solution</h4>
                    <p>
                        Turns out, I didn't read the answers correctly. The solution is to
                        change the command prompt, the value of <span class="monospace">$PS1</span> by enclosing things that
                        begin with <span class="monospace">\e</span> in <span class="monospace">\[</span> and
                        <span class="monospace">\]</span>. These are the nonprintable portions.

                        I had to split this up into two different sections, one for each
                        nonprintable chunk. Hence, I was left 
                        with <span class="monospace">\[\e[1;32m\]</span> and <span class="monospace">\[\e[m\]</span> once I
                        had added in those sequences.

                        The final solution was <span class="monospace">\[\e[1;32m\]KR$
                            \[\e[m\]</span>.
                    </p>
            </div>

            <div class="box">
                <h3>Changing Appearance of Bash Layout</h3>
                    <p>
                        You can change the colors of how your directories, files and other things look when you
                        list out the contents of a directory. This stuff is stored in an environmental variable called
                        <span class="monospace"> $LS_COLORS</span>.
                    </p>
                    <p>
                        If you type <div class="realcode">echo $LS_COLORS</div> you’ll see a bunch of gunk. If you want to play around
                        before committing to anything, you can set another environmental variable to the value
                        of <span class="monospace">$LS_COLORS</span>, and make any changes you 
                        want to <span class="monospace">$LS_COLORS</span> to check it out. These
                        changes will go away once you kill the current terminal. If you want any changes to be
                        permanent, just add a line to your <span class="monospace">.bashrc</span> file.
                    </p>
                    <p>
                        There are a gazillion options to customizing your setup, but a basic one could read as
                        follows: <div class="realcode">di=1;36:*.png=1;35:ex=1;33</div>
                    </p>
                    <p>
                        Let’s go through it bit by bit:
                        <ol>
                            <li>Directories are bright cyan</li>
                            <li>All PNG images are purple</li>
                            <li>All executables are bright yellow</li>
                            <li>Entries are colon-separated</li>
                        </ol>
                        My current settings for this variable are in my <Link to="/writeup/dotfiles">.bashrc</Link> file.
                    </p>
	        </div>
        </div>
    )
}

export default Bash;
