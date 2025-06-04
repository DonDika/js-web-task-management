

document.addEventListener('DOMContentLoaded', () => {

    const myTask = new Task();
    const existingTask = myTask.getTasks();

    const taskWrapper = document.getElementById('taskWrapper');
    const taskWrapperEmpty = document.getElementById('taskWrapperEmpty');

    function displayAllTask() {
        if (existingTask.length === 0) {
            console.log('tidak ada task')
        } else {
            console.log('terdapat beberapa task')
        }
    }

    displayAllTask();
})