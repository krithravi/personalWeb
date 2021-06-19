import React from 'react';
import '../style.css'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';
import { FaMusic } from 'react-icons/fa'
function Body(){
	return (
		<div className="box" style={{ fontSize: "1.2em", width: "25%"}}>
			<p style={{textAlign:"left"}}>
				Hi! I'm Krithika!
				<br /> <br/>
				<FaMusic /> <i>These are a few of my favorite things ...</i> <FaMusic /> *
				<br />

				<Link to="/writeup">
					<button className="button introlinks">
						Tech write-ups
					</button>
				</Link>
				<a href="https://drive.google.com/drive/folders/1vEIXVBMUBvCClC2yCGhrjkv4_BeWShKK?usp=sharing">
					<button className="button introlinks">
						My uromastyx, Shakira
					</button>
				</a>
				<a href="https://drive.google.com/drive/u/1/folders/1f8TGQ-XJU5tH5svkpFxOnAOk6lcPrhwb">
					<button className="button introlinks">
						More reptile &amp; amphibian pics
					</button>
				</a>
				<a href="https://github.com/krithravi/ESL-notes/blob/main/main.pdf">
					<button className="button introlinks">
						Lecture notes for an ESL class I teach
					</button>
				</a>

				<br /> <br />

				<p style={{fontSize:"0.7em"}}>
					* I love Julie Andrews :)
				</p>
			</p>
		</div>
	);
}

export default Body;
