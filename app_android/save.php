<?php 

$josn = file_get_contents("php://input");
		$data = json_decode($josn, true);
		print_r($data);
/* include 'config.php';
$con = mysql_connect('localhost','root','') or die ("Could not connect: " . mysql_error());

 

mysql_select_db($ajax, $con);


@$locationID = $_POST["lid"];
@$name = mysql_real_escape_string($_POST["name"]);
@$mobileno = mysql_real_escape_string($_POST["mobileno"]);
@$emailid = mysql_real_escape_string($_POST["emailid"]);

@$password = mysql_real_escape_string($_POST["password"]);

 

$sql = "INSERT INTO demo1 (name,mobileno,emailid,password)VALUES ('$name', '$mobileno', '$emailid','$password')";

 

if (!mysql_query($sql, $con)) {

    die('Error: ' . mysql_error());

} else {

    echo "Comment added";

}

 

mysql_close($con); */
?>