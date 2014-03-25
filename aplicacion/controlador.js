var inputTask = document.querySelector('#inputTask');
var listTask = document.querySelector('#taskList');
var bttSaveTask = document.querySelector('#saveTask');

var getTime = function () {
    'use strict';
    return (new Date()).getTime();
};

var Task = function (content) {
    'use strict';
    this.content = content;
    this.time = getTime();
};

Task.prototype.toString = function () {
    'use strict';
    return 'Tarea: ' + this.content + ' (creada a las: ' + (new Date(this.time)).toLocaleString() + ')';
};

Task.toString = function () {
    'use strict';
    return 'Tarea: ' + this.content + ' (creada a las: ' + (new Date(this.time)).toLocaleString() + ')';
};

var getTaskArray = function () {
    'use strict';
    var tasksSer = localStorage.getItem('task');
    if (tasksSer) {
        return JSON.parse(tasksSer);
    } else {
        return [];
    }
};

var showList = function (taskArray) {
    'use strict';
    var i, listItem, numTasks;
    if (taskArray) {
        for (i = 0; i < taskArray.length; i += 1) {
            listItem = document.createElement('li');
            listItem.innerHTML = taskArray[i].toString();
            listTask.appendChild(listItem);
        }
    }
};

var addListItem = function (task) {
    'use strict';
    var listItem = document.createElement('li');
    listItem.innerHTML = task.toString();
    listTask.appendChild(listItem);
};

var saveTask = function (task) {
    'use strict';
    var taskArray = getTaskArray();

    if (!taskArray) {
        taskArray = [];
    }

    taskArray.push(task);

    localStorage.setItem('task', JSON.stringify(taskArray));
};

var addTask = function (content) {
    'use strict';
    var task, taskArray;

    task = new Task(content);
    saveTask(task);
    addListItem(task);
};

var initialize = function () {
    'use strict';

    var taskArray = getTaskArray();
    showList(taskArray);

    // Activar botón.
    bttSaveTask.addEventListener('click', function () {
        var content = inputTask.value;
        if (content) {
            addTask(content);
        }
    });
};

initialize();
