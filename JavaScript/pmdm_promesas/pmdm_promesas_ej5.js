let promise = new Promise(function(resolve, reject) { 
    resolve(1); 
    setTimeout(() => resolve(2), 1000); 
}); 

// promise.then(alert);
promise
    .then(resultado => console.log(`Resultado: ${resultado}`));

// Devuelve 1 porque una promesa sólo se puede resolver una vez. El segundo resolve se ignora.