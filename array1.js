/* Creamos un array y lo mostramos por consola */

let productos = ["Sal fina", "Sal gruesa", "Pimienta", "Oregano", "Comino", "Canela", "Aceite de oliva", "Aceite"]

for(i = 0; i < productos.length; i++){
    console.log("Producto", i + 1);
    console.log("[Posición ", i, "] ", productos[i]);

}


//reemplazamos el elemento en posicion 3 y el elemento en posicion 7 y lo mostramos por consola. 
//el primer argumento es desde que punto del indice empezar a contar, el segundo es cuantos elementos desde ese punto se van a borrar y después los elementos a insertar en el array.
productos.splice(3, 1, 'Mayonesa');
productos.splice(7, 1, 'Aceitunas');

for(i = 0; i < productos.length; i++){
    console.log("Producto", i + 1);
    console.log("[Posición ", i, "] ", productos[i]);

}

//agregamos dulce de leche al principio del array
productos.unshift("Dulce de leche");

//agregamos Miel al final del array 
productos.push("Miel");


//lo mostramos en consola
for(i = 0; i < productos.length; i++){
    console.log("Producto", i + 1);
    console.log("[Posición ", i, "] ", productos[i]);

}


//eliminamos los productos comino, pimienta y sal gruesa del array con el metodo splice 
productos.splice(5, 1);
productos.splice(3, 1);
productos.splice(2, 1);

//mostramos en consola como quedo el array final

for(i = 0; i < productos.length; i++){
    console.log("Producto", i + 1);
    console.log("[Posición ", i, "] ", productos[i]);

}

//Extra: insertar nuevos elementos 
productos.splice(3, 0, 'Pringles');
productos.splice(5, 0, 'Agua Mineral');
productos.splice(3, 0, 'Terma');

//mostramos en consola 
for(i = 0; i < productos.length; i++){
    console.log("Producto", i + 1);
    console.log("[Posición ", i, "] ", productos[i]);

}

//Al insertar dos veces en la posición tres cada instrucción se ejecuta en orden entonces el primer elemento insertado queda en la posición 4 y y se corren en uno todos los siguientes elementos del array.

//Intercambiar lugares entre elementos de un array

productos.splice(4, 1, 'Terma');
productos.splice(3, 1, 'Pringles');
productos.splice(9, 1, 'Aceite de oliva');
productos.splice(7, 1, 'Miel');

//mostramos en consola
for(i = 0; i < productos.length; i++){
    console.log("Producto", i + 1);
    console.log("[Posición ", i, "] ", productos[i]);

}

//POr lo menos haciéndolo de esta forma particularmente no estamos "intercambiando" elementos sino que estaríamos borrando los que ya existen y agregando nuevos.