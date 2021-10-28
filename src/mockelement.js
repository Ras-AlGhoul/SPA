const mainTemplate = initialState => `
  <header class="header">
    <h1 class="header__text">${initialState.title}</h1>
  </header>
  <div class="page-wrapper">
    <section class="search">
      <input type="text" class="search__field">
      <button class="search__button">Search</button>
      <div class="search-suggestions"></div>
    </section>
    <main class="image-wrapper">
    </main>
    <section class="pagination">
      <div class="button-prev-container">
        <button class="pagination__button--hidden" id="previous-button">Prev</button>
      </div>
      <div class="button-next-container">
        <button class="pagination__button--hidden" id="next-button">Next</button>
      </div>
    </section>
    <footer class="footer">
      <p class="footer__text">Built by TGV 2021</p>
      <a href="${initialState.githubLink}">
        <img class="footer__github" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="The github octocat logo in silhouette">
      </a>
    </footer>
  </div>
  `;

module.exports.mainTemplate = mainTemplate;
