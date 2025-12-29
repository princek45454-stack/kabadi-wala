document.getElementById("scrapForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Booking Submitted Successfully! We will contact you soon.");
    this.reset();
});
