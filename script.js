<<<<<<< HEAD
       function convertirCF() {
           let CF = prompt("A què vols convertir C/F?");
           let temp = parseFloat(prompt("Temperatura:"));
           if( CF.toUpperCase() == "F" ){
               let cent = (temp-32)/(9/5);
               console.log(`${temp}F -> ${cent}C`);
           }else if (CF.toUpperCase() == "C"){
               let fh = (9/5) * temp + 32;
               console.log(`${temp}C -> ${fh}F`);
           }else {
               console.log("Només es pot C ó F");
           }
       }
=======
function convertirCF() {
    let CF = prompt("A què vols convertir C/F?");
    let temp = parseFloat(prompt("Temperatura:"));
    if( CF.toUpperCase() == "F" ){
        let cent = (temp-32)/(9/5);
        console.log(`${temp}F -> ${cent}C`);
    }else if (CF.toUpperCase() == "C"){
        let fh = (9/5) * temp + 32;
        console.log(`${temp}C -> ${fh}F`);
    }else {
        console.log("Només es pot C ó F");
    }
}
>>>>>>> c6fdc5f255c2e0d9a9c452aba8fd4f4b1fafa68b
