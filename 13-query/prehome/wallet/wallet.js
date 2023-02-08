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

const wallet = {
    balance: 0,
    operations: [],
    getbalance: function() {return this.balance},
    income: function(sum, reason) { 
        this.balance += sum;
        this.operations.push({ reason, sum });
        return true;
    },
    payment:function(sum, reason) { 
        if (this.balance < sum ) {
            print('not money');
            return false}; 
        this.balance -= sum;
      this.operations.push({ reason: reason, sum: -sum });
      return true;
    } 

}

wallet.income(1000, 'salary');
wallet.income(10, 'salary');
wallet.income(100, 'salary');
wallet.income(10, 'ddd');
wallet.payment(230, 'taxes')
print(wallet.getbalance())
print(wallet)



function  print(message) {
    console.log(message)
};