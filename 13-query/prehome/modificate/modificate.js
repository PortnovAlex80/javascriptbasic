const users = [
    { name: 'Vasy1', age: 30},
    { name: 'Vasy2', age: 20},
    { name: 'Vasy3', age: 40},
    { name: 'Vasy4', age: 10}
]

print(users.map( a => {
    return {
        name: a.name + a.age,
        skill: a.age *180,
        getFullName: function(name) { return this.name}
    }
}))


function  print(message) {
    console.log(message)
};