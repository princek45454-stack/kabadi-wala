document.getElementById("pickupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  let scrap = document.getElementById("scrap").value;
  let weight = document.getElementById("weight").value;

  let message =
    `New Scrap Pickup Request%0A%0A` +
    `Name: ${name}%0A` +
    `Phone: ${phone}%0A` +
    `Address: ${address}%0A` +
    `Scrap Type: ${scrap}%0A` +
    `Approx Weight: ${weight} kg`;

  let whatsappNumber = "8851535831"; // <-- CHANGE THIS

  let whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

  window.open(whatsappURL, "_blank");
});
