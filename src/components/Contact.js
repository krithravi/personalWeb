import React from 'react';
import '../style.css'
import { FaGithub, FaSpotify, FaEnvelope } from 'react-icons/fa';


// goes thru each item in media.json and does whatever IndivContact says
function Contact (){
	return (
		<div>
			<a href="https://github.com/krithravi">
				<FaGithub />
			</a> &nbsp;
			<a href="https://spoti.fi/2YJhxAV">
				<FaSpotify />
			</a> &nbsp;
			<a href="mailto:krithravi@utexas.edu">
				<FaEnvelope />
			</a>
		</div>
	)
}

export default Contact;
