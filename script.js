// Function to switch tabs
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Function to authenticate user (dummy function for demonstration)
  function authenticate() {
    // Perform authentication (dummy logic)
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Dummy authentication check - replace this with actual authentication logic
    if (username === "user" && password === "password") {
      openTab(event, 'services'); // Open Services tab after successful login
    } else {
      alert("Invalid username or password");
    }
  }
  
  // Show the Login tab by default
  document.getElementById("login").style.display = "block";
  
  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.getElementById('submitButton').addEventListener('click', function() {
    // Handle form submission
    // Gather data from input fields and perform necessary actions
  });
  function saveAccountDetails() {
    // Get values from the account form
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const language = document.getElementById('language').value;
  
    // Display captured details in the next tab
    document.getElementById('displayedName').textContent = `Name: ${name}`;
    document.getElementById('displayedMobile').textContent = `Mobile Number: ${mobile}`;
    document.getElementById('displayedEmail').textContent = `Email ID: ${email}`;
    document.getElementById('displayedLanguage').textContent = `Language: ${language}`;
  
    // Switch to the next tab (displayedDetails)
    openTab(event, 'displayDetails');
  }
  function initMap() {
    const mapOptions = {
      center: { lat: -34.397, lng: 150.644 }, // Set the initial map center coordinates
      zoom: 8 // Set the initial zoom level
    };
  
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
    // Use the Geolocation API to get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
  
        map.setCenter(pos);
  
        // You can add a marker for the user's current location if needed
        const marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: 'Your Location'
        });
      }, function() {
        handleLocationError(true, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, map.getCenter());
    }
  }
  
  function handleLocationError(browserHasGeolocation, pos) {
    // Handle any errors with Geolocation API
    console.log(browserHasGeolocation
      ? 'Error: The Geolocation service failed.'
      : 'Error: Your browser doesn\'t support geolocation.');
  }
  
  // Load the Google Maps API script asynchronously
  function loadMapScript() {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
    script.defer = true;
    document.head.appendChild(script);
  }
  
  // Call the function to load the map script
  loadMapScript();
  // Function to authenticate user
  function authenticate() {
    // Perform authentication (dummy logic)
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Dummy authentication check - replace this with actual authentication logic
    if (username === "user" && password === "password") {
      openTab('services'); // Open Services tab after successful login
    } else {
      alert("Invalid username or password");
    }
  }
  const today = new Date();
  const age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  function updateFuelCapacity() {
    const fuelInput = document.getElementById('fuelInput');
    const fuelProgress = document.getElementById('fuelProgress');
  
    const fuelAmount = parseFloat(fuelInput.value);
  
    if (!isNaN(fuelAmount) && fuelAmount >= 0) {                
      const maxCapacity = 50; // Maximum fuel capacity in liters (you can adjust this value)
  
      // Calculate the percentage of fuel amount
      const percentage = (fuelAmount / maxCapacity) * 100;
      
      // Set the width of the progress bar based on the percentage
      fuelProgress.style.width = `${percentage}%`;
    } else {
      alert('Please enter a valid fuel amount (non-negative number).');
    }
  }
    // JavaScript to handle changing the profile picture
    const fileInput = document.getElementById('fileInput');
    const profilePicture = document.getElementById('profile-picture');
    
    fileInput.addEventListener('change', function(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
    
      reader.onload = function(e) {
        profilePicture.src = e.target.result;
      };
    
      reader.readAsDataURL(file);
    });
    function checkFuelType() {
      const fuelTypeElement = document.getElementById('fuelType');
      const selectedFuelType = fuelTypeElement.options[fuelTypeElement.selectedIndex].text;
      const displayFuelType = document.getElementById('selectedFuelType');
      
      displayFuelType.textContent = `Selected Fuel Type: ${selectedFuelType}`;
    }
    function openDeliveryOptions() {
      const iframe = document.createElement('iframe');
      iframe.src = 'delivery_options.html';
      iframe.width = '100%';
      iframe.height = '500px';
      document.getElementById('deliveryOptionsContainer').appendChild(iframe);
  }
