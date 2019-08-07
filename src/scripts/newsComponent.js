
const newsComponent = Object.create({

    createHTML: (newsObject) => {
        return `<section class="news__item">
                    <h1>${newsObject.title}</h1>
                    <img class="article__image" src="${newsObject.urlToImage}" alt="">
                    <h3>Source: ${newsObject.source.name}</h3>
                    <p>Date: ${newsObject.publishedAt}</p>
                    <p>${newsObject.content}</p>
                    <a href="${newsObject.url}" target="_blank">Read Full Article</a>
                    <button class="saveArticle">Save Article </button>
                </section>`;
    },

    createArticleObject: (headline, image, source, date, content, url) => {
        return {
            headline: headline,
            image: image,
            source: source,
            date: date,
            content: content,
            url: url
        };
    },

    addToDOM: (container, HTMLString) => {
        container.innerHTML += HTMLString;
    },

    createSourceInputHTML: () => {
        const sourceIDs = [ 'bbc-news', 'bleacher-report', 'bloomberg', 'breitbart-news', 'business-insider',
                            'cnbc', 'cnn', 'daily-mail', 'espn', 'fox-news', 'fox-sports', 'msnbc', 'nbc-news',
                            'newsweek', 'the-huffington-post', 'the-new-york-times', 'the-wall-street-journal',
                            'the-washington-post', 'usa-today', 'wired'];

        const sources = ['BBC News', 'Bleacher Report', 'Bloomberg', 'Breitbart News', 'Business Insider',
                         'CNBC', 'CNN', 'Daily Mail', 'ESPN', 'Fox News', 'Fox Sports', 'MSNBC', 'NBC News',
                         'Newsweek', 'The Huffington Post', 'The New York Times', 'The Wall Street Journal',
                         'The Washington Post', 'USA Today', 'Wired'];

        let checkboxHTML = '';

        for (let i = 0; i < sources.length; i += 1) {
            checkboxHTML += `   <section class="source__checkbox">
                                    <input type="checkbox" id="${sourceIDs[i]}" name="source" value="${sourceIDs[i]}" checked="true">
                                    <label for="${sourceIDs[i]}">${sources[i]}</label>
                                </section>`;
        }

        return checkboxHTML;
    }
});

export default newsComponent;