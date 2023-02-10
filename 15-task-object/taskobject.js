const toDoList = {
    tasks: [
        { 
            title: 'Epic',
            id: 0,
            priority: 1
           }
    ],
    addTask(task = {title: 'No title', id: 0, priority: 5}) { // default task if empty object
        this.tasks.push(task);
    },
    removeTaskById(id) {
        const indexTaskByIdinArray = this.findTaskIndexById(id); //find task by id
        // deleted task by id
        (indexTaskByIdinArray) && this.tasks.splice(indexTaskByIdinArray,1);
        },
    updateTaskById(taskForUpdate) { 
        //find task by id        
        let indexTaskByIdinArray = this.findTaskIndexById(taskForUpdate.id);
        if (!indexTaskByIdinArray) { return false; // if not found - return
        } 
        this.tasks[indexTaskByIdinArray] = taskForUpdate;
    },
    sortTasksByPriority(order = 'DSC') {
        if (!this.tasks.length) return false; // if task is empty return false
        let order = (order !== 'DSC') ? true : false // sort order . is nor DSC means ASC
        return        order 
        ?
        this.tasks.sort( (a, b) => a.priority > b.priority ) 
        : 
        this.tasks.sort( (a, b) => a.priority < b.priority )     
    },
    findTaskIndexById(id) { // find task index in tasks array
        let indexTaskByIdinArray = this.tasks.findIndex(el => el.id === id ); 
        return (indexTaskByIdinArray <0) ? false : indexTaskByIdinArray;
    },
    findTaskById(id) {
        return this.tasks[this.findTaskIndexById(id)]
    }
};