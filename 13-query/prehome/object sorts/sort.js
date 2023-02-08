const users = [
    { name: 'Vasy1', age: 30},
    { name: 'Vasy2', age: 20},
    { name: 'Vasy3', age: 40},
    { name: 'Vasy4', age: 10}
]

print(users.sort( (a, b) => a.age - b.age))

function  print(message) {
    console.log(message)
};