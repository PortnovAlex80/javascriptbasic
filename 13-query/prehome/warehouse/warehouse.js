const warehouse = {
    goods: [],
    findGoodById: function (id) {
        return (this.goods.find(good => good.id === id)) || 'Not exist';
    },
    addGood: function (good) {
        this.findGoodById(good.id) && this.goods.push(good) || 'Good exist'
    },
    getWeightKg: function (id) {
        return (this
        .findGoodById(id)
        .weight?.kg) || 'Not weight';

        
    }
};

const car = {
    id: 1,
    weight: {
        kg: 1000
    },
    brand: 'Ford'
};

const chair = {
    id: 2,
    weight: {
        kg: 2
    }
}

const paper = {
    id: 3,
    color: 'red'
}

warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);

print(warehouse.findGoodById(2));
print(warehouse.getWeightKg(3));


function  print(message) {
    console.log(message)
};