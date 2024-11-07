
//funciju ar vienu parametru 
function outputname(Jānis) {
    console.log("Jānis"); 
}
//funkciju ar vienu izsaukumu
outputname();


function outputname(name) {
    console.log(name);
}

outputname("Jānis");



function outputnummber() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

outputnummber(); 



function outputnummberDiapazonā(firstnummber, secondnummber) {
    for (let i = firstnummber; i <= secondnummber; i++) {
        console.log(i);
    }
}

outputnummberDiapazonā(5, 8);

