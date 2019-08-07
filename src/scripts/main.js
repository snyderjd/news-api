import data from "./data.js";
import newsComponent from "./newsComponent.js";

// Load saved articles as soon as the page is rendered
const savedContainer = document.querySelector('.saved__container');

data.getSavedArticles().then(parsedArticles => {
    parsedArticles.forEach(article => {
        const articleHTML = newsComponent.createSavedHTML(article)
        newsComponent.addToDOM(savedContainer, articleHTML);
    });
});

// Create checkboxes for sources and render to the DOM
const checkboxHTML = newsComponent.createSourceInputHTML();
const inputContainer = document.querySelector('.source__container');
newsComponent.addToDOM(inputContainer, checkboxHTML);

// Reference to article container
const newsContainer = document.querySelector('.news__container');

// Get a reference to the Source Checkbox Filter submit button and add event listener to it that gets articles based on which sources are selected
const sourceButton = document.querySelector('.source__button');
sourceButton.addEventListener('click', event => {
    const url = data.buildSourceUrl();

    data.getData(url).then(textResponse => {
        const jsonResponse = JSON.parse(textResponse);
        const articles = jsonResponse.articles;
        newsContainer.innerHTML = '';

        articles.forEach(article => {
            const articleHTML = newsComponent.createHTML(article);
            newsComponent.addToDOM(newsContainer, articleHTML);
        });
    });
});

// Add an event listener to the newsContainer and listen for clicks on 'save article' buttons
newsContainer.addEventListener('click', event => {

    if (event.target.classList[0] === 'saveArticle') {
        const button = event.target

        const headline = button.parentElement.childNodes[1].textContent;
        const image = button.parentElement.childNodes[3].src;
        const source = button.parentElement.childNodes[5].textContent;
        const date = button.parentElement.childNodes[7].textContent;
        const content = button.parentElement.childNodes[9].textContent;
        const url = button.parentElement.childNodes[11].href;

        // Create new article object
        const newArticle = newsComponent.createArticleObject(headline, image, source, date, content, url);

        data.saveArticle(newArticle)
            .then(data.getSavedArticles)
            .then(parsedArticles => {
                savedContainer.innerHTML = '';
                parsedArticles.forEach(article => {
                    const articleHTML = newsComponent.createSavedHTML(article);
                    newsComponent.addToDOM(savedContainer, articleHTML);
                });
            });
    }
});


