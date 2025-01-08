function splitExpense() {
   let total = parseFloat(document.getElementById("total").value);
   let people = parseInt(document.getElementById("people").value);

   ///check for valid inputs

   if(isNaN(total) || isNaN(people) || total <=0 || people<=0)
   {
    alert("please enter valid toatal expense and number of people");
    return;
   }

   let eachShare= total / people;
   let result = "Each person owes: &#8377;" + eachShare.toFixed(2);


   ///update the result in the html

   document.getElementById("result").innerHTML = result;
}