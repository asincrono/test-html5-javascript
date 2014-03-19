var MiObjeto = function (arg0, arg1, arg2) {
    this.arg0 = arg0;
    this.arg1 = arg1;
    this.arg2 = arg2;
};

MiObjeto.prototype.saludar = function () {
    return 'hola ' + this.nombre;
};


var myFunc = function (value) {
    'use strict';
    return value * 3;
};

var objeto1 = new MiObjeto('primero', 'segundo', 'tercero');
var objeto2 = new MiObjeto('tercero', 'cuarto', 'quinto');
