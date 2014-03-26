var Controler = function () {
    'use strict';
    var inputTask, listTask, bttSaveTask;
    this.bttSaveTask = document.querySelector('#saveTask');
    this.bttClear = document.querySelector('#clearList');
    this.inputTask = document.querySelector('#inputTask');
    this.listTask = document.querySelector('#taskList');
};

Controler.prototype.getTaskList = function () {
    'use strict';
    var tasksSer;
    tasksSer = localStorage.getItem('task');
    return JSON.parse(tasksSer);
};

Controler.prototype.addTask = function (task, callback, errorHandling) {
    'use strict';
    var tasks, tasksSer;
    tasks = this.getTaskList();
    if (!tasks) {
        tasks = [];
    }
    tasks.push(task);
    tasksSer = JSON.stringify(tasks);
    localStorage.setItem('task', tasksSer);
    callback(task);
};

Controler.prototype.showTask = function (task) {
    'use strict';
    var listItem = document.createElement('li');
    listItem.innerHTML = Task.getString(task);
    this.listTask.appendChild(listItem);
};

Controler.prototype.showTaskList = function () {
    'use strict';
    var i, tasks, listItem;
    tasks = this.getTaskList();
    if (tasks) {
        for (i = 0; i < tasks.length; i += 1) {
            listItem = document.createElement('li');
            listItem.innerHTML = Task.getString(tasks[i]);
            this.listTask.appendChild(listItem);
        }
    }
};

Controler.prototype.initialize = function () {
    'use strict';
    var task, self;
    self = this;
    this.showTaskList();
    this.bttSaveTask.addEventListener('click', function () {
        var taskContent = self.inputTask.value;
        if (taskContent) {
            task = new Task(taskContent);
            self.addTask(task, function () {
                self.showTask(task);
            }, null);
        }
    });
    this.bttClear.addEventListener('click', function () {
        localStorage.removeItem('task');
        self.showTaskList();
    });

};


var controler = new Controler();
controler.initialize();
