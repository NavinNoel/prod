<?php
  
  $user = isset($_REQUEST['user']) ? $_REQUEST['user'] : '';
  $password = isset($_REQUEST['password']) ? $_REQUEST['password'] : '';
  $driver_id = isset($_REQUEST['driver_id']) ? $_REQUEST['driver_id'] : '';
  
  if ($user=="wmc18052" && $password=="simonite") {
	if (1==1) {
			$server="sql210.xtreemhost.com:3306";
			$username="xth_16371030";
			$password="iitim316";
	 		$database="xth_16371030_vbs";
	} else {
			$server="127.0.0.1:3306";
			$username="root";
			$password="";
			$database="data";
	}
	  
	$mysqli = new mysqli($server, $username, $password, $database); 
	
	if ($mysqli->connect_error) {
	    die("$mysqli->connect_errno: $mysqli->connect_error");
	}
	  
	//Query listing record
	if ($driver_id != "") {
		$query = "SELECT * FROM drivers WHERE driver_id = '$driver_id'";
	} else {
		$query = "SELECT * FROM drivers";
	}
	
	$result = $mysqli->query($query);
  	$row = $result->fetch_array(MYSQLI_ASSOC);
	while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
  		$drivers[] = $row;
	}
  	
  	$result->free();
	  
	$mysqli->close();
	
  }
  
  if ($drivers) {
	  	echo json_encode($drivers);
  } else {
  		echo json_encode(FALSE);
  }
  
?>
