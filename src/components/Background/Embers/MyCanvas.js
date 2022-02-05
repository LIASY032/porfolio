import React from 'react';
import $ from 'jquery';
import './style.css';


function MyCanvas() {
    React.useEffect(() => {
      


    if (
      !$('#myCanvas').tagcanvas(
        {
          //textColour: '#ff0000',
          outlineColour: '#ff00ff',
          reverse: true,
          depth: 0.8,
          maxSpeed: 0.05,
          textFont: null,
          textColour: null,
          weightMode: 'both',
          weight: true,
          weightGradient: {
            0: '#f00', // red
            //0.33: '#ff0', // yellow
            //0.66: '#0f0', // green
            1: '#00f', // blue
          },
        },
        'tags'
      )
    ) {
      // something went wrong, hide the canvas container
      $('#myCanvasContainer').hide();
    }
  }, []);

  return (
    <>
      <div id="myCanvasContainer">
        <canvas width="300" height="300" id="myCanvas">
          <p>
            Anything in here will be replaced on browsers that support the
            canvas element
          </p>
        </canvas>
      </div>
      <div id="tags" style={{ fontSize: '50%' }}>
        <a href="#">1000</a>
        <a href="#">background</a>
        <a href="#">canvas</a>
        <a href="#">chart</a>
        <a href="#">charts</a>
        <a href="#">cloud</a>
        <a href="#">clouds</a>
        <a href="#">example</a>
        <a href="#">goat</a>
        <a href="#">goat1000</a>
        <a href="#">graph</a>
        <a href="#">graphs</a>
        <a href="#">html</a>
        <a href="#">html5</a>
      </div>
    </>
  );
}

export default MyCanvas;
