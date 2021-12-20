// import { hello } from './modules/hello.js';
let btnHello = document.querySelector('#btnHello');
let root = document.querySelector('#root');
// root.innerHTML = hello();

btnHello.addEventListener('click', () => {
  import('./modules/hello.js').then((Module) => {
    root.innerHTML = Module.hello();
  });
  // root.innerHTML = hello();
});

// draw a square
squareBtn.addEventListener('click', () => {});
