import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css'
// u gotta use react-router-dom, not just react-router
import Header from '../components/Header'
import MiniHeader from './MiniHeader'
import { FaArrowRight } from 'react-icons/fa';
import '../style.css';

import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import EmbeddedGist from '../EmbeddedGist';

function Dotfiles(){
	return (
		<div>
			<Header />
			{MiniHeader("Dotfiles and Configs")}
			<div className="box">
				<p>
					Feel free to use
					however much (or little) you like! Again, these
					are compiled from other folks' dotfiles and config.
					A more complete and updated version can probably be found
					in <a href="https://github.com/krithravi/dotfiles">this GitHub repo</a>.
				</p>
			</div>
			<Accordion allowZeroExpanded>
				<AccordionItem>
					<AccordionItemHeading>
						<AccordionItemButton>
							.bashrc
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel>
						<EmbeddedGist gist="krithravi/3c6386312cff303d1e7becbb08c26c74" />
					</AccordionItemPanel>
				</AccordionItem>

				<AccordionItem>
					<AccordionItemHeading>
						<AccordionItemButton>
							.aliasrc : A selected list.
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel>
						<EmbeddedGist gist="krithravi/26a9fa5c5013b94a7cb6a5cf05fb6d2c" />
					</AccordionItemPanel>
				</AccordionItem>


				<AccordionItem>
					<AccordionItemHeading>
						<AccordionItemButton>
							.vimrc
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel>
						<EmbeddedGist gist="krithravi/9067f3f049d4536c93d7450905d5099e" />
					</AccordionItemPanel>
				</AccordionItem>

				<AccordionItem>
					<AccordionItemHeading>
						<AccordionItemButton>
							zathurarc
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel>
						<EmbeddedGist gist="krithravi/d8fdbb8b7c7d9fe60a4c0160f0bc38a4" />
					</AccordionItemPanel>
				</AccordionItem>
				<AccordionItem>
					<AccordionItemHeading>
						<AccordionItemButton>
							i3 config
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel>
						<EmbeddedGist gist="krithravi/7720898c62b7b1de1c28ec28e9fc1cda" />
					</AccordionItemPanel>
				</AccordionItem>
				<AccordionItem>
					<AccordionItemHeading>
						<AccordionItemButton>
							polybar config
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel>
						<EmbeddedGist gist="krithravi/08566f50e69b867e64505d0401ee9e4c" />
					</AccordionItemPanel>
				</AccordionItem>
			</Accordion>
		</div>
	)
}

export default Dotfiles;
