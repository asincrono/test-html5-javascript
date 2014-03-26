var Controler = function () {
    'use strict';

    this.bttClear = document.querySelector('#clearList');
    this.inputTask = document.querySelector('#inputTask');
    this.listTask = document.querySelector('#taskList');
};

Controler.jsonUrl = 'http://localhost:8181/tareas.json';

Controler.prototype._getTasksJSON = function () {
    'use strict';
    if (!this.tasks) {
        'use strict';
        var url, deferred, promise;
        deferred = $.getJSON(Controler.jsonUrl);
        return deferred.promise();
    }
};

Controler.prototype._getTaskList = function () {
    'use strict';
    var tasksSer;
    tasksSer = localStorage.getItem('task');
    return JSON.parse(tasksSer);
};

Controler.prototype.addTask = function (task) {
    'use strict';
    var tasks;
    tasks = this._getTaskList();
    if (!tasks) {
        tasks = [];
    }
    tasks.push(task);
    this.tasks.push(task);
};

Controler.prototype.showTask = function (task) {
    'use strict';
    var listItem = document.createElement('li');
    listItem.innerHTML = Task.getString(task);
    this.listTask.appendChild(listItem);
};

Controler.prototype.showTaskList = function (tasks) {
    'use strict';
    var i, listItem;
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
    var self, promise;

    self = this;

    promise = this._getTasksJSON();

    if (promise) {
        promise.done(function (tasks) {
            this.tasks = tasks;
            self.showTaskList(tasks);
        });
    }

    promise.fail(function () {
        console.log('fail!');
    });

    $('#clearTask').click(function (evt) {
        localStorage.removeItem('task');
        console.log('tareas borradas');
    });
    $('#saveTask').click(function (evt) {
        task = new Task(self.inputTask.value);
        self.addTask(task);
        console.log('tarea salvada.');
    });
};

//    'use strict';
//    var task, self;
//    self = this;
//    this.showTaskList();
//    this.bttSaveTask.addEventListener('click', function () {
//        var taskContent = self.inputTask.value;
//        if (taskContent) {
//            task = new Task(taskContent);
//            self.addTask(task, function () {
//                self.showTask(task);
//            }, null);
//        }
//    });
//    this.bttClear.addEventListener('click', function () {
//        localStorage.removeItem('task');
//        self.showTaskList();
//    });
//
//};


var controler = new Controler();
controler.initialize();
