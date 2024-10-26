const apiUrl =
  "https://cds.thepublive.com/publisher/2741/latest-posts/article/?page=1&limit=50";

const cardContainer = document.getElementById("card-container");
const cardImg = document.getElementById("cardImg");
const cardTitle = document.getElementById("cardTitle");
const cardText = document.getElementById("cardText");
const cardDate = document.getElementById("cardDate");
const searchInput = document.getElementById("searchInput")

fetch(apiUrl)
  .then((resp) => resp.json())
  .then((data) => {
    const dataArray = data.data;
    dataArray.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.width = "15rem";

      const img = document.createElement("img");
      img.src = item.banner_url;
      img.className = "card-img-top";

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const title = document.createElement("h5");
      title.className = "card-title";
      title.textContent = item.title;

      const text = document.createElement("p");
      text.className = "card-text";
      text.textContent = item.short_description || "*No desciption available*";

      const date = document.createElement("p");
      date.className = "card-date";
      date_only = item.formatted_last_published_at_datetime.split("T");
      date.textContent = "*Last Updated: "+date_only[0];

      cardBody.appendChild(title);
      cardBody.appendChild(text);
      card.appendChild(img);
      card.appendChild(date);
      card.appendChild(cardBody);
      cardContainer.appendChild(card);
    });
  })
  .catch((error) => console.error(error));

  const fab = document.querySelector('#card-button');
  fab.addEventListener('click', () => {
    window.location = 'index.html';
  });

  //searching
  searchInput.addEventListener('input',()=>{
    const searchTerm = searchInput.value.toLowerCase();
    const cards = cardContainer.querySelectorAll('.card')

    cards.forEach(card =>{
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      const desc = card.querySelector('.card-text').textContent.toLowerCase();

      if (title.includes(searchTerm)||desc.includes(searchTerm)){
        card.style.display = 'block';
      }else{
        card.style.display = 'none'
      }
    });
  });