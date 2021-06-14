import React from 'react'
import '../../style.css'
import Header from '../../components/Header'
import MiniHeader from './MiniHeader'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';
var mePic = require('../me-res.png')
function CS371P2() {
	return (
		<div>
			<Header />
			{MiniHeader("CS371g Summer 2021: Krithika Ravishankar - Post 1")}
			<div class="box">

				<h3>What did I do last week?</h3>
				<p>
					I worked on some data science-y things and did a whole lot of cleaning!
					Cleaning makes me feel a lot more relaxed, even though it's pretty exhausting.
					I watched a ton of reality TV and got a bit more familiar with GCP.
					I also got started on the Collatz project.
				</p>

				<h3>What's in my way?</h3>
				<p>
					Work's been pretty busy, but I'm really enjoying learning about different
					features in the datasets I'm working with.
				</p>
				<p>Procrastination, and not knowing where to start's also been in my way.
					When I'm not sure where
					to start a project, I tend to spend most of my time cleaning and trying to do
					everything else on the planet other than the thing I'm supposed to be working on.
					Once I get started, though, it's not that bad.
				</p>

				<h3>What will I do next week?</h3>
				<p>
					I'll work on Collatz and my internship! I'll also finish up a few things for
					research, which I've been procrastinating on. I'll also help my parents
					with some cleaning.
				</p>
					

				<h3>What did I think of Paper #2: makefile?</h3>
				<p>
					I really enjoyed it! Going over all the different pieces of the makefile really
					helped me understand how the different pieces all worked together. I thought
					the bit about having different OS-specific set up instructions was really interesting;
					I didn't know you could implement it like that! I also didn't know
					that <span class="monospace">uname</span> worked on Windows. I also learned a fair
					bit about quoting in bash after losing myself on a few man-page rabbit holes :)
				</p>

				<h3>What was my experience of assertions, unit tests, coverage, and IsPrime?</h3>
					<p>
					These seem like really useful tools! Incidentally, I've seen assertions
					used for testing before, and they were always a huge pain, since they'd never
					move onto the rest of the tests. The coverage feature seems really cool;
					I'm looking forward to checking it out in this project, although I don't really
					understand how to use it. I didn't think of
					the <span class="monospace">+= 2</span> optimization in the loop in IsPrime, but hopefully
					future-me will thing of those sorts of things in the future.
				</p>

				<h3> What made me happy this week?</h3>
				<p>
					I made banana bread! Dessert is always lovely, and my family loved it.
				</p>

				<h3>Pick-of-the-Week/Tip-of-the-Week</h3>
				<p>
					<a href="https://neomutt.org/">Neomutt</a>! It's a command-line mail client.
					It goes with Vim keybindings, and it's super customizable. I'm currently using
					the dracula theme, and it looks pretty cool. It's way faster and more lightweight than
					a browser or GUI app based client. I personally don't like having my notifications
					on, since they're a bit distracting, and this seems to be working out quite nicely
					for me. The setup's not fun, but it's not that bad.
				</p>
				<img src={mePic} />
			</div>
		</div>
	)
}

export default CS371P2;
