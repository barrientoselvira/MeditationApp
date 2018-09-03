import React, { Component } from 'react';
// import {Entity, Scene} from 'aframe-react';
import aframe from 'aframe-react';

class App extends Component {
  render() {
    return (
      <a-scene>
      <a-entity id="rain" particle-system="preset: rain; color: #3454FC; particleCount: 800"></a-entity>
 
      <a-entity id="sphere" class="main-white" geometry="primitive: sphere"
                material="color: #EFEFEF; shader: flat"
                position="0 0.15 -5"
                light="type: point; intensity: 5"
                animation="property: position; easing: easeInOutQuad; dir: alternate; dur: 1000; to: 0 -0.10 -5; loop: false"></a-entity>
      
                <a-entity id="sphere" text="width: 6 : Theta" class="theta-gray" geometry="primitive: sphere"
                material="color: #98A4BE; shader: flat"
                position="8 0.15 10"
                light="type: point; intensity: 5"
                animation="property: position; easing: easeInOutQuad; dir: alternate; dur: 50; to: 0 -0.30 20; loop: false"></a-entity>

                <a-entity id="sphere" class="alpha-purple" geometry="primitive: sphere"
                material="color: #7B00FF; shader: flat"
                position="15 0.30 20"
                light="type: point; intensity: 2"
               ></a-entity>
                <a-entity id="sphere" class="alpha-mint" geometry="primitive: sphere"
                material="color: #2AF0BA; shader: flat"
                position="8 0.30 -15"
                light="type: point; intensity: 2"></a-entity>
                <a-entity id="sphere" class="alpha-purple" geometry="primitive: sphere"
                material="color: #450981; shader: flat"
                position="7 0.30 20"
                light="type: point; intensity: 2">
                </a-entity>
                <a-entity id="sphere" class="alpha-purple" geometry="primitive: sphere"
                material="color: #E4F320; shader: flat"
                position="4 0.30 -20"
                light="type: point; intensity: 2">
                </a-entity>

      <a-entity id="ocean" ocean="density: 20; width: 50; depth: 50; speed: 2"
                material="color: #9CE3F9; opacity: 0.75; metalness: 0; roughness: 1"
                rotation="-90 0 0"></a-entity>
 
      <a-entity id="sky" geometry="primitive: sphere; radius: 5000"
                material="shader: gradient; topColor: #AA98BE; bottomColor: 185 185 210"
                scale="-1 1 1"></a-entity>
 
      <a-entity id="light" light="type: ambient; color: #888"></a-entity>
    </a-scene>
    );
  }
}

export default App;
