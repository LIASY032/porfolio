import React from 'react';
import "./style.css"
function Embers() {
  React.useEffect(() => {
    var _ = require('lodash');
    const canvas = document.querySelector('.cover');
    const ctx = canvas.getContext('2d');

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    const embers = _.shuffle(
      'react npm'.split(
        ' '
      )
    );

    const fontSizes = embers.map(() => getRandomArbitrary(15, 30));
    const textOffsetX = embers.map(() => getRandomArbitrary(-50, 50));
    const textOffsetY = embers.map(() => getRandomArbitrary(-50, 50));

    function draw() {
      const time = new Date();
      const t = time.getSeconds() * 1000 + time.getMilliseconds();
      const tt = (Math.PI * t) / 1200;
      ctx.clearRect(0, 0, 500, 500);
      ctx.textAlign = 'center';
      ctx.fillStyle = 'white';
      const sectorSize = 500000 / embers.length;
      const sectorPerLine = Math.floor(5000 / Math.sqrt(sectorSize));
      for (let i = 0; i < sectorPerLine; i++) {
        for (let j = 0; j < sectorPerLine; j++) {
          ctx.globalAlpha =
            0.5 *
            (1 +
              Math.cos(
                tt + (((i % 2 ? 1 : -1) * i * sectorPerLine + j) * Math.PI) / 4
              ));
          ctx.font = `${fontSizes[i * sectorPerLine + j]}px sans-serif`;
          ctx.fillText(
            embers[i * sectorPerLine + j],
            Math.sqrt(sectorSize) * i + 64 + textOffsetX[i * sectorPerLine + j],
            Math.sqrt(sectorSize) * j + 64 + textOffsetY[i * sectorPerLine + j]
          );
        }
        }
          window.requestAnimationFrame(draw);
   
    }

    window.requestAnimationFrame(draw);
  }, []);
  return (
    <>
      <canvas className="cover" width="500" height="500"></canvas>
    </>
  );
}
export default Embers;
