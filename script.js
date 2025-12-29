document.getElementById("pickupForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Booking received! We will contact you shortly.");
  this.reset();
});
