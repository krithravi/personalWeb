import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css'
// u gotta use react-router-dom, not just react-router
import Header from '../components/Header'
import MiniHeader from './MiniHeader'
import { FaArrowRight } from 'react-icons/fa';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import EmbeddedGist from '../EmbeddedGist';


import Gist from 'react-gist';

function Dotfiles(){
    return (
        <div>
            <Header />
            {MiniHeader("Dotfiles and Configs")}
            <div className="box">
                Feel free to use
                however much (or little) you like! Again, these
                are compiled from other folks' dotfiles and config.
                <br></br>
                <br></br>
                
            </div>
            <Accordion allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton >
                            .bashrc
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="cropUp">
                        <EmbeddedGist gist="krithravi/3c6386312cff303d1e7becbb08c26c74" />
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton >
                            .bash_aliases : A selected list.
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="cropUp">
                        <EmbeddedGist gist="krithravi/26a9fa5c5013b94a7cb6a5cf05fb6d2c" />
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            .vimrc
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="cropUp">
                        <EmbeddedGist gist="krithravi/a6139669797043aa240114adadf24cdf" />
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            zathurarc
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="cropUp">
                        <EmbeddedGist gist="krithravi/d8fdbb8b7c7d9fe60a4c0160f0bc38a4" />
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            style.conf for Zim
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="cropUp">
                        <EmbeddedGist gist="krithravi/b39455d54a6193bab30f56a4d1e0250a" />
                    </AccordionItemPanel>
                </AccordionItem>


            </Accordion>
        </div>
    )
}

export default Dotfiles;