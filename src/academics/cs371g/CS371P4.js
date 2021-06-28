import React from 'react'
import '../../style.css'
import Header from '../../components/Header'
import MiniHeader from './MiniHeader'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';
var mePic = require('../me-res.png')
function CS371P4() {
	return (
		<div>
			<Header />
			{MiniHeader("CS371g Summer 2021: Krithika Ravishankar - Post 4")}
			<div class="box">

				<h3>What did I do last week?</h3>
				<p>
					I finished up the Netflix project and played with Rapid Miner!
					I had loads of issues with getting the GitLab Pipeline to work, but
					I learnt a lot in the experience.
					I also explored <span class="monospace">matplotlib</span> and learnt about different
						sorts of data analysis.
				</p>

				<h3>What's in my way?</h3>
				<p>
					I can't think of very much! Work's been pretty fun, and I think I'm reaching
					a decent work-study-relax balance. I hope it stays this way for the rest
					of the semester!
				</p>

				<h3>What will I do next week?</h3>
				<p>
					I'm curious about what the next project will be, and whatever that is, I'll
					get started on it. I'll also do whatever the next thing I'm asked to do
					for my internship. I need to type up some notes for another course, which
					is pretty boring, but it's something I definitely need to get done!
				</p>


				<h3>What did I think of Paper #4: Twice As Good?</h3>
				<p>
					I understand a lot of the arguments made, but I found the paper itself
					to not offer much on its own. However, some of the research the paper
					cited was pretty interesting, and I wonder how they evaluated which factors
					and what sorts of training best help in reducing discrimination and
					supporting minorities.
				</p>

				<h3>What was my experience of exceptions, consts, algorithms, and iterators?</h3>
				<p>
					I don't think I've ever used <span class="monospace">const</span> so much
					in my life as I have in this week. The differences in the locations and
					the read/write access were really interesting! I love the idea of being
					able to pass a read-only pointer instead of having to make a copy!
					I'm not a big fan of iterators, but that's probably due to my bias from Java.
					The directional aspect was something I'd never seen before, so I'm still
						a bit scared to use them.
					However, once I use or implement them myself, I think I'll get a better understanding.
				</p>

				<h3>What made me happy this week</h3>
				<p>
					I went to the gym for the first time since March 2020!
					It feels so good to get back into lifting.
					I'm incredibly sore, but I'm happy to work on getting stronger again!
				</p>

				<h3>Pick-of-the-Week/Tip-of-the-Week</h3>
				<p>
					<a href="https://gohugo.io/">Hugo</a>!
					My current website is built with React, but I'm probably
					going to move to this Markdown based framework, since it's a lot
					more lightweight and easier to maintain.
					I'm not seeing any reason to use a bloated framework for a static site,
					so I'm probably going to move everything to Hugo within the next week!
				</p>
				<img src={mePic} />
			</div>
		</div>
	)
}

export default CS371P4;
