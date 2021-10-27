import design from './images/design.jpg';
import './styles/main.scss'
import nav, { hidden } from './nav'
import search from './search.js'
import { stateSearchHistory } from './search.js';
import { fetchData, updatePage, prevsBtn, nextsBtn } from './app'


let state = {
  inputValue: null,
  searchHistory: [],
  imageUrl: [],
  imageDescription: [],
  currentPage: 1,
  pageData: null
}

// Append heading node to the DOM
const app = document.querySelector('#root');
app.append(nav, search)

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
  prevsBtn(state);
  nextsBtn(state);
  stateSearchHistory(state);
});


