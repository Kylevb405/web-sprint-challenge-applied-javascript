// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardHTML = document.querySelector('.cards-container')

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then((res) => {

        const test = res.data

        // console.log(test, 'first log');

        // console.log(test.articles, 'second log');

        test.articles.bootstrap.forEach(articleData => {
            
            // console.log(articleData);

           const articleCard = cardComponent(articleData) 

            cardHTML.appendChild(articleCard)

        });

        test.articles.javascript.forEach(articleData => {
            
            // console.log(articleData);

            const articleCard = cardComponent(articleData) 

            cardHTML.appendChild(articleCard)

        });

        test.articles.jquery.forEach(articleData => {
            
            // console.log(articleData);

            const articleCard = cardComponent(articleData) 

            cardHTML.appendChild(articleCard)

        });

        test.articles.node.forEach(articleData => {
            
            // console.log(articleData);

            const articleCard = cardComponent(articleData) 

            cardHTML.appendChild(articleCard)

        });

        test.articles.technology.forEach(articleData => {
            
            // console.log(articleData);

            const articleCard = cardComponent(articleData) 

            cardHTML.appendChild(articleCard)

        });

    })


function cardComponent(objectData) {

    const cardDiv = document.createElement('div')
        cardDiv.classList.add('card')
        cardDiv.addEventListener('click', () => {
            console.log(`${objectData.headline}`);
        })

        const headlineDiv = document.createElement('div')
            headlineDiv.classList.add('headline')
            headlineDiv.textContent = `${objectData.headline}`
        
        const authorDiv = document.createElement('div')
            authorDiv.classList.add('author')

            const imgcontainerDiv = document.createElement('div')
                imgcontainerDiv.classList.add('img-container')

                const authorImg = document.createElement('img')
                    authorImg.setAttribute('src', `${objectData.authorPhoto}`)

            const nameSpan = document.createElement('span')
                nameSpan.textContent = `By ${objectData.authorName}`

    cardDiv.appendChild(headlineDiv)
    cardDiv.appendChild(authorDiv)
        authorDiv.appendChild(imgcontainerDiv)
            imgcontainerDiv.appendChild(authorImg)
        authorDiv.appendChild(nameSpan)

        return cardDiv        
}