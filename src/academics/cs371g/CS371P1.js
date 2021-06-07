import React from 'react'
import '../../style.css'
import Header from '../../components/Header'
import MiniHeader from './MiniHeader'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';
var mePic = require('../me-res.png')
function CS371P1() {
	return (
		<div>
			<Header />
			{MiniHeader("CS371g Summer 2021: Krithika Ravishankar - Post 1")}
			<div class="box">
				<h3>Where did I grow up?</h3>
				<p>Texas! I'm living in Dallas now :) </p>

				<h3>Why did I pick CS?</h3>
				<p>Oh, boy, that's a fun one. Shower thoughts! 
					I was daydreaming about automating a simple encryption process ('twas an ADFGVX
					cipher, if you were curious),
					when I remembered that I'd taken a previous course a while back in C++.
					I spent the rest of the day trying to implement it.
					I'd gotten there a part of the way - I could only get to the Polybius square phase - 
					but the process of translating the encryption algorithm into code, and figuring
					out what pieces went where felt so exciting. I'm pretty sure I told my parents
					that I wanted to major in CS, not biochem, about a month later.
				</p>

				<h3>My experience in C++</h3>
				<p>
					C++ was my very first programming language, so it'll always hold
					a special place in my heart. I haven't really kept up with it though,
					so I don't have very much experience at all. I took a course in C, though,
					which I'm more familiar with. I'm really excited to learn more about C++
					this semester!
				</p>

				<h3>How do I feel about the first class?</h3>
				<p>
					I liked it! I'm a bit scared about the quizzes, and the
					overall grading scheme is unfamiliar. The concept of grading
					whether or not an assignment meets specifications makes sense, though,
					and seems to be applicable in real-life dev scenarios. Hopefully,
					the grading scheme will encourage me to pick up some better study
					and work habits! Fingers crossed :)
				</p>
			
				<h3>How do I feel about cold-calling?</h3>
				<p>
				It seems like a really cool idea! I remember my middle school Spanish teacher
				used to do something like that; it was a great way to keep us on our toes.
				Personally, I have a really hard time staying focused in lecture, so I hope
				this helps me out! Also, learning from other's mistakes is super valuable,
				so I hope this works out well for the rest of the semester.
				</p>

				<h3> One thing that made me happy </h3>
				<p>
					I washed my sheets! There's nothing quite like climbing into a clean bed
					with freshly washed sheets.
				</p>

				<h3>Pick-of-the-Week/Tip-of-the-Week</h3>
				<p>
				<a href="https://www.calcurse.org/">Calcurse</a>! It's a calendar app for Linux
				that lets you manage a list of todos and appointments. I love that you can modify
				data using both the command line and through a terminal interface. The key bindings
				are super customizable, although I'm good with the defaults (just Vim keybindings).
				</p>
				<img src={mePic} />
			</div>
		</div>
	)
}

export default CS371P1;
