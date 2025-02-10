const tasks = [   
    { taskName: "Write report", completed: true, priority: 2 },   
    { taskName: "Attend meeting", completed: false, priority: 3 },   
    { taskName: "Fix bug", completed: false, priority: 1 },   
    { taskName: "Update website", completed: true, priority: 4 } 
];

const highPriorityTask = tasks.find(task=>task.priority < 3);
const firstIncompleteTaskIndex = tasks.findIndex(task=>!task.completed);
const numberOfCompletedTask = tasks.reduce((acc,curr)=>curr.completed? acc+1 : acc, 0);

console.log(highPriorityTask,firstIncompleteTaskIndex,numberOfCompletedTask);