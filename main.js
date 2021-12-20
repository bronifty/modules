import { hello, world } from './modules/helloworld/index.js';
import importColors from './modules/getColors.js';
let btnHello = document.querySelector('#btnHello');
let root = document.querySelector('#root');
let root2 = document.querySelector('#root2');
let iptColor = document.querySelector('#iptColor');
// root.innerHTML = hello();

btnHello.addEventListener('click', () => {
  let iptVal = iptColor.value.trim();
  console.log('color', iptVal);
  import('./modules/hello.js').then((myModule) => {
    root.innerHTML = `${myModule.hello()} ${myModule.world()} color: ${
      importColors.blue
    } dynamic agg hello() world(): ${hello()} ${world()}`;
  });
  root2.innerHTML = importColors.iptVal;
  console.log('iptVal: ', iptVal);
});
