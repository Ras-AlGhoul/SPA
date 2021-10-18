import design from './images/design.jpg';
import './styles/main.scss'
import nav from './nav'
import search from './search.js'
import card from './card'


// Append heading node to the DOM
const app = document.querySelector('#root')
app.append(nav, search,  card)

const form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
  const searchInput = document.querySelector('input');
  // const img1 = document.querySelector('.card__image1');
  e.preventDefault();
  fetch(`https://api.unsplash.com/search/photos?client_id=SQbJLLt48acdgzRq9D0EVZ9YWBOvAz2IpVw03ECdFbQ&query=${searchInput.value}&page=1&per_page=9`)
  .then(res => {
    return res.json();
  }).then(res =>  { 
    console.log(res.results);
     res.results.map(i =>  {
      const image = document.createElement('img');
      image.src = i.urls.small
      console.log(image);
      card.append(image)
    });
  })
});
