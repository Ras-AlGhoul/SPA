import './styles/main.scss';
import nav from './nav';
import footer from './footer';
import { search, stateSearchHistory } from './search';
import {
  fetchData,
  updatePage,
  prevsBtn,
  nextsBtn,
} from './app';

const emptyState = document.createElement('img');
emptyState.setAttribute('src', 'https://i.ibb.co/X7rVwr7/nothing.jpg');
emptyState.setAttribute('class', 'emptyState');
emptyState.style.display = 'none';

const state = {
  inputValue: null,
  searchHistory: [],
  imageUrl: [],
  imageDescription: [],
  currentPage: 1,
  pageData: null,
};

const app = document.querySelector('#root');
app.append(nav, search, emptyState, footer);
const body = document.querySelector('body');
body.append(footer);

if (state.imageUrl.length === 0) {
  emptyState.style.display = '';
}

const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  state.imageUrl = [];
  state.imageDescription = [];
  emptyState.style.display = 'none';
  const searchInput = document.querySelector('input');
  state.inputValue = searchInput.value;
  state.searchHistory.push(searchInput.value);
  localStorage.setItem(`search: ${searchInput.value}`, `${searchInput.value}`);
  fetchData(state, updatePage);
  prevsBtn(state);
  nextsBtn(state);
  stateSearchHistory(state);
});

