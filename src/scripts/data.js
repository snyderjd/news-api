// News API key: 166549cb19424cffb804733499eec7dd



const data = Object.create({

    getData: (url) => {
        return fetch(url).then(response => response.text());
    },

    saveArticle: (articleObject) => {

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