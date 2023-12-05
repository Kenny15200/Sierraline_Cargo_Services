<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Gather form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $country = $_POST["country"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    // Create the email message
    $subject = "Contact Form Submission from $name";
    $to = "your_email@example.com"; // Replace with your email address
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $message = "Name: $name\nEmail: $email\nCountry: $country\nPhone: $phone\nMessage:\n$message";

    // Send the email
    $success = mail($to, $subject, $message, $headers);

    if ($success) {
        // Email sent successfully
        echo "Thank you for your message. We will get back to you soon.";
    } else {
        // Email not sent
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>

<?php
// Database configuration (please replace with your database credentials)
$hostname = "your_database_host";
$username = "your_database_username";
$password = "your_database_password";
$database = "your_database_name";

// Create a connection to the database
$connection = mysqli_connect($hostname, $username, $password, $database);

// Check if the connection was successful
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Gather form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $country = $_POST["country"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    // SQL query to insert data into the database
    $sql = "INSERT INTO contact_form (name, email, country, phone, message) 
            VALUES ('$name', '$email', '$country', '$phone', '$message')";

    if (mysqli_query($connection, $sql)) {
        // Data has been successfully inserted
        header("Location: success.html"); // Redirect to a success page
        exit;
    } else {
        // Error occurred while inserting data
        header("Location: error.html"); // Redirect to an error page
        exit;
    }
}

// Close the database connection
mysqli_close($connection);
?>
