import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import Contact from './components/Contact'
import Header from './components/Header'
import Body from './components/Body'
// u gotta use react-router-dom, not just react-router
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';

import Dotfiles from './writeups/Dotfiles'
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

import Portfolio from './Portfolio'
import Gallery from './Gallery'
import Footer from './Footer'
export const Home = () => (
	<div>
		<Header />
		<div className="rowC">
			<Body />
			<Gallery />
		</div>
		<Contact />
		<br></br>
		<br></br>
		<br></br>
		<hr></hr>
		<Footer />
	</div>
);

// after body, previously <Gallery />
// App Component
function App(){
	return(
		<div>
			<br /> <br />
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/writeup" component={ListofWriteUps}/>
				<Route exact path="/portfolio" component={Portfolio}/>
				<Route path="/writeup/dotfiles" component={Dotfiles} />
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
