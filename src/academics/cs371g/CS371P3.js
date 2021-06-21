import React from 'react'
import '../../style.css'
import Header from '../../components/Header'
import MiniHeader from './MiniHeader'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';
var mePic = require('../me-res.png')
function CS371P3() {
	return (
		<div>
			<Header />
			{MiniHeader("CS371g Summer 2021: Krithika Ravishankar - Post 2")}
			<div class="box">

				<h3>What did I do last week?</h3>
				<p>
					I finished up Collatz and created notes for a volunteering program I work for.
					I also learnt about different machine learning models and scenarios where
					it'd be more useful to use one model versus another.
				</p>

				<h3>What's in my way?</h3>
				<p>
					Feeling stressed about pretty random things, and feeling unable to start things
					because of that anxiety. I've got to write up a few things for research,
					and I'm not really looking forward to that, if I'm being honest. I also
					have to write up a few things for a course I'm teaching, so that's also keeping me
					pretty busy. Work's time consuming, but it's fun, so I'm looking forward to that.
				</p>

				<h3>What will I do next week?</h3>
				<p>
					I'll work on the Netflix assignment, and do some writeups for research.
					I think I'll feel a bit more free emotionally once I'm done with that.
					I'll probably continue to help my parents clean the house.
				</p>


				<h3>What did I think of Paper #3: Pair Programming?</h3>
				<p>
					It seemed pretty interesting! We had assignments where we could use
					pair programming back in CS314, and I read the same article for that
					class. I'm choosing to work with a partner for the Netflix project,
					and I hope the experience will be educational for the both of us.
				</p>

				<h3>What was my experience of value vs. pointer vs. reference and Incr?</h3>
				<p>
					The bit about the prefix being faster than the postfix was really interesting;
					I didn't know that the compiler optimized postfixes for primitive types.
					I hadn't really heard of or used references before, so that was pretty fun.
					The pointer and value stuff was fairly similar to what we learned in CS429.
				</p>

				<h3> What was my experience of Boost Serialization and RMSE?</h3>
				<p>
					Boost serialization was a fair bit confusing in the beginning,
					but the lecture clarified a lot of things. Walking through the file
					line-by-line as we did in class helped me a lot. The RMSE calculation
					was fairly straight forward.
				</p>
				<h3>What made me happy this week</h3>
				<p>
					I baked chocolate chip cookies! The last time I made cookies,
					I didn't know how to use the oven properly, so they were a bit cakey.
					Fortunately, this time they turned out great!
				</p>

				<h3>Pick-of-the-Week/Tip-of-the-Week</h3>
				<p>
					Calls are significantly easier than exchanging info via text message.
					I'm finding that scheduling a call with someone leaves us both with a much
					better understanding and clearer expectations than trying to do all
					communications via instant messaging or email. After a given number of back-and-forths
					on text message or email, it's probably useful to set up a meeting.
					It's also way more personal!
				</p>
				<img src={mePic} />
			</div>
		</div>
	)
}

export default CS371P3;
