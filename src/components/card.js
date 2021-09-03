import axios from "axios";

// Create elements
const Card = (article) => {
  const mainCard = document.createElement('div');
  const mainHeadline = document.createElement('div');
  const writer = document.createElement('div');
  const mainImage = document.createElement('div');
  const image = document.createElement('img');
  const writtenBy = document.createElement('span');

 // Append child to parent.
  mainCard.appendChild(mainHeadline);
  mainCard.appendChild(writer);
  writer.appendChild(mainImage);
  mainImage.appendChild(image);
  writer.appendChild(writtenBy);

 // Add classes
  mainCard.classList.add('card');
  mainHeadline.classList.add('headline') 
  writer.classList.add('author');
  mainImage.classList.add('img-container');

// Add text content
  image.src = article.authorPhoto;
  mainHeadline.textContent = article.headline;
  writtenBy.textContent = `By: ${article.authorName}`;

// Add event listener.
  mainCard.addEventListener('click', () => {
    console.log(article.headline);
  }) 

// Remember to return the mainCard.
  return mainCard;


  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }
  // </div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  axios.get(`http://localhost:5000/api/articles`)
  .then(res=> {
    console.log(res);
    // const newCards = Card(res.data.article)
    // const selected = document.querySelector(selector)
    // selected.appendChild(newCards)
    const javascript = res.data.articles.javascript
    const bootstrap = res.data.articles.bootstrap
    const technology = res.data.articles.technology
    const jquery = res.data.articles.jquery
    const node = res.data.articles.node

    const selected = document.querySelector(selector)
    
    javascript.forEach(item => {
      selected.appendChild(Card(item))
    })
    bootstrap.forEach(item => {
      selected.appendChild(Card(item))
    })
    technology.forEach(item => {
      selected.appendChild(Card(item))
    })
    jquery.forEach(item => {
      selected.appendChild(Card(item))
    })
    node.forEach(item => {
      selected.appendChild(Card(item))
    })
  })
  .catch(err => {
    console.error(err)
  })

//   // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
