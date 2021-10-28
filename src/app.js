const app = document.querySelector('#root');
const prevBtn = document.createElement('button');
const nextBtn = document.createElement('button');
const btnDiv = document.createElement('div');
btnDiv.setAttribute('class', 'btnDiv');
prevBtn.innerText = 'Previous Page';
nextBtn.innerText = 'Next Page';
btnDiv.append(prevBtn, nextBtn);

const fetchData = (dataState, callback) => {
  const state = dataState;
  const apiKey = 'SQbJLLt48acdgzRq9D0EVZ9YWBOvAz2IpVw03ECdFbQ';
  fetch(`https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${state.inputValue}&page=${state.currentPage}&per_page=9`)
    .then(res => {
      state.pageData = res.json();
    })
    .then(() => callback(state.pageData, state));
};

const updatePage = (response, dataState) => {
  const state = dataState;
  state.imageUrl = [];
  const gallery = document.createElement('div');
  gallery.setAttribute('class', 'galleria');
  response.then(res => {
    const galleria = document.querySelector('.galleria');
    if (galleria) galleria.remove();
    res.results.map(i => {
      state.imageUrl.push(i.urls.small);
      return state.imageDescription.push(i.alt_description);
    });
    state.imageUrl.map((imgUrl, index) => {
      const card = document.createElement('div');
      card.setAttribute('class', 'root__card');
      card.innerHTML = `<div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                <img src=${imgUrl} alt="Avatar" style="width:300px;height:300px;">
                                </div>
                                <div class="flip-card-back">
                                <h1 class="flip-card-h">${state.inputValue}</h1>  
                                <p>${state.imageDescription[index]}</p>
                                </div>
                            </div>
                        </div>`;
      return gallery.append(card);
    });
    app.append(gallery, btnDiv);
  });
};

const nextsBtn = dataState => {
  const state = dataState;
  nextBtn.addEventListener('click', () => {
    state.currentPage += 1;
    fetchData(state, updatePage);
    if (state.currentPage <= 1) {
      prevBtn.style.display = 'none';
    }
  });
};

const prevsBtn = dataState => {
  const state = dataState;
  prevBtn.addEventListener('click', () => {
    state.currentPage -= 1;
    fetchData(state, updatePage);
  });
};

module.exports = {
  fetchData, updatePage, prevsBtn, nextsBtn,
};
