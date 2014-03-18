var cosa = function (nombre) {
    'use strict';
    var argumento;
    for (argumento in arguments) {
        console.log(arguments[argumento]);
    }
    return ('the end.');
};

cosa('uno', 'dos', 'tres', 'etc.');
cosa();

var objeto = {
    toString: function () {
        'use strict';
        return 'hola';
    },
    funcion: function () {
        'use strict';
        console.log(this.toString());
    }
};

var empleado = {
    nombre: 'Alice',
    sueldoBase: 32000,
    calcularSueldo: function () {
        'use strict';
        return this.sueldoBase * 0.5;
    }
};

var Empleado = function (nombre, sueldoBase) {
    'use strict';
    return {
        nombre: nombre,
        sueldoBase: sueldoBase,
        toString: function () {
            return nombre + ' cobra: ' + sueldoBase;
        },
        saludar: function () {
            return 'hola, soy ' + nombre;
        }
    };
};

var Empleada = function (nombre, sueldoBase) {
    this.nombre = nombre;
    this.sueldoBase = sueldoBase;
    this.toString = function () {
        return this.nombre + ' cobra: ' + this.sueldoBase;
    };
    this.saludar = function () {
        return 'hola, soy ' + this.nombre;
    };
};

var MiObjeto = function (arg0, arg1) {
    this.arg[0]: arg0;
    this.arg[1]: arg1;    
}

var emp1 = new Empleado('paco', 1000);
var emp2 = new Empleada('paca', 1500);

console.log(emp1.saludar());
console.log(emp2.saludar());