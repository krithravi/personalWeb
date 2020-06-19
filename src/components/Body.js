import React from 'react';
import '../style.css'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';

function Body(){
	return (
		<div className="box" style={{marginLeft: "10%", width: "40%"}}>
			<p>
			Hi, I'm Krithika.
			<br /> <br />

			I'm a computer science student at the University of Texas at Austin.
			<br /> <br />

			I primarily use Python, R, and LaTeX for research. I've also used
			C++ and Java in other projects. I enjoy customizing and tinkering
			with my computers, and here are some {' '}
			<Link to="/writeup">write-ups</Link>
			{' '} based on 
			my experiences. I love Linux! I mainly use Ubuntu and Arch, but I 
			also use Debian, CentOS, and Suse.
			<br /> <br />

			I love learning languages and practicing taekwondo. 
			I also enjoy playing the violin and creating <Link to="/portfolio">artwork</Link> in my 
			free time.
			I really love amphibians and reptiles, but I'm partial to frogs.
			</p>
		</div>
	);
}

export default Body;
