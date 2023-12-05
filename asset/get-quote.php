<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Handle the form submission here

    // For the "Get Quote" section
    $freightType = $_POST["freight_type"];
    // Insert this data into the database as needed

    // For the order submission section
    $originCountry = $_POST["originCountry"];
    $destination = $_POST["destination"];
    $quantity = $_POST["quantity"];
    $weight = $_POST["weight"];
    $height = $_POST["height"];
    $length = $_POST["length"];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    
    // Database connection parameters
    $host = "your_database_host";  // Change to your database host
    $user = "your_database_user";  // Change to your database username
    $password = "your_database_password";  // Change to your database password
    $database = "your_database_name";  // Change to your database name

    // Connect to the database
    $mysqli = new mysqli($host, $user, $password, $database);

    if ($mysqli->connect_error) {
        die("Connection failed: " . $mysqli->connect_error);
    }

    // Insert form data into the database for the order submission section
    $query = "INSERT INTO orders (originCountry, destination, quantity, weight, height, length, name, email, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param("sssssssss", $originCountry, $destination, $quantity, $weight, $height, $length, $name, $email, $phone);

    if ($stmt->execute()) {
        echo "Form data submitted successfully.";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the database connection
    $stmt->close();
    $mysqli->close();
}
?>
