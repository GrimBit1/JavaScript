let container = document.getElementsByClassName("container")[0];

let search = document.getElementsByClassName("form-control")[0];

let card = document.getElementsByClassName("card");

let allCardsHtml = "";


const fetchContest = async () => {
  let api = "https://kontests.net/api/v1/all";

  let contestResponse = fetch(api);

  let imgSrc = "";

  let allContest = await contestResponse.then(
    (value) => value.json(),
    (err) => {
      console.log("Error Occured");

    }
  );

  // console.log(allContest);


  allContest.forEach(async (element) => {
    let response = await fetch(
      "https://api.unsplash.com/photos/random?query=programming",
      {
        headers: {
          Authorization:
            "Client-ID -9TysSBIeOahCTUC9peQVK3iCgwH7RcepDGUN9Jirkk",
        },
      }
    );

    if (response.ok) {
      let value = await response.json();

      imgSrc = value.urls.regular;

    }

    allCardsHtml += `<div class="card" style="width: 18rem">
        <img src="${imgSrc}" class="card-img-top" alt="${element.name}" />
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          
            <h6>Creator</h6>
            <h6 class='site'>${element.site}</h6>
          <div class="status">${element.status == "CODING" ? "Live" : "Not Started"
      }</div>
          <a href="${element.url}" class="btn btn-primary">Go to ${element.site
      }</a>
        </div>
      </div>`;

    ;

    container.innerHTML = allCardsHtml
    
  });
};

fetchContest()



const searchValue = () => {
  container.innerHTML = allCardsHtml
  if (searchValue != ``) {
    let allSearch = Array.from(card);

    // console.log(allSearch);


    let filterSearch = allSearch.filter((element) => {
      return element.lastElementChild.lastElementChild.innerText.includes(
        search.value
      ); // to search which creator is hosting that

    });

    // console.log(filterSearch);

    container.innerHTML = ``;

    filterSearch.forEach((element) => {
      // console.log(element);

      container.innerHTML += element.outerHTML; // Adding the filtered element

    });

  }
  
  // container.childNodes = [...filterSearch]
  // console.log(container)
};


// let note = prompt('Enter the note u want to save?')
// localStorage.setItem('note', note)
