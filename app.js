//console.log('hello');

var userName = prompt("please Enter your Name ");
var userGender = prompt("please Enter your Gender:(M/F)");
var userAge = prompt("please Enter your Age ");
if (userAge <= 0 ) {
    alert ("Are you really less than zero?!")
}
var welcomingMessage = confirm("Do you want to see the welcome message");



// checking if user is female
if (userGender === 'F'){
    if (welcomingMessage === true){
        alert ("Hello Ms "+ userName + "!" );
    }


}else if (userGender === 'M') {
    if (welcomingMessage === true){
        alert ("Hello Mr "+ userName + "!" );
    }

}else { if (welcomingMessage === true){
    alert ("Hello "+ userName + "!" );
}

}

var questionOne = prompt("Do you like to get up early and drink a cup of coffee? Y/N");
var questionTwo = prompt("Making simple daily plans helps you reach your goal, right? Y/N");
var questionThree = prompt("Do you like trying out a new idea almost every day? I mean, you don't like routine? Y/N");
alert ("If your answers are “OK,yes”, then this “ToDo List” app is perfect for you");

required();

function required(){
if (questionOne || questionTwo || questionThree === ""){
    return "invalid";
}}



const infoArr = [userName,userGender,userAge,welcomingMessage,questionOne,questionTwo,questionThree];
console.log(infoArr);


