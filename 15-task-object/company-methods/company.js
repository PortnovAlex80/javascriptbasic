// methods names

const company = {
    name: 'JSC Agro',
    getName: function () {
        return this.name
    },
    getEmployeesNames: function() {
        return this.employees.map(employees => employees.getEmlpName())
    },
    employees: 
        [
        {
            name: 'Misha',

        getEmlpName: function () {
        return this.name }
        }
        ],
    ceo: {
        name: 'Ilon Mask',
        getName: function () {
        return this.name
    }
    }
}


print(company.getName())
print(company.ceo.getName())
print(company.getEmployeesNames())



function  print(message) {
    console.log(message)
}

