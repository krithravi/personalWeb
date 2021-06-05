import React from 'react';
import '../style.css'
import media from '../media.json'
import 'font-awesome/css/font-awesome.css';


const iconstyle = {
	color: "#fff",
	size: "9x"
}

const btnstyle = {

	color: "fff",
}

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
                        style={iconstyle}
						className={this.props.icon}>
                    </i> {this.props.name}
                </button>
    }
}

// goes thru each item in media.json and does whatever IndivContact says
function Contact (){
    return (
        <span style={btnstyle}>
            { media.map (item => <IndivContact link={item.link} icon={item.icon}/> ) }
        </span>
    )
}

export default Contact;
