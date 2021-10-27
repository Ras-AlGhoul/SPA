import design from './images/design.jpg';
import './styles/main.scss'
import nav from './nav'
import search from './search.js'
import { stateSearchHistory } from './search.js';
import { fetchData, updatePage } from './app'
import { nextBtn , prevBtn } from './pagination'

let state = {
  inputValue: null,
  searchHistory: [],
  imageUrl: [],
  imageDescription: [],
  currentPage: 1,
  pageData: null
}

// Append heading node to the DOM
const app = document.querySelector('#root')
app.append(nav, search, nextBtn, prevBtn)

const form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  state.imageUrl = [];
  state.imageDescription = [];

  const searchInput = document.querySelector('input');
  state.inputValue = searchInput.value;
  state.searchHistory.push(searchInput.value);
  localStorage.setItem('search:' + searchInput.value, searchInput.value);
  fetchData(state, updatePage);
  stateSearchHistory(state);
  console.log('this is our State', state);
});
