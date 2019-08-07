// News API key: 166549cb19424cffb804733499eec7dd



const data = Object.create({

    // Request articles from the News API
    getData: (url) => {
        return fetch(url).then(response => response.text());
    },

    // Get articles saved in articles.json
    getSavedArticles: () => {
        return fetch("http://localhost:8088/articles").then(response => response.json());
    },

    // Take in an article and save it to articles.json
    saveArticle: (articleObject) => {
        return fetch('http://localhost:8088/articles', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(articleObject)
        }).then(response => response.json());
    },

    buildSourceUrl: () => {
        const sourceIDs = ['bbc-news', 'bleacher-report', 'bloomberg', 'breitbart-news', 'business-insider',
            'cnbc', 'cnn', 'daily-mail', 'espn', 'fox-news', 'fox-sports', 'msnbc', 'nbc-news',
            'newsweek', 'the-huffington-post', 'the-new-york-times', 'the-wall-street-journal',
            'the-washington-post', 'usa-today', 'wired'];

        let bbc = '';
        let bleacher = '';
        let bloomberg = '';
        let breitbart = '';
        let business = '';
        let cnbc = '';
        let cnn = '';
        let daily = '';
        let espn = '';
        let foxNews = '';
        let foxSports = '';
        let msnbc = '';
        let nbc = '';
        let newsweek = '';
        let huffington = '';
        let nyTimes = '';
        let wallSt = '';
        let washPost = '';
        let usa = '';
        let wired = '';

        const sourceVars = [bbc, bleacher, bloomberg, breitbart, business, cnbc, cnn, daily, espn, foxNews,
                            foxSports, msnbc, nbc, newsweek, huffington, nyTimes, wallSt, washPost, usa, wired];

        for (let i = 0; i < sourceVars.length; i += 1) {
            const checkbox = document.getElementById(sourceIDs[i]);

            if (checkbox.checked === true) {
                sourceVars[i] = sourceIDs[i];
            }
        };

        let sourceString = '';

        sourceVars.forEach(source => {

            if (source !== '') {
                sourceString += source;
                sourceString += ',';
            }

        });
        
        const url = `https://newsapi.org/v2/everything?pageSize=50&sources=${sourceString}&apiKey=166549cb19424cffb804733499eec7dd`;

        return url;
    }
    
    
});

export default data;