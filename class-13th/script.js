//string is create in both single and double ("") or ('')...
let namm = "vimal";
let val  = namm.length;
    console.log(val);
 for(let i = 0;i<val;i++){
    console.log(namm[i]);
 }
let name2 = 'Viyaan';
let val2  = name2.length;
    console.log(val2);
 for(let i = 0;i<val2;i++){
    document.write(name2[i]+" ");
 }

 //TEMPLATE LITERALS
 let b1 = prompt("Enter the first name first person");
 let b2 = prompt('Enter the name of  second name');
 //here we use template literal by the help of back slesh(``)
 let sent = `${b1} is the frnd of ${b2}`;
 console.log(sent);

 //ESCAPE SEQUENCE CHARACTER
 let msg = "it\' me your boy.";
 console.log(msg.length);    //\'is count as 1.
 let msg2 = 'Yes,you cann\'t find me';
 console.log(msg2.length); 
 console.log(msg+" "+msg2);

 let sub = "Yes ! I know \"That information is very important for safety\" ";
 console.log(sub);

//  \":-also write in this form.
//  \n:-new line
//  \r:-Carriage return
//  \t:-tab