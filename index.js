// let adding=document.getElementById('add');

// function addition(){

//     let a=prompt("Enter a");
//     let b=prompt("Enter b");
//     let c=a-b;
//     let d=`Addition is ${c}`
//     adding.innerText+=" "+d;
//     d=0;
//     adding.innerText=Add;
//     d=0;

// }



let adding = document.getElementById('add');
let subt=document.getElementById('sub');
function addition() {
    let a = prompt("Enter a");
    let b = prompt("Enter b");

    // Convert the input strings to numbers
    let numA = parseFloat(a);
    let numB = parseFloat(b);

    // Perform the addition
    let c = numA + numB;

    // Display the result
    let d = `Addition is ${c}`;
    adding.innerText = d;
}


function subtraction(){
    let a = prompt("Enter a");
    let b = prompt("Enter b");

    // Convert the input strings to numbers
    let numA = parseFloat(a);
    let numB = parseFloat(b);

    // Perform the addition
    let c = numA - numB;

    // Display the result
    let d = `subtraction is ${c}`;
    subt.innerText = d;
}
