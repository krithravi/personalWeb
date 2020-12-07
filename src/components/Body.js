import React from 'react';
import '../style.css'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';

function Body(){
	return (
		<div className="box" style={{marginLeft: "10%", width: "40%"}}>
			<p>
                Hi, I'm Krithika!
                <br /> <br />

                I'm a computer science student at the University of Texas at Austin.
                I'm minoring in business Spanish.
                <br /> <br />

                I enjoy customizing
                my setups! Here are some {' '}
                <Link to="/writeup">write-ups</Link>
                {' '} based on 
                my experiences.
                <br /> <br />

                I love learning languages and practicing taekwondo. 
                I also enjoy playing the violin and creating <Link to="/portfolio">artwork</Link> in my 
                free time.
                I love amphibians and reptiles, but I'm partial to frogs.
                I have the cutest uromastyx in the world, <a href="https://www.instagram.com/shakira.uro"> Shakira</a>.

			</p>
		</div>
	);
}

export default Body;
