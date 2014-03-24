var inputTask = document.querySelector('#inputTask');
var listTask = document.querySelector('#taskList');
var bttSaveTask = document.querySelector('#saveTask');

var getTime = function () {
    'use strict';
    return (new Date()).getTime();
};

var Task = function (content, time) {
    'use strict';
    this.content = content;
    this.time = time;
};

Task.prototype.toString = function () {
    'use strict';
    return 'c:' + this.content + 't:' + this.time;
};



console.log(getTime());
