const object = {};
object["Um atributo com espaços"] = 1;
console.log(object);

const object2 = {};
Object.defineProperty(object2, "Um atributo com espaços", {value: 1});
console.log(object2);