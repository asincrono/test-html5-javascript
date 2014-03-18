/*
Empleado:
Nombre, sueldo base.
Calle, pobalción, código postal.
Lista de proyectos.
*/

var nomProp;
var empleado1, empleado2,
    direccion,
    lista_proyectos;

empleado1 = {
    'nombre': 'Manuel',
    'sueldoBase': 1000,
    'calle': 'calle de la calle.',
    'población': 'Santiago de Compostela',
    'código postal': '15898',
    'lista de proyectos': ['uno', 'dos', 'tres']
};

direccion = {
    'calle': 'calle de la calle.',
    'población': 'Santiago de Compostela',
    'código postal': '15898'
};

lista_proyectos = {
    '0': 'proyecto 1',
    '1': 'proyecto 2',
    '2': 'proyecto 3'
};

empleado2 = {
    'nombre': 'Manuel',
    'sueldoBase': 1000,
    'dirección': direccion,
    'lista de proyectos': lista_proyectos
};

console.log('Empleado 1');
for (nomProp in empleado1) {
    if (empleado1.hasOwnProperty(nomProp)) {
        console.log(nomProp + ': ' + empleado1[nomProp]);
    }
}

console.log('\nEmpleado 2');
for (nomProp in empleado2) {
    if (empleado2.hasOwnProperty(nomProp)) {
        console.log(nomProp + ': ' + empleado2[nomProp]);
    }
}