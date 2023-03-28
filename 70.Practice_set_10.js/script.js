let container = document.getElementsByClassName("container")[0];
console.log(container);

let allCardsHtml = "";

const fetchContest = async () => {
  let api = "https://kontests.net/api/v1/all";
  let contestResponse = fetch(api);
  let imgSrc = '';
  let allContest = await contestResponse.then(
    (value) => value.json(),
    (err) => {
      console.log("Error Occured");
    }
  );
  // console.log(allContest);

  allContest.forEach(async (element) => {
      let response = await fetch('https://api.unsplash.com/photos/random?query=programming',{
        headers:{
          Authorization: 'Client-ID -9TysSBIeOahCTUC9peQVK3iCgwH7RcepDGUN9Jirkk'
        }
      })
      if (response.ok) {
        let value = await response.json()
        imgSrc = value.urls.regular
      }
    

    container.innerHTML += `<div class="card" style="width: 18rem">
        <img src="${imgSrc}" class="card-img-top" alt="${element.name}" />
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div class="status">${element.status == "CODING" ? "Live" : "Not Started"
      }</div>
          <a href="${element.url}" class="btn btn-primary">Go to ${element.site
      }</a>
        </div>
      </div>`;
  });

  // container.innerHTML += allCardsHtml
};
fetchContest();
