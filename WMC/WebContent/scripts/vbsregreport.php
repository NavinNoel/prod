<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link href="../css/styles.css" rel="stylesheet" type="text/css">
</head>
<body>
<br>
<h1>Online registration report</h1>
<div id='vbs-report'>
<table>
	<tbody>
	<tr>
		<th width=13% align="left">Child's Full name</th> 
		<th width=3% align="left">Age</th> 
		<th width=8% align="left">Birth Date</th> 
		<th width=5% align="left">Grade</th> 
		<th width=5% align="left">Sex</th> 
		<th width=13% align="left">Guardian Name</th> 
		<th width=18% align="left">Address</th> 
		<th width=15% align="left">Emergency Contact</th> 
		<th width=20% align="left">Medical Condition</th> 
	</tr>
	<?php
	  $username="xth_16371030";
	  $password="iitim316";
	  $database="xth_16371030_vbs";
	
	  $link = mysql_connect("sql210.xtreemhost.com:3306", $username, $password);
	  if (!$link) {
	      die('Could not connect: ' . mysql_error());
	    }
	  @mysql_select_db($database, $link) or die( "Unable to select database" . mysql_error());
	  $query = "SELECT * FROM vbs WHERE RegistrationDate > CURDATE()-200 ORDER BY RegistrationDate desc,Age,Grade,Sex";
	  $result = mysql_query($query, $link);
	  if(!$result) {
	    die("\nCould not query, please try again. Error: ".mysql_error());
	  }
	  else {
		while ($row = mysql_fetch_array($result)) {
			echo "<tr valign='top'>";
			echo "<td><div><p>" . $row[FirstName] ." ". $row[LastName] . "</p></div></td>";
			echo "<td><div><p>" . $row[Age] . "</p></div></td>";
			echo "<td><div><p>" . $row[DateBirth] . "</p></div></td>";
			echo "<td><div><p>" . $row[Grade] . "</p></div></td>";
			echo "<td><div><p>" . $row[Sex] . "</p></div></td>";
			echo "<td><div><p>" . $row[GuardianName] . "</p></div></td>";
			echo "<td><div><p>" . $row[Address] . "<br>Phone: " . $row[Phone] . "<br>Cell Phone: " . $row[CellPhone] . "<br>Email: " . $row[EmailAddress] . "</p></div></td>";
			echo "<td><div><p>Name: " . $row[EmergencyContactName] . "<br>Phone: " . $row[EmergencyPhone] . "<br>Relation to child: " . $row[RelationtoChild] . "</p></div></td>";
			echo "<td><div><p>" . $row[MedicalCondition] . "</p></div></td>";
			echo "</tr>";
			}
		}
	?>
	</tbody>
</table>
</div>

</body>
</html> 
