const toDoList = {
    tasks: [
        { 
            title: 'Epic',
            id: 0,
            priority: 1
           }
    ],
    getTaskIndexById(id) { // find task index in tasks array
        const taskIndex = this.tasks.findIndex(el => el.id === id );
        if (taskIndex === -1) {
                console.error(`Task id-${id} not exist`); 
                return false;
        };
        return taskIndex;
    },
    add(task) { 
            this.tasks.push(task);
    },
    removeById(id) {
        const taskIndex = this.getTaskIndexById(id);
        if (taskIndex) {
            this.tasks.splice(taskIndex,1);}
        },
    updateById(id, key, value) {     
        const taskIndex = this.getTaskIndexById(id);
        if (taskIndex) { 
            const task = this.tasks[taskIndex];
            task[key] = task[key] && value;  
            }
    },
    sort(order = 'DSC') {
        return (order !== 'DSC') ? 
            this.tasks.sort( (a, b) => a.priority > b.priority ) :
            this.tasks.sort( (a, b) => a.priority < b.priority ) 
        },
    findTaskById(id) {
        return this.tasks[this.getTaskIndexById(id)]
    }
}