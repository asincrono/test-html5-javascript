// Reservamos espacio en el heap para un objeto.
var obj_id = {}; // Devuelve el objetc id (es transparente).
var emp1 = obj_id;
var nomProp;
emp1.nombre = 'Alice';
emp1.sueldoBase = 1000;
console.log(emp1);
for (nomProp in emp1) {
    if (emp1.hasOwnProperty(nomProp)) {
        console.log('Propiedad ' + emp1[nomProp]);
    }
}
