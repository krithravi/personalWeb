import React from 'react';
import '../style.css'
import media from '../media.json'
import 'font-awesome/css/font-awesome.min.css';
/* btw, the json idea worked way better than storing them all as vars
bc u didn't lose your mind naming things and checking scope things.
*/


class IndivContact extends React.Component {
    // gotta bind it bc react is strange boi
    constructor(props) {
        super(props);
        this.workingLink = this.workingLink.bind(this);
    }
    // the fn that actually gets u the link
    workingLink () {
        window.location.href=this.props.link;
    }

    // oooh you don't need to to use quotes anymore lol
    // also onclick becomes onClick bc react is sPeciAl
    render (){
        return <button
                    className ="button write"
                    onClick={this.workingLink} >
                    <i
                        style={{color: "var(--navy-blue)"}}
                        className={this.props.icon}>
                    </i> {this.props.name}
                </button>
    }
}

// goes thru each item in media.json and does whatever IndivContact says
function Contact (){
    return (
        <div className="box" style={{marginLeft: "10%", width: "40%"}}>
            <h2> Contact Me!</h2>
            { media.map (item => <IndivContact name={item.name} link={item.link} icon={item.icon}/> ) }
        </div>
    )
}

export default Contact;
