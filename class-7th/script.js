console.log('Conditional Expressions');
console.log("prompt-->it will asked the question to you");
console.log("alert-->it will send the msg to you");
console.group("input are in the form of string in js");

let a = prompt("Hey, What is your age ?");
console.log(typeof a);
a=Number.parseInt(a);
console.log(typeof a); // here we convert string into number(int)
if(a>18){
    alert("Congratulation! You are elagible");
}
else{
    alert("Upps! You are minor in age.");
}

//if else ladder




//TERNERY OPERATOR
console.log(a>18?"you can drive😎":"you cann't think about driving😜");
console.log(a);

// switch case study at own

let day = prompt("Enter the day of week");
day = Number.parseInt(day);
// let day = 2;
console.log(typeof day);
switch (day) {
    case 1:
        document.write("This is Sunday😍");
        break;
        case 2:
            document.write("This is Monday🥱");
            break;
            case 3:
            document.write("This is Tuesday🤔");
            break;
            case 4:
            document.write("This is Wednesday😉");
            break;
            case 5:
            document.write("This is Thursday😊");
            break;
            case 6:
            document.write("This is Friday😁");
            break;
            case 7:
            document.write("This is Saturday🤩");
            break;
    default:
        document.write("Please! Enter the valid day🙂");
}

//we also pass mutliple condition in one case and multiple statement in one case.