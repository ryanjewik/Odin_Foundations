// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent ='This the the glorious text-content!';


const red = document.createElement('p');
red.classList.add('red');
red.textContent = "Hey I'm red!";
red.style.color = 'red';

const blue = document.createElement('h3');
blue.classList.add('blue');
blue.textContent = "I'm a blue h3!";
blue.style.color="blue";

const blackpink = document.createElement('div');
blackpink.classList.add('blackpink');
blackpink.style.borderColor = "black";
blackpink.style.backgroundColor = "pink";

const textOne  = document.createElement('h1');
textOne.classList.add('textOne');
textOne.textContent = "I'm a div";

const textTwo = document.createElement('p');
textTwo.classList.add('textTwo');
textTwo.textContent = 'ME TOO!';




container.appendChild(content);
container.appendChild(red);
container.appendChild(blue);
blackpink.appendChild(textOne);
blackpink.appendChild(textTwo);
container.appendChild(blackpink);