import React from 'react'
import '../style.css'
import Header from '../components/Header'
import MiniHeader from './MiniHeader'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';


function Organization() {
	return (
		<div>
			<Header />
			{MiniHeader("Organization")}
			<div class="box">
				<h3>Context</h3>
				<p>
					Every year, my school teachers would ask us to write down what we
					wanted to learn or improve in that year.
					For me, the answer was always the same: I wanted to "be more organized."
					Finding anything on my desk became near impossible, 
					and the idea of emptying my desk at the end of the school
					year felt like a Herculean task.
				</p>
				<p>
					I couldn't do it for the life of me. It wasn't for lack of effort or desire,
					nor the lack of aid. It got to where my teachers
					would tell me to tidy up my papers <em>in front of the whole class</em>,
					or the nicer ones
					would pull me aside before class and offer to help me file away
					my things.
					And every year, without fail, I'd make a list of things to help myself
					get organized.
					I'd tell myself that with that new folder or binder, or whatever
					new system of ordering my things, I'd be able to turn over a new leaf.
					Yet, whatever I'd picked wouldn't last more than a month, if even that.
				</p>
				<p>
					I'm reminded now of my fifth grade substitute instructor who'd
					tried to help me. He told me to divide my papers into three categories,
					immediate use, reference, and to recycle. That was probably a fantastic
					system, but it didn't work for someone for whom the idea of parting with
					papers felt more painful than putting a hand on a stove.
					That was the crux of it: I felt that I <em>needed</em> every last item;
					for, what if I discarded one and that was the one I needed?
				</p>
				<p>
					I hadn't realized that by keeping every last sheet of paper I ever got
					(it weighed around 8 pounds, if you were wondering), I was creating the
					very problem I was seeking to avoid: the problem of not being able to
					find what I needed. In fact, I used to misplace my homework all the time
					by leaving it on my desk and not taking it with me to school. Even though
					I didn't realize it at the time, parting with things I no longer wanted
					or needed was what I needed most.
				</p>
				<h3>What worked/didn't work</h3>
				<p>
					When I went to TAMS, I felt a newfound sense of freedom.
					I couldn't bring everything I had ever owned, since I didn't have
					that much space. My dorm had 
				</p>
			</div>
		</div>
	)
}

export default Organization;
