document.addEventListener('DOMContentLoaded', function(){
    const submit = document.querySelector('#submit');
    const newTasks = document.querySelector('#task')

    submit.disabled = true;

    newTasks.onkeyup = () => {
        if (newTasks.value.length > 0){
            submit.disabled = false;
        }
        else {
            submit.disabled = true;
        }
    }

    document.querySelector('form').onsubmit = () => {
        const task = newTasks.value;

        const li = document.createElement('li');
        li.innerHTML = task;

        document.querySelector('#tasks').append(li);

        newTasks.value = '';

        submit.disabled = true;

        return false;
    }
    
});