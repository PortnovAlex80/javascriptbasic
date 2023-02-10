const query = { 
    search: 'Timur',
    take: 10,
    offset: 50
}

function queryToString(query) {
    let query_params = []; // = Object.keys(query);
    let index = 0;
    for (const key in query) {
        query_params[index]  = key + '=' + query[key];
        ++index;
    };
    return query_params.join('&');
};

console.log(queryToString(query))
