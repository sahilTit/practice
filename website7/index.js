document.getElementById("myButton").onclick = function () {
  const myCheckBox = document.getElementById("myCheckBox");
  const visaBtn = document.getElementById("visaBtn");
  const masterCardBtn = document.getElementById("masterCardbtn");
  const paypalBtn = document.getElementById("paypalBtn");

  if (myCheckBox.checked) {
    console.log("you Have Suscribed");
  } else {
    console.log("You Have not Suscribed!");
  }

  if (visaBtn.checked) {
    console.log("You have Selceted Visa Card!");
  } else if (masterCardBtn.checked) {
    console.log("You have Selected Master Card!");
  } else if (paypalBtn.checked) {
    console.log("You Have Slected PayPal!");
  } else {
    console.log("Plese Select a payment Option...");
  }
};
