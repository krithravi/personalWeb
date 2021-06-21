import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import Contact from './components/Contact'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import NoMatch from './components/NoMatch'
// u gotta use react-router-dom, not just react-router
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';

import Preferences from './writeups/Preferences'
import Debian from './writeups/Debian'
import Map from './writeups/Map'
import Color from './writeups/Color'
import DeskEnv from './writeups/DeskEnv'
import Bash from './writeups/Bash'
import Tweaks from './writeups/Tweaks'
import Browser from './writeups/Browser'
import ListofWriteUps from './writeups/ListofWriteUps';
import Network from './writeups/Network';
import Sleep from './writeups/Sleep';
import Power from './writeups/Power'
import Virtualbox from './writeups/Virtualbox'
import Scroll from './writeups/Scroll'
import Practices from './writeups/Practices'
import Dislike from './writeups/Dislike'
import Spotify from './writeups/Spotify'
import Arch from './writeups/Arch'

import Academics from './academics/Academics'

import GenericAndSTL from './academics/cs371g/GenericAndSTL'
import CS371P1 from './academics/cs371g/CS371P1'
import CS371P2 from './academics/cs371g/CS371P2'
import CS371P3 from './academics/cs371g/CS371P3'

import Portfolio from './Portfolio'

export const Home = () => (
	<div>
		<Header />
		<Body />
	</div>
);

// App Component
function App(){
	return(
		<div>
			<br /> <br />
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/writeup" component={ListofWriteUps}/>
				<Route path="/writeup/preferences" component={Preferences} />
				<Route path="/writeup/debian" component={Debian}/>
				<Route path="/writeup/map" component={Map}/>
				<Route path="/writeup/color" component={Color}/>
				<Route path="/writeup/deskenv" component={DeskEnv}/>
				<Route path="/writeup/bash" component={Bash}/>
				<Route path="/writeup/tweaks" component={Tweaks}/>
				<Route path="/writeup/browser" component={Browser}/>
				<Route path="/writeup/network" component={Network}/>
				<Route path="/writeup/sleep" component={Sleep}/>
				<Route path="/writeup/power" component={Power}/>
				<Route path="/writeup/virtualbox" component={Virtualbox} />
				<Route path="/writeup/scroll" component={Scroll} />
				<Route path="/writeup/practices" component={Practices} />
				<Route path="/writeup/dislike" component={Dislike} />
				<Route path="/writeup/spotify" component={Spotify} />
				<Route path="/writeup/arch" component={Arch} />
				<Route exact path="/academics" component={Academics} />
				<Route exact path="/academics/cs371g" component={GenericAndSTL} />
				<Route path="/academics/cs371g/post1" component={CS371P1} />
				<Route path="/academics/cs371g/post2" component={CS371P2} />
				<Route path="/academics/cs371g/post3" component={CS371P3} />
				<Route path='*' component={NoMatch} />
			</Switch>

		</div>
	);
}


ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);
