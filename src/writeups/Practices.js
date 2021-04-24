import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css'
// u gotta use react-router-dom, not just react-router
import Header from '../components/Header'
import MiniHeader from './MiniHeader'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';

function Practices(){
	return(
		<div>
			<Header />
			{MiniHeader("Good practices")}
			<div class="box">
				<h3>Don't be me</h3>
					<p>
						Listen. I've learned a few things the hard way, so I'm putting this
						down. These are all things that I wish someone had told me earlier, or
						things that people told me that I unfortunately ignored.
						<ol>
							<li>
								<b>Back up your stuff. </b>
								<p>
									You'll need a place to back up to, and optionally a script/tool to help you/a reminder
									<br/> <br/>
									I like compressing my files before backing up,
									but that's optional. There are utilities (I know Ubuntu has
									one by default) to do this for you, if you like!.
									The reason I recommend having a script/cronjob to do this for
									you, or using a built-in tool, is because you're way more likely to back up
									when it's that easy or automated.
									If you don't have this automated, you might want to set up a reminder to do this regularly!
									<br /> <br />
									On a side note, also back up before you do anything major, like
									partitioning your drive.
									<br />
									The pain and anxiety you'll feel when you've lost something important
									isn't worth it at all. Please help yourself.
								</p>

							</li>
							<li>
								<b>Keep your files organized and give them useful names</b>
								<br/>
								<p>
									Concerning most non-hidden files in my home directory,
									my rule of thumb is that:
								</p>
								<ol>
									<li>
										If there exists a file that contains <span class="monospace">someContent</span>,
										it lives in <span class="monospace">path</span> and is called <span class="monospace">fileName</span>.
									</li>
									<li>
										If a file called <span class="monospace">fileName</span> lives
										in <span class="monospace">path</span>, it contains <span class="monospace">someContent</span>.
									</li>
									<li>
										If a file called <span class="monospace">fileName</span> does not
										live in <span class="monospace">path</span>, there
										is no file containing <span class="monospace">someContent</span> in the whole file system.
									</li>
								</ol>
								<p>
									It might sound extreme, especially if you're used to listing
									out the files every time and guessing which one is the one you're
									looking for. However, staying organized will radically
									improve your quality of life though
									in the long run. It can be tempting to name
									files <span class="monospace">temp</span>, <span class="monospace">test</span>,
									and <span class="monospace">foo</span>, but that scheme isn't doing you
									any favors.
								</p>
								<p>
									Go ahead and get in the habit of naming things in a Linux-compatible way.
									Don't include spaces in your file/directory names; it'll make
									any CLI thing with Linux painful. This bit comes back to the file organization concept,
									have a uniform way of dealing with natural spaces between words. Some folks like
									camelCase, others-like-hyphens, and others_prefer_underscores.
								</p>
								<p>
									Unfortunately, there's not a one-ring-to-rule-them-all
									solution: camelCase doesn't work in React file naming, we can't use hyphens in Java identifiers,
									and you might have to escape certain files if they contain underscores in certain
									languages (LaTeX does this, if I remember right).
									Find a way that works for you, though. That will probably change depending on
									what you're doing.
									Begin your names with a non-lowercase character;
									no one has the energy to hit the <span class="directory">Shift</span> key every
									time (tabbing will take you through the rest!).
								</p>

							</li>
							<li>
								<b>Do your updates and upgrades</b>
								<p>
									They're good for your computer (and you). Do 'em regularly. :)
								</p>
							</li>
							<li>
								<b>Before you install a thing (package, repo, ppa), find out how to uninstall it. </b>
								<p>
									The docs are usually a great place to go for this! Also, you might be able to message the
									developer sometimes if you need a thing.
								</p>
							</li>
							<li>
								<b>The ArchWikis are golden</b>
								<p>
									That, combined with forums and the official docs are your best friends in debugging.
									More often than not, the ArchWikis have a copy-pastable solution to whatever
									issue I'm having, no matter which distro I'm working with.
								</p>
							</li>
							<li>
								<b>Make a copy of anything you're editing</b>
								<p>
									If you're making significant changes to an important file,
									make a copy of that file and name appropriately.
									For example, you could copy
									the file <span class="monospace">.bashrc</span> to <span class="monospace">.old_bashrc</span>,
									and then make all the changes/test to the actual file without too much fear. The
									file <span class="monospace">.old_bashrc</span> won't be executed due its name.
								</p>
							</li>
							<li>
								<b>Test your scripts before running them for real</b>
								<p>
									Please, please, test your scripts on a set of representative files before running them
									on a whole filesystem with 100+ GB of files. This <em>especially</em> holds true with commands
									such as <span class="monospace">sed</span> and recursive things.
									Ask me about "wtypeype" if you want to hear about my pain on November 30, 2018.
								</p>
							</li>
							<li>
								<b>Version control</b>
								<p>
									Git is probably the most common, and it's really easy to use. Please track your versions with
									<em>meaningful</em> names; future you will thank present you when your code suddenly stops working.
								</p>
							</li>
						</ol>
					</p>

			</div>

		</div>
	)
}

export default Practices;
