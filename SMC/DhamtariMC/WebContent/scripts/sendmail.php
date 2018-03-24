<?php

  $username="church_admin";
  $password="simonite";
  $database="church_db";

  $lastname = $_REQUEST['LastName'] ;
  $firstname = $_REQUEST['FirstName'] ;
  $age = $_REQUEST['Age'] ;
  $datebirth = $_REQUEST['DateBirth'] ;
  $grade = $_REQUEST['Grade'] ;
  $sex = $_REQUEST['Sex'] ;
  $guardianname = $_REQUEST['GuardianName'] ;
  $address = $_REQUEST['Address'] ;
  $phone = $_REQUEST['Phone'] ;
  $cellphone = $_REQUEST['CellPhone'] ;
  $emailaddress = $_REQUEST['EmailAddress'] ;
  $emergencycontactname = $_REQUEST['EmergencyContactName'] ;
  $emergencyphone = $_REQUEST['EmergencyPhone'] ;
  $relationtochild = $_REQUEST['RelationtoChild'] ;
  $medicalcondition = $_REQUEST['MedicalCondition'] ;
  
  $link = mysql_connect("mysql.hostlution.net:3306", $username, $password);
  if (!$link) {
      die('Could not connect: ' . mysql_error());
    }
  echo "Connected successfully... ";
  @mysql_select_db($database, $link) or die( "Unable to select database" . mysql_error());
  $query = "INSERT INTO
              vbs (LastName, FirstName, Age, DateBirth, Grade, Sex, GuardianName, Address, Phone, CellPhone,
                   EmailAddress, EmergencyContactName, EmergencyPhone, RelationtoChild, MedicalCondition, RegistrationDate)
              VALUES ('$lastname', '$firstname', '$age', '$datebirth', '$grade', '$sex', '$guardianname', '$address', '$phone', '$cellphone',
                      '$emailaddress', '$emergencycontactname', '$emergencyphone', '$relationtochild', '$medicalcondition', CURDATE())";
  if(! mysql_query($query, $link))
  {
    die("\nCould not register, please try again. Error: ".mysql_error());
  }
  else
  {
    $mailbody = "Child's name: $firstname $lastname

Age: $age   Date of Birth: $datebirth   Grade: $grade   Sex: $sex

Guardian's name: $guardianname

Address:
$address

Parent's/Guardian's Phone: $phone   Cell phone: $cellphone   Email: $emailaddress

Person to be contacted in case of emergency:
Name: $emergencycontactname   Phone: $emergencyphone   Relationship to Child: $relationtochild

Does your child have any medical condition(s) that we should be aware of? (allergies, medications, etc.)
Please explain below:
$medicalcondition
";
    mail( "NaveenNoel@hotmail.com", "VBS Online Registration Form",
          $mailbody, "From: Web" );
    header( "Location: http://www.whitehallmennonitechurch.org/vbsreg_files/vbsthankyou.htm" );
  }
  mysql_close($link);
  
?>
