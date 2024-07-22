<?php
// http://localhost/ecoplanbackendapi/userRegistration.php
// Enable error reporting
error_reporting(E_ALL);
// Allow from any origin
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "ecoplan_db");

// Check connection
if ($conn->connect_error) {
    die(json_encode(["message" => "Connection failed: " . $conn->connect_error]));
}

// create a variable to store data we receive from the backend
$data = json_decode(file_get_contents("php://input"));

if ($data) {
    $name = $conn->real_escape_string($data->name);
    $department = $conn->real_escape_string($data->department);
    $officeno = $conn->real_escape_string($data->officeno);
    $designation = $conn->real_escape_string($data->designation);
    $extensionno = $conn->real_escape_string($data->extensionno);
    $email = $conn->real_escape_string($data->email);
    $password = password_hash($conn->real_escape_string($data->password), PASSWORD_DEFAULT);

    // Check if email already exists
    $check_email = "SELECT email FROM user_registration WHERE email = '$email'";
    $result = $conn->query($check_email);

    if ($result->num_rows > 0) {
        echo json_encode(["message" => "Email already registered"]);
    } else {
        $sql = "INSERT INTO user_registration(name, department, officeno, designation, extension_no, email, password) 
                VALUES('$name','$department','$officeno','$designation','$extensionno','$email','$password')";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["message" => "Account created successfully"]);
        } else {
            echo json_encode(["message" => "Error: " . $conn->error]);
        }
    }
    $conn->close();
} else {
    echo json_encode(["message" => "No data received"]);
}

