const query = { 
    search: 'Timur',
    take: 10,
    offset: 50
}

function queryToString(query) {
    const queryParams = []; // = Object.keys(query);
    for (const key in query) {
        queryParams.push(key + '=' + query[key]);
    };
    return queryParams.join('&');
};

console.log(queryToString(query))
