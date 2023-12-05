// Enable hover for the dropdown button
const dropdownToggle = document.querySelector('.nav-item.dropdown .nav-link.dropdown-toggle');
dropdownToggle.addEventListener('mouseover', function () {
    this.click();
});
// Array of countries
const countries = [
    "Select",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Brazzaville)",
    "Congo (Kinshasa)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
    
];

// Select element
const countrySelect = document.getElementById("country");

// Populate the select element with countries
countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country.toLowerCase().replace(/\s/g, '-');
    option.text = country;
    countrySelect.appendChild(option);
});
function updateCounter(counterId, targetNumber) {
    let countElement = document.getElementById(counterId);
    let currentNumber = parseInt(countElement.innerText);
  
    if (currentNumber < targetNumber) {
        currentNumber += 1;
        countElement.innerText = currentNumber + "%";
        setTimeout(function() {
            updateCounter(counterId, targetNumber);
        }, 200); // Wait for 1 second
    }
  };


// Search Function
document.addEventListener("DOMContentLoaded", function () {
    // content for search
    const content = [
      {
        title: "Home",
        content: "Connecting The World With Your Cargo."
      },
      {
        title: "Our History",
        content: "Sierraline Cargo Service is a distinguished name in the realm of logistics and cargo services. With a rich history and an unwavering commitment to excellence, we have earned the trust of clients around the world. Our mission is simple, to deliver reliable and efficient shipping solutions tailored to your unique needs."
      },
      {
        title: "Services",
        content: "Private Jet Charter, Cargo and Logistics, Gold and Precious Stones, Custom Brokerage"
      },
      {
        title: "Contact Information",
        content: "SierraLine Cargo Services (North America), 180 Parkhill Avenue, Staten Island, NY 10304, United States. Phone: 530-3509259, Email: info@sierralinecargo.com"
      },
      {
        title: "Our Success Stories",
        content: "Rebecca S., Jonathan L., Sofia M., David H., Maria R."
      }
    ];
  
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
  
    searchButton.addEventListener("click", function () {
      const searchTerm = searchInput.value.toLowerCase();
  
      // Perform the search
      const searchResults = content.filter(item => item.content.toLowerCase().includes(searchTerm));
  
      // Display the search results
      displaySearchResults(searchResults);
    });
  
    function displaySearchResults(results) {
      const resultsContainer = document.getElementById("search-results");
  
      // Clear previous results
      resultsContainer.innerHTML = "";
  
      if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No results found.</p>";
      } else {
        results.forEach(result => {
          const resultItem = document.createElement("div");
          resultItem.innerHTML = `<h3>${result.title}</h3><p>${result.content}</p>`;
          resultsContainer.appendChild(resultItem);
        });
      }
    }
  });
     
   
   

    function updateCounter(counterId, targetNumber) {
        let countElement = document.getElementById(counterId);
        let currentNumber = parseInt(countElement.innerText);
      
        if (currentNumber < targetNumber) {
            currentNumber += 1;
            countElement.innerText = currentNumber + "%";
            setTimeout(function() {
                updateCounter(counterId, targetNumber);
            }, 200); // Wait for 1 second
        }
      }
    
      
      window.onload = function() {
        updateCounter("counter1", 89);
        updateCounter("counter2", 87);
        updateCounter("counter3", 83);
        updateCounter("counter4", 85);
        updateCounter("counter5", 100);
        updateCounter("counter6", 100);
        updateCounter("counter7", 100);
        updateCounter("counter8", 100);
      };
      
      


