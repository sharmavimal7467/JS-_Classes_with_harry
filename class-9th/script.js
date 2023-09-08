for(let i = 0;i<10;i++){
    console.log(i);
    document.write(i+" ");
}

//write a program to count the sum of nth consecutive number
let num = prompt("provide the number at where you want to find submission")
num = Number.parseInt(num);
let sum = 0;
for(let i = 1;i<=num;i++){
    sum = sum+i;
}
document.write(sum);

for(var i = 0;i<5;i++){
    console.log(i);
}
console.log(i);
//but when we use let in place of var is will not print i outside the for loop bcz let is block level and var is global
