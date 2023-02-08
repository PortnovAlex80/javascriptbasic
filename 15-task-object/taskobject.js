const toDoList = {
    tasksIndex: 0,
    tasks: [
        { 
            title: 'Epic',
            id: 0,
            priority: 1
           }
    ],
    addTask: function (title = 'No title', priority = 5) { 
        isCheck = (title, priority) => { print('Service addTask: some args verifies')}, // chacking imitation
        // some chechink for args
        ++this.tasksIndex,
        this.tasks.push({
            title,
            id: this.tasksIndex,
            priority 
        });
        print(`Service addTask: task-${this.tasksIndex} added`); 
    },
    removeTaskById: function(id = 'undefined') {
      if (id === 'undefined') { 
        print('Service removeTask: Task id invalid');
        return false }; // imitation checking
          
        let indexTaskByIdinArray = this.findTaskById(id); //find task by id
    
        (indexTaskByIdinArray) 
            ? // remove task and log it
            this.tasks.splice(indexTaskByIdinArray,1)
            && print(`Service removeTask: Task id-${indexTaskByIdinArray} deleted`)
            :  print(`Service removeTask: Task id-${id} not found`) // if not found - report it
        },
    updateTaskById: function(id = 'undefined', params = 'undefined') { 
        if ((id === 'undefined') || (params === 'undefined')) { 
        print('Service updateTask: Invalid arguments');
        return false }; // imitation checking
        //find task by id        
        let indexTaskByIdinArray = this.findTaskById(id);
        if (!indexTaskByIdinArray) {
            print('Service updateTask: task not found'); 
            return false; // if not found - return
        }   // check params is number
        // params - is title or priority
        if (typeof params !== 'string' || 'number') { return false };// some checking
        typeof params === 'string' 
        // isString - Title
        ? this.tasks[indexTaskByIdinArray].title = params && print('Service updateTask: title updated')
        //isNumber - Priority
        : this.tasks[indexTaskByIdinArray].priority = params && print('Service updateTask: priotity updated'); //maybe need check for priority interval
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
}


// main 
print(toDoList.tasks);
toDoList.addTask('First', 1);
toDoList.addTask('Second', 2);
toDoList.addTask('Third', 3);
toDoList.removeTaskById(3);
toDoList.updateTaskById(5,5);
print(toDoList.sortTasksByPriority('DSC'));