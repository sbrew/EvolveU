console.log("hello from external JS")

function onButtonClicked(){
    var fieldValueEntered = document.getElementById("inputField").nodeValue;
    console.log("I'm in the button click event.");
    var resultCalculation = (number(fieldValueEntered)+1);
    var resultText = "Input Plus 1 is " + resultCalculation + " which is " + size(resultCalculation);
    console.log(resultText);
    document.getElementById("demo").innerHTML = resultText;
} 

function size(sizeCheck){
    if(sizeCheck<10){
        return "small";
    }
    else if (sizeCheck >= 20){
        return "large";
    }
    else{return "med";}
}