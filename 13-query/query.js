
const query = { 
    search: 'Timur',
    take: 10
}

print(queryToString(query))

function queryToString(query) {
    let string = ''; // = Object.keys(query);
    for (const key in query) {
        string += '&' + key + '=' + query[key]
    }  
    return string;
}


function  print(message) {
    console.log(message)
}

