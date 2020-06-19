import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import Header from './components/Header'

var objwidth=375;
function Porfolio (){
    return(
        <div>
            <Header />

            <StackGrid
                    columnWidth={400}
            >
                <div><img src={ require('./artwork/mellon.jpg') }alt="Doors of Durin" width={objwidth} /> </div>
                <div><img src={ require('./artwork/anita.jpg') }alt="Anita, a clay frog" width={objwidth} /> </div>
                <div><img src={ require('./artwork/corona.jpg') }alt="2020 with the Coronavirus" width={objwidth} /> </div>
                <div><img src={ require('./artwork/ganesha.jpg') }alt="Ganesha" width={objwidth} /> </div>
                <div><img src={ require('./artwork/skull.jpg') }alt="Skull" width={objwidth} /> </div>
                <div><img src={ require('./artwork/kryptonite.jpg') }alt="Kryptonite Soda" width={objwidth} /> </div>
                <div><img src={ require('./artwork/mike.jpg') }alt="Mike Wazowski" width={objwidth} /> </div>
                <div><img src={ require('./artwork/narsil.jpg') }alt="Shards of Narsil" width={objwidth} /> </div>
                <div><img src={ require('./artwork/sting.jpg') }alt="Sting" width={objwidth} /> </div>
                <div><img src={ require('./artwork/seminar.jpg') }alt="Seminar doodle" width={objwidth} /> </div>
                <div><img src={ require('./artwork/roses_wallhanger.jpg') }alt="Roses" width={objwidth} /> </div>
                <div><img src={ require('./artwork/sauron.jpg') }alt="Sauron" width={objwidth} /> </div>
                <div><img src={ require('./artwork/brain.jpg') }alt="Brain" width={objwidth} /> </div>
                <div><img src={ require('./artwork/jellyfish.jpg') }alt="Jellyfish" width={objwidth} /> </div>
                <div><img src={ require('./artwork/geodefish.jpg') }alt="Geodefish" width={objwidth} /> </div>
                <div><img src={ require('./artwork/selfportrait.jpg') }alt="Me" width={objwidth} /> </div>
                <div><img src={ require('./artwork/peacock_wallhanger.jpg') }alt="Peacock" width={objwidth} /> </div>
                <div><img src={ require('./artwork/scylla_charybdis.jpg') }alt="Scylla and Charybdis" width={objwidth} /> </div>
                <div><img src={ require('./artwork/abstract_charcoal.jpg') }alt="Abstract Charcoal" width={objwidth} /> </div>
                <div><img src={ require('./artwork/abstract_values_colored.jpg') }alt="Abstract Values Colored" width={objwidth} /> </div>
                <div><img src={ require('./artwork/geometric_wallhanger.jpg') }alt="Geometric Wallhanger" width={objwidth} /> </div>
                <div><img src={ require('./artwork/rainbow_flower.jpg') }alt="Rainbow Flower" width={objwidth} /> </div>
                <div><img src={ require('./artwork/volcano.jpg') }alt="Volcano" width={objwidth} /> </div>
                <div><img src={ require('./artwork/dory.jpg') }alt="Dory" width={objwidth} /> </div>
                <div><img src={ require('./artwork/coqui.jpg') }alt="Coqui" width={objwidth} /> </div>
                <div><img src={ require('./artwork/frogfront.jpg') }alt="Front of Frog" width={objwidth} /> </div>
                <div><img src={ require('./artwork/aquariumjelly.jpg') }alt="Jelly" width={objwidth} /> </div>
                <div><img src={ require('./artwork/ganesh1.jpg') }alt="" width={objwidth} /> </div>
                <div><img src={ require('./artwork/elephant2.jpg') }alt="" width={objwidth} /> </div>
                <div><img src={ require('./artwork/origami_frogs.jpg') }alt="Origami Frogs" width={objwidth} /> </div>
            </StackGrid>
        </div>
    );
}

export default Porfolio;