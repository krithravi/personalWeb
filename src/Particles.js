import React, { Component } from 'react';
import Particles from 'react-particles-js';


class ParticlesBackground extends Component {

    render() {
        return (
            <Particles
                params=
                {
                {
                    "particles": {
                        "number": {
                          "value": 1,
                          "density": {
                            "enable": true,
                            "value_area": 10
                          }
                        },
                        "color": {
                          "value": "random"
                        },
                        "shape": {
                          "type": "circle",
                        },
                        "size": {
                          "value": 7,
                          "random": true,
                        },
                        "line_linked": {
                          "enable": false,
                        },
                        "move": {
                          "enable": false,
                        }
                    }
                }
                }
                
            />
        )
    }
}

export default ParticlesBackground;