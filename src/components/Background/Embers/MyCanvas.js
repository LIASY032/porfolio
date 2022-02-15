import React from 'react';
import './style.css';


function MyCanvas() {




  return (
    <>
      <div id="myCanvasContainer">
        <canvas width="300" height="300" id="myCanvas">
        
        </canvas>
      </div>
      <div id="tags" style={{ fontSize: '50%' }}>
      <a href="/about">npm</a>
      <a href="/about">NodeJS</a>
      
      <a href="/about">Javascript</a>
      <a href="/about">Python</a>
      <a href="/about">Java</a>
      <a href="/about">C#</a>
      <a href="/about">C++</a>
      <a href="/about">TypeScript</a>
      <a href="/about">html</a>
      <a href="/about">css</a>
      <a href="/about">scss</a>
      </div>
    </>
  );
}

export default MyCanvas;
