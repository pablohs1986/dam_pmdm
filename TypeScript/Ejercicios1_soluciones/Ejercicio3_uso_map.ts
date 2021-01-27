// FORMA 1:

let arrayCadenas: string[] = ["Enero", "Febrero", "marzo", "abril", "marzo"];

let arrayMayusculas = arrayCadenas.map(cad => cad.toUpperCase());
console.log(arrayMayusculas);


// FORMA 2: la más abreviada posible
console.log(["Enero", "Febrero", "marzo", "abril", "marzo"].map(cad => cad.toUpperCase()));

// FORMA 3: igual que la Forma 2 pero un poco menos abreviado:
console.log(["Enero", "Febrero", "marzo", "abril", "marzo"].map(
    function (cad: string): string {
        return cad.toUpperCase();
    }));
