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
                    <div class="box">
                        <Link to={this.props.path}>
                            <h2> {this.props.title}</h2>
                        </Link>
                        <p>
                            {this.props.desc}
                        </p>
                    </div>
                    <br></br>
                </div>
        );
    }
}

function ListofWriteUps (){
    return (
        <div>
            <WriteUpIntro />
            <h2 style={{textAlign: 'center'}}>{"Write-Ups"}</h2>
            { listwrite.map (item => <Makebutton title={item.title} path={item.path} desc={item.desc} /> ) }

        </div>
    )
}

export default ListofWriteUps;
