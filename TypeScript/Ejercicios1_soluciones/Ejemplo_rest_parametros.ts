// ...numeros   indica que pueden ir varios números
function suma(...numeros){
    let resu=0;
    for(var i=0;i<numeros.length;i++){
       resu+=numeros[i];
    }
    return resu;
}

console.log(suma(2,3,5,6));