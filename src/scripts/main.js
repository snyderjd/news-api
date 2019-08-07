import data from "./data.js";
import newsComponent from "./newsComponent.js";

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

        articles.forEach(article => {
            const articleHTML = newsComponent.createHTML(article);
            newsComponent.addToDOM(newsContainer, articleHTML);
            console.log(article);
        });
    });
});

const everything = 'https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=166549cb19424cffb804733499eec7dd';

// data.getData(everything).then(textResponse => {
//     const jsonResponse = JSON.parse(textResponse);
//     const articles = jsonResponse.articles;

//     articles.forEach(article => {
//         const articleHTML = newsComponent.createHTML(article);
//         newsComponent.addToDOM(newsContainer, articleHTML);
//     });
// });

// // Console log sources data to see the available sources

// const sources = 'https://newsapi.org/v2/sources?language=en&apiKey=166549cb19424cffb804733499eec7dd';

// data.getData(sources).then(textResponse => {
//     const jsonResponse = JSON.parse(textResponse);
//     const sources = jsonResponse.sources;

//     sources.forEach(source => {
//     });
// });

