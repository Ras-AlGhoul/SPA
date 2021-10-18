import design from './images/design.jpg';
import './styles/main.scss'
import nav from './nav'
import search from './search.js'
import  {card1,card2,card3,card4,card5,card6} from './card'


// Append heading node to the DOM
const app = document.querySelector('#root')
app.append(nav, search,  card1,card2,card3,card4,card5,card6)

const form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
  const searchInput = document.querySelector('input');
  const img1 = document.querySelector('.card__image1');
  const img2 = document.querySelector('.card__image2');
  const img3 = document.querySelector('.card__image3');
  const img4 = document.querySelector('.card__image4');
  const img5 = document.querySelector('.card__image5');
  const img6 = document.querySelector('.card__image6');

  console.log(img1, img2, img3);
  e.preventDefault();
  fetch(`https://api.unsplash.com/search/photos?client_id=SQbJLLt48acdgzRq9D0EVZ9YWBOvAz2IpVw03ECdFbQ&query=${searchInput.value}&page=2&per_page=6`)
  .then(res => {
    return res.json();
  }).then(res =>  { 
    img1.src = res.results[0].urls.small;
    img2.src = res.results[1].urls.small;
    img3.src = res.results[2].urls.small;
    img4.src = res.results[3].urls.small;
    img5.src = res.results[4].urls.small;
    img6.src = res.results[5].urls.small;
  })
});
