<?php

$name = $_POST['Name'];
$email = $_POST['Email'];
$mobile = $_POST['Mobile'];

if(!empty($name) || !empty($email) || !empty($mobile))
{
    $host ="localhost";
    $DBUsername = "root";
    $DBPassword = "";
    $DBName = "divine";

    $conn = new mysqli($host, $DBUsername, $DBPassword, $DBName);

    if($conn->connect_error)
    {
        die('Connection error: '.$conn->connect_error);
    }
    else
    {
        //prepare statemet
        $stmt = $conn->prepare("INSERT INTO login (username,email,mobile) values(?,?,?)");
        $stmt->bind_param("ssi",$name, $email, $mobile);
        $execval=$stmt->execute();
        echo $execval;
        echo " <center><h1>Reservation Complete</h1></center>";   
        echo "<center><h3>Back to Home</h3></center>" ; 
        $stmt->close();
        $conn->close();
    }
}
else
{
    echo "Fields cannot be empty!";
    die();
}
?>