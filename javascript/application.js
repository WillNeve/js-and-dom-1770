// console.log("Hello from JavaScript!");

// const person = {
//   'age': 24,
//   name: 'William'
// }

// const people = [];

const beatles = ["paul", "john", "ringo", "george"];

let beatlesAsLis = '';

beatles.forEach((beatle) => {
  const converted = `<li>${beatle}</li>`;
  beatlesAsLis += converted;
});

const beatlesInUl = `<ul>${beatlesAsLis}</ul>`;

const container = document.querySelector('.container');

container.insertAdjacentHTML('beforeend', beatlesInUl);

const lis = document.querySelectorAll('li');

lis.forEach((li) => {
  li.innerText = `🤖 ${li.innerText}`;
})

const ul = document.querySelector('ul');

ul.style.listStyle = 'upper-roman';

const abbaMembers = document.querySelectorAll('.abba');

abbaMembers.forEach((member) => {
  const instrument = member.dataset.instrument;
  member.innerText += ` - ${instrument}`;
})

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    button.classList.toggle('red');
  })
})


const link = document.querySelector('#link');

link.addEventListener('click', (event) => {
  const linkTarget = event.currentTarget.href;

  event.preventDefault();

  console.log('link clicked');

  setTimeout(() => {
    window.location.href = linkTarget;
  }, 5000);

})
