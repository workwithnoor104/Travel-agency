const url= new
URLSearchParams(window.location.search);
const packageName = url.get("Package");
const packageDiv = document.getElementById("packageName");
packageDiv.textContent = packageName;
const submitBtn = document.getElementById("Submit");
submitBtn.addEventListener("click", 
    function (){
 const inputs =document.querySelectorAll(".placeholder");

 let empty = false;
 inputs.forEach(function(input){
    if(input.value.trim() === ""){
        empty =true;
    }
 });
 if(empty){
    alert("please fill in all the fields.");
    return;
 }
  alert("Your booking has been submitted succesfully!");
 
});