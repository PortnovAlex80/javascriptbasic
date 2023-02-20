'use strict'
const toDoList = {
    tasks: [
        { 
            title: 'Epic',
            id: 0,
            order: 1
           }
    ],
    getTaskIndexById(id) {
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
    sort() {
        this.tasks.sort((a, b) => a.order - b.order)
    },
    findTaskById(id) {
        return this.tasks[this.getTaskIndexById(id)]
    }
}

const newTask = {
        tasks: [
            { 
            id: 1,
            name: 'Test task',
            description: 'description',
            order: 6
           }]
        };

newTask.getTaskIndexById = toDoList.getTaskIndexById.bind(newTask);
const addTask = toDoList.add;
const removeTask = toDoList.removeById;
const updateById = toDoList.updateById.bind(newTask);
const sortTask = toDoList.sort.bind(newTask); 
const findTask = toDoList.findTaskById.bind(newTask);

addTask.call(newTask, {  // call
            id: 2,
            name: 'Test task 2',
            description: 'description 2',
            order: 2
           });
addTask.call(newTask, { 
            id: 3,
            name: 'Test task 3',
            description: 'description 3',
            order: 3
           });

updateById(2, 'name', 'update description'); //bind
removeTask.apply(newTask, [2]); // apply
findTask(3); // bind
sortTask.call(newTask)  //call
