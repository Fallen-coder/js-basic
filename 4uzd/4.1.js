let car = {
    firm: "Volkswagen" ,
    model: "Passat" ,
    year: 2000 ,
}

console.log(car.firm);
console.log(car['model']);


let currentYear = new Date().getFullYear();

if (car.firm == Toyota){
    console.log("Šī ir Toyota automašīna")
}
else{
    console.log("Šī nav Toyota automašīna")
}
