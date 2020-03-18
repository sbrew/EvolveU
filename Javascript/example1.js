console.log("Hello from a javascript file yo dawg!")



function onButtonClicked() {
    var click = Number(document.getElementById("doThings").value)  
    // To ensure the value is read as a number this code line must start with Number()
    console.log("quit pushing my buttons");
    console.log(click+1);

    function size(click){
        // let x = Number(document.getElementById("doThings").value)
        if (click<10){
            console.log("small");
        }
        else if (click>=20){
            console.log("large");
        }
        else {
            console.log("med");
        }
    }
    size(click)
}

// function size(click){
//     // let x = Number(document.getElementById("doThings").value)
//     if (click<10){
//         console.log("small");
//     }
//     else if (click<=20){
//         Console.log("medium");
//     }
//     else {console.log("large");
//     }
// }