const PageDetail = (argument) => {
    const preparePage = () => {
      const cleanedArgument = argument.replace(/\s+/g, "-");
  
      const displayGame = (gameData) => {
        const {
          name, released, description, background_image, rating, ratings_count, developers, website,
        } = gameData;
        const articleDOM = document.querySelector(".page-detail");
        articleDOM.querySelector("h1.title").innerHTML = name;
        articleDOM.querySelector(".details-jumbotron a").href = website;
        articleDOM.querySelector("p.release-date").innerHTML = released;
        articleDOM.querySelector("p.description").innerHTML = description;
        articleDOM.querySelector("img.poster").src = background_image;
        articleDOM.querySelector("p.rating").innerHTML = `${rating}/5 - ${ratings_count} votes`;
        articleDOM.querySelector("p.developers span").innerHTML =
          developers[0].name;
        articleDOM.querySelector("p.publisher span").innerHTML =
          publishers[0].name;
        articleDOM.querySelector("p.developers").innerHTML = arrayInLink(
          developers,
          "developers"
        );
      };
  
      const fetchGame = (url, argument) => {
        fetch(`${url}/${argument}?key=${process.env.API_KEY}`)
          .then((response) => response.json())
          .then((responseData) => {
            displayGame(responseData);
          });
      };
  
      fetchGame(`https://api.rawg.io/api/games`, cleanedArgument);
    };
  
    const render = () => {
      pageContent.innerHTML = `
        <section class="page-detail">
        <div class="details-jumbotron">
          <img class="poster" src=''>
          <div class="checkWebsite mt-3"><a href = "#">Check Website </a></div>
          <div class="mt-5 d-flex justify-content-between">
            <h1 class="title titleDetail"></h1>
            <p class="rating"></p>
          </div>
            <p class="fs-4 mt-5 description"></p>                 
        </div>
        <div class="page-detail">
                <div class="about">
            <div>
              <h3 class="textDetail">Release date</h3>
              <p class="release-date">Release date : <span></span></p>
            </div>
        </div>      
        </section>
      `;
  
      preparePage();
    };
  
    render();
  };

export { PageDetail };