const query = { 
    search: 'Timur',
    take: 10
}

console.log(queryToString(query))

function queryToString(query) {
    let string = ''; // = Object.keys(query);
    for (const key in query) {
        string += '&' + key + '=' + query[key]
    }  
    return string;
}