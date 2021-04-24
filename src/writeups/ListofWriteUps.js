import React from 'react';
import '../style.css'
import listwrite from './listwrite.json'
import { Switch, Link, Route, BrowserRouter as Router, IndexRoute } from 'react-router-dom';
import WriteUpIntro from './WriteUpIntro'
import MiniHeader from './MiniHeader'


class Makebutton extends React.Component {

	render (){
		return (
				<div>
					<div class="box" style={{color: "green", border: '1px solid #0cf2b4'}}>

						<Link to={this.props.path}>
							<span style={{color: '#0cf2b4', fontSize: 28}}>{this.props.title}</span>
						</Link>
						<br />
						<span style={{fontSize: 18}}>{this.props.date}</span>
						<p>
							{this.props.desc}
						</p>
					</div>
					<br />
				</div>
		);
	}
}

function ListofWriteUps (){
	return (
		<div>
			<WriteUpIntro />
			<h2 style={{textAlign: 'center'}}>{"Write-Ups"}</h2>
			{ listwrite.map (item => <Makebutton title={item.title} path={item.path} date={item.date} desc={item.desc} /> ) }
		</div>
	)
}

export default ListofWriteUps;
