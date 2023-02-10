const oldTaskSchema = { 
            title: 'Epic',
            id: 0,
            priority: 1
        };
const toDoList = {
    tasksIndex: 0,
    tasks: [oldTaskSchema],
    addTask (title = 'No title', priority = 5) { 
        isCheck = (title, priority) => { print('Service addTask: some args verifies')}, // chacking imitation
        // some chechink for args
        ++this.tasksIndex,
        this.tasks.push({
            title,
            id: this.tasksIndex,
            priority
        });
    //    print(`Service addTask: task-${this.tasksIndex} added`); 
    },
        // add new method for add ANY tasks object
    addTaskNew (objectShcema = {title: 'title',id: 0, priority: 1}, title_arg ='No title', priority_arg = 5) { 

        let id_default = this.tasksIndex; //default key
        // add new object
        let commonObject = { title: title_arg , id: id_default, priority: priority_arg};
        
        // how many args&
        const args_amount = arguments.length;
        const object_keys_amount = Object.keys(objectShcema).length;
        const keys_object = Object.keys(objectShcema);
        
        // fill all empty args by default values
        for (i = 3; i < object_keys_amount; ++i) {
            //keys_object[i] = 'default' // if keys not in args == default
            objectShcema[keys_object[i]] = 'default';
        }
 
        // fill from args if more than 3
        if (args_amount > 3) {
          for (i = 3; i < args_amount; ++i) { 
            objectShcema[keys_object[i]] = arguments[i];
            }
        };

        const {  title, id, priority, ...additionalData } = objectShcema;

        // new object creating
        pushObject = {
            ...commonObject,
            ...additionalData
        };
        console.log(pushObject);

    isCheck = (title, priority) => { print('Service addTask: some args verifies')}, // chacking imitation
    // some chechink for args
        ++this.tasksIndex,
        this.tasks.push(pushObject);
        console.log(`Service NewAddTask: task-${this.tasksIndex} added`); },

    
    removeTaskById (id = 'undefined') {
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
    updateTaskById (id = 'undefined', params = 'undefined') { 
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
    sortTasksByPriority (order = 'DSC') {
        if (!this.tasks.length) return false; // if task is empty return false

        order = (order !== 'DSC') ? true : false // sort order . is nor DSC means ASC
    
        return        order ?
        this.tasks.sort( (a, b) => a.priority > b.priority ) 
        : 
        this.tasks.sort( (a, b) => a.priority < b.priority ) 
        
    },
    findTaskById (id) { 
        let indexTaskByIdinArray = this.tasks.findIndex(el => el.id === id ); 
        if (indexTaskByIdinArray <0) {
            //print(`Service FindTask: Task id-${id} not found`) // if not found - report it
            return false;
        };
        return indexTaskByIdinArray;
    }
};
// new object
const newTask = {
    tasksIndex: 0,
    tasks:[{
        title: 'first',
        id: 0,
        priority: 1,
        description: 'my goals'
    }]
};
// schema for task object you can change it how you want
const taskSchema = {
    title: 'schema',
    id: 0,
    priority: 1,
    description: 'some description',
    argument_any: 'some values',
    repeater: 'some text'
};

// new global methods
const anyObjectAddTask = toDoList.addTaskNew;
const removeTaskFunc = toDoList.removeTaskById;
const updateTaskFunc = toDoList.updateTaskById;
const sortTaskFunc = toDoList.sortTasksByPriority;
const findTaskByIdFunc = toDoList.findTaskById;

// test CALL
print('Test CALL')
anyObjectAddTask.call(newTask, taskSchema, 'My title', 4);

// test BIND
print('Test BIND')
const addNewTaskAny = anyObjectAddTask.bind(newTask, taskSchema);
addNewTaskAny('First new task', 5, 'my new descriprion');


//logger
function  print(message) {
    console.log(message)
}
