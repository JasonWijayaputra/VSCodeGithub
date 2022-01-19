 function angka() {
   

 let message, number;
 number = document.getElementById("num").value;
 if (isNaN(number)|| number < 1 || number > 10){
    message = "Number is not on 1 - 10";
 }
 else {
message = "True";
 }   
 document.getElementById("demo").innerHTML = message;
    
 }
 function tes() {
    document.getElementById("date").innerHTML= Date();
 }