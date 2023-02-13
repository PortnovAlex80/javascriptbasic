const query = { 
    search: 'Timur',
    take: 10,
    offset: 50
}

function queryToString(query) {
    let queryParams = []; // = Object.keys(query);
    let index = 0;
    for (const key in query) {
        queryParams.push(key + '=' + query[key]);
    };
    return queryParams.join('&');
};

console.log(queryToString(query))
