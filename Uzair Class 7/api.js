
const cardDiv = document.getElementById("cardSection")

const input = document.getElementById("exampleInputEmail1")

const fetchApi = async () => {
    let searchTopic = input.value;
    let api_key = `https://newsapi.org/v2/everything?q=${searchTopic}&from=2024-11-07&sortBy=publishedAt&apiKey=8e3b2b93111b4754b32542ec8245ea28`;
    try {
        let res = await fetch(api_key)
    
        let resJson = await res.json()
        resJson.articles.forEach(element => {   
            cardDiv.innerHTML += ` <div class="card" style="width: 18rem;">
      <img src=${element.urlToImage} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.description}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div> `
        });
console.log(resJson.articles)
    }catch (err) {
        console.log(err.message)
    }
}




// fetchApi()