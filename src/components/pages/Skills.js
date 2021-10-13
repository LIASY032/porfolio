import React from "react";
import "./common.css";
import { Fade } from "react-reveal";
import AnimateText from "@moxy/react-animate-text";
import "@moxy/react-animate-text/dist/index.css";
import Particles from 'react-particles-js';
function Skills() {
  return (
    <div className="common-container">
      <Particles
    params={{
	    "fps_limit": 28,
	    "particles": {
	        "collisions": {
	            "enable": false
	        },
	        "number": {
	            "value": 200,
	            "density": {
	                "enable": false
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "distance": 30,
	            "opacity": 0.4
	        },
	        "move": {
	            "speed": 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "opacity_min": 0.05,
	                "speed": 1,
	                "sync": false
	            },
	            "value": 0.4
	        }
	    },
	    "polygon": {
	        "enable": true,
	        "scale": 0.5,
	        "type": "inline",
	        "move": {
	            "radius": 10
	        },
	        "url": "/small-deer.2a0425af.svg",
	        "inline": {
	            "arrangement": "equidistant"
	        },
	        "draw": {
	            "enable": true,
	            "stroke": {
	                "color": "rgba(255, 255, 255, .2)"
	            }
	        }
	    },
	    "retina_detect": false,
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "size": 6,
	                "distance": 40
	            }
	        }
	    }
	}} />
      <div className="flex-container">
        <div>
          <Fade bottom cascade={true}>
            <div className="container">
              <AnimateText initialDelay={0.5} wordDelay={0.5}>
                Skills
              </AnimateText>
            </div>
          </Fade>

          <p>redux react css javascript java python data structure sql</p>
        </div>
        <div>this is animation part.</div>
      </div>
    </div>
  );
}

export default Skills;
