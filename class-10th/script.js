//in do while loop, loop will run at least once...
 

let num = prompt("enter the number")
num = Number.parseInt(num);
let i = 0
while(i%2===0 && i<=num){
    console.log(i);
    i++;
}