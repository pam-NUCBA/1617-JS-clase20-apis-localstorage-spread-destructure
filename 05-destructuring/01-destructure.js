//* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const nums = ["one", "two", "three"];

//*destructuré, lo saqué del array:
const [uno, dos, tres] = nums; //asigne cada valor a una variable

//*eso va a equivaler a hacer esto a manooooo:
const uno2 = nums[0];
const dos2 = nums[1];
const tres2 = nums[2];

console.log(dos);
console.log(tres2);

const objetito = {
    nombre: "Pocho",
    patas: 3,
    trucos: ["mover la cola", "traer la pelota", "dormir la siesta"],
    moverCola: function() {
        console.log("mover cola");
    },
};

//*forma "tradicional":
// console.log(objetito.trucos[0])

//*destructurando un objeto
const { nombre, patas, trucos, moverCola } = objetito;

console.log(trucos[1]);

//*ahora podemos llamar como funcion sin tener que acceder al objeto
moverCola();