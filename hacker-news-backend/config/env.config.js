module.exports = {
    optionsRequest: {
        url: 'https://hn.algolia.com/api/v1/search_by_date?query=nodejs',
        method: 'GET',
        json: true
    },
    mongodb: {
        url_db: 'mongodb://' + (process.env.db_host || 'localhost') + ':27017/hackerNews',
    },
    test: {
        host: 'http://localhost:3789',
        path: '/api/v1/',
        json: true
    }
};

