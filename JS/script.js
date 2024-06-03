const { createApp } = Vue

createApp({
    data() {
        return {
            todoList: [
                { 
                    content: 'Andare a Roma',
                    done: false
                },
                {
                    content: 'Mangiare la carbonara',
                    done: true
                },
                { 
                    content: 'Scavare le patate',
                    done: false
                },
                { 
                    content: 'Pulire i gatti',
                    done: false
                },
                { 
                    content: 'Buttare la spazzatura',
                    done: false
                },
            ],
            newTaskContent: '',
        }
    },
    methods: {
        toggleDone(itemIndex) {
            this.todoList[itemIndex].done = !this.todoList[itemIndex].done
        },
        addNewTask(newContent) {
            const newTask = {
                content: newContent,
                done: false,
            }
            this.todoList.push(newTask);
        },
        clearNewTaskInput() {
            this.newTaskContent = '';
        },
        removeTask: function(taskIndex){
            this.todoList.splice(taskIndex, 1);
        }
    }
}).mount('#app');