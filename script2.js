document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Display success message
    var successMessage = document.createElement('p');
    successMessage.textContent = 'Booking confirmed!';
    successMessage.style.color = 'green';
    var bookingSection = document.getElementById('booking');
    bookingSection.innerHTML = ''; // Clear previous content
    bookingSection.appendChild(successMessage);

    // You would typically send this data to a server for processing
});
