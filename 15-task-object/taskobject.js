const toDoList = {
    tasks: [
        { 
            title: 'Epic',
            id: 0,
            priority: 1
           }
    ],
    addTask: function (task = {title: 'No title', id: 0, priority: 5}) { // default task if empty object
        isCheck = (title, priority) => { print('Service addTask: some args verifies')}, // checking imitation
        // some chechink for args
        this.tasks.push(task);
    },
    removeTaskById: function(id) {
        const indexTaskByIdinArray = this.findTaskById(id); //find task by id
        // deleted task by id
        (indexTaskByIdinArray) && this.tasks.splice(indexTaskByIdinArray,1);
        },
    updateTaskById: function(taskForUpdate) { 
        //find task by id        
        let indexTaskByIdinArray = this.findTaskById(taskForUpdate.id);
        if (!indexTaskByIdinArray) { return false; // if not found - return
        } 
        this.tasks[indexTaskByIdinArray] = taskForUpdate;
    },
    sortTasksByPriority: function(order = 'DSC') {
        if (!this.tasks.length) return false; // if task is empty return false

        order = (order !== 'DSC') ? true : false // sort order . is nor DSC means ASC
    
        return        order ?
        this.tasks.sort( (a, b) => a.priority > b.priority ) 
        : 
        this.tasks.sort( (a, b) => a.priority < b.priority )     
    },

    findTaskById: function(id) { 
        let indexTaskByIdinArray = this.tasks.findIndex(el => el.id === id ); 
        if (indexTaskByIdinArray <0) {
            //print(`Service FindTask: Task id-${id} not found`) // if not found - report it
            return false;
        };
        return indexTaskByIdinArray;
    }
};

function  print(message) {
    console.log(message)
};

// main 
print(toDoList.tasks);
toDoList.addTask('First', 1);
toDoList.addTask('Second', 2);
toDoList.addTask('Third', 3);
toDoList.removeTaskById(3);
toDoList.updateTaskById(5,5);
print(toDoList.sortTasksByPriority('DSC'));