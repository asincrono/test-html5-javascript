var Task = function (content) {
    'use strict';
    this.content = content;
    this.date = (new Date()).getTime();
};

Task.getString = function (task) {
    'use strict';
    return 'Tarea: ' + task.content + ' (creada a las ' + (new Date(task.date)).toLocaleTimeString() + ' el ' + (new Date(task.date)).toLocaleDateString() + ').';
};
