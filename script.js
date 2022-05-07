let calc = () => {
  // Get the data from element on the form.
  const billAmt = document.getElementById("bill-amount");
  const noOfPeople = document.getElementById("people");
  console.log(`The bill amount is : ${billAmt.value}`);
  console.log(`The number of peoples are : ${noOfPeople.value}`);
  // Split the bill amount among the people.
  const amountPerPerson = billAmt.value / noOfPeople.value;
  // Display the amount per person in the HTML.
  document.getElementById("all-in-total").innerHTML = billAmt.value;
  document.getElementById("total-for-each").innerHTML = amountPerPerson;
};

let reset = () => {
  // Reset the form.
  document.getElementById("bill-amount").value = "";
  document.getElementById("people").value = "";
  // Reset the HTML.
  document.getElementById("all-in-total").innerHTML = "";
  document.getElementById("total-for-each").innerHTML = "";
};
