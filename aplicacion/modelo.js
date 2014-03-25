/*
initialize();
Privados:
_showTasks();
_onNewTask();
*/

var Task = function (content) {
    'use strict';
    this.content = content;
    this.date = (new Date()).getTime();
};

Task.prototype.toString = function () {
    'use strict';
    return 'Tarea: ' + this.content + ' (creada a las ' + (new Date(this.date)).toLocaleTimeString() + ' el ' + (new Date(this.date)).toLocaleDateString() + '.';
};

Task.getString = function (task) {
    'use strict';
    return 'Tarea: ' + task.content + ' (creada a las ' + (new Date(task.date)).toLocaleTimeString() + ' el ' + (new Date(task.date)).toLocaleDateString() + '.';
};
