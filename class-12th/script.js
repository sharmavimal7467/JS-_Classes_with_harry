// done by the help of simple for loop
let package ={
    Vimal : 90,
    Viyan : 85,
    vihaan : 80,
    kunnal : 75,
}
for(let i = 0;i<Object.keys(package).length;i++){
    console.log("The package of " + Object.keys(package)[i]+" are "+package[Object.keys(package)[i]]);
}



// Better way to doing by the help of for in

console.log("Better way to doing by the help of (for in)");

for(let sal in package){
    console.log("The package of "+sal+" are "+package[sal]);
}

let cn = 19;
let i;
while(i!=cn){
    i = prompt("Enter the correct number");
if(i!=cn){
    alert("Try again.")
}
}
alert("You have entered a correct number.")

let a = prompt("please enter first number")
let b = prompt("please enter second number")
let c = prompt("please enter third number")
let d = prompt("please enter forth number")

function findMean(x,y,z,w){
    return((x+y+z+w)/4);
}
console.log("Mean of 4 number are", findMean(a,b,c,d));

let package1 ={
        Vimal : 90,
        Viyan : 85,
        vihaan : 80,
        kunnal : 75,
        muk : 70,
    }
    let sum = 0;
    let ct = 0;
    for(let sal in package1){
        sum = sum +package1[sal];
        ct++;
    }
    let mean = sum/ct;
    console.log(mean);

    const mean1 = (a,b,c,d,e) =>{
        return(a+b+c+d+e)/5;
    }
    console.log(mean1(90,85,80,75,70));
 