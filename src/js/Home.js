const Home = (argument = '') => {
  const preparePage = () => {
    const cleanedArgument = argument.replace(/\s+/g, "-");

    const searchGame = () => {
      let gameSearched = document.getElementById("searchInput");
      gameSearched.addEventListener("keydown", function () {
        if (event.keyCode == 13) {
          let gameValue = gameSearched.value;
          gameValue = gameValue.replace(/\s+/g, "-");
          window.location.href = `#/${gameValue}`;
        }
      });
    };
    searchGame();
    
    const displayResults = (articles) => {
      const resultsContent = articles.map((article) => (
        `<article class="cardGame col-4 mt-4 pt-2">

  <p class="game_img col-2">
    <img class="game_img p-3" src="${article.background_image}">
    <h1 class="article_name col-4">
      <a class="title_game " href="#PageDetail/${article.id}">${article.name}
        <h2 class="">${article.released}</h2>
      </a>
    </h1>
  </p>

</article>`

      ));
      const resultsContainer = document.querySelector(".page-list .articles");
      resultsContainer.innerHTML = resultsContent.join("\n");
    };

    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results)
        });
    };

    fetchList(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
  <container>
    <div class="article">
      <h1 class="h1_title mt-4"><a href="#">The Hyper Progame</a>
        <input id="searchInput" type="text" class="search my-auto mt-3" placeholder="Find a Fucking Game !" />
        </h1>
      <h2 class="h2_title mt-4">Welcome,</h2>

      <h3 class="mt-5">The Hyper Progame is the world's premier event for computer and video games and related products.
        At The Hyper Progame, the video game industry's top talent pack the Los Angeles Convention Center, connecting tens
        of thousands of the best, brightest, and most innovative in the interactive entertainment industry. For Three
        exciting days, leading-edge-companies, groundbreaking new technologies, and never-before-seed products will be
        showcased. The Hyper Progame connects you with both new and existing parners, industry executives, gamers, and
        social influencers providing unprecedented exposure to the entire video game industry, all under one roof. This
        next seems familiar.</h3>
    </div>
  </container>
  <section class="page-list">
  <div class="articles col-12 flex-wrap">...loading
  <div class="all_game col-4" </div> 
  </section> `;
    preparePage();
  };
  render();
  

  // const searchInput = document.querySelector('#searchInput');
  // const searchButton = document.querySelector('.searchButton');

  // searchButton.addEventListener('click', e => {

  //   e.preventDefault();
  //   window.location.hash = `#/${searchInput.value}`;
  // })


};
export {
  Home
};