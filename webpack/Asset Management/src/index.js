import _ from 'lodash';
import './style.css';
import cat from './1.jpg';
function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myCat = new Image();
  myCat.src = cat;

  element.appendChild(myCat);

  return element;
}

document.body.appendChild(component());