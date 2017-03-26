<?php

  $bulletindate = $_REQUEST['bulletinDate'] ;

if (($_FILES["file"]["type"] == "application/pdf")
 && ($_FILES["file"]["size"] < 1500000))
  {
  if ($_FILES["file"]["error"] > 0)
    {
    echo "Return Code: " . $_FILES["file"]["error"] . "<br />";
    }
  else
    {
    echo "Upload: " . $_FILES["file"]["name"] . "<br />";
    echo "Type: " . $_FILES["file"]["type"] . "<br />";
    echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";
    echo "Bulletin date: " . $bulletindate . "<br />";

    move_uploaded_file($_FILES["file"]["tmp_name"],
                       "../bulletin/" . $bulletindate . ".pdf");
    copy("../bulletin/" . $bulletindate . ".pdf",
                       "../bulletin/SundayBulletin.pdf");

    }
  }
else
  {
  echo "Invalid file";
  }
?> 
