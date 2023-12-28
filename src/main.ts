import './style.scss'
import Typewriter from 'typewriter-effect';


let curX :number = 0;
let curY :number = 0;
let tgX :number = 0;
let tgY :number = 0;

document.addEventListener('DOMContentLoaded', ():void =>  {
  const interBubble: HTMLDivElement = document.querySelector<HTMLDivElement>('.interactive')!;

  function move() :void{
    curX += (tgX -curX) /8;
    curY += (tgY -curY) /8;
    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    requestAnimationFrame((): void => {
      move();
    });
  }

  window.addEventListener('mousemove', (event:MouseEvent) :void => {
      tgX = event.clientX;
      tgY = event.clientY;
  });
  move();

});

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Hey...')
  .pauseFor(300)
  .deleteChars(10)
  .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
  .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
  .pauseFor(1000)
  .start();