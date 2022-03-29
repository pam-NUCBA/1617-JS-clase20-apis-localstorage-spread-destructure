//*https://developer.mozilla.org/es/docs/Web/API/Window/localStorage

//con un string no nos da mayor problema:
const saveStringStorage = () => {
    const mascota = "Pocho";
    localStorage.setItem("perro", mascota);
};

saveStringStorage();

const saveObjectStorage = () => {
    const productos = [{
            id: 1,
            tipo: "bebida",
            nombre: "coca cola",
        },
        {
            id: 2,
            tipo: "comida",
            nombre: "huevo frito",
        },
        {
            id: 3,
            tipo: "comida",
            nombre: "hamburguesa",
        },
    ];

    //*esto nos da un object Object
    //https://www.w3schools.com/js/js_object_display.asp
    // localStorage.setItem("cosas_guardadas", productos)
    //*solución: stringify! https://www.w3schools.com/js/js_json_stringify.asp
    localStorage.setItem("cosas_guardadas", JSON.stringify(productos));
};

saveObjectStorage();

const loadLocalStorage = () => {
    //console.log(localStorage.getItem("cosas_guardadas")) //esto nos va a devolver un string!
    //*entonces, lo reconvertimos a objeto:

    console.log(JSON.parse(localStorage.getItem("cosas_guardadas")));
};

loadLocalStorage();