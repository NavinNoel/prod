<?php
 $curYear = date("Y");
 if ($handle = opendir('../bulletin')) {
   while (false !== ($file = readdir($handle)))
      {
          if ($file != "." && $file != ".." && $file != "SundayBulletin.pdf")
	  {
             if (preg_match("/".$curYear."/", $file))
          	$Y0list = '<a href="http://www.whitehallmennonitechurch.org/bulletin/'.$file.'">'.$file.'</a><br />' . $Y0list;
             else if (preg_match("/".($curYear-1)."/", $file))
          	$Y1list = '<a href="http://www.whitehallmennonitechurch.org/bulletin/'.$file.'">'.$file.'</a><br />' . $Y1list;
             else if (preg_match("/".($curYear-2)."/", $file))
          	$Y2list = '<a href="http://www.whitehallmennonitechurch.org/bulletin/'.$file.'">'.$file.'</a><br />' . $Y2list;
             else if (preg_match("/".($curYear-3)."/", $file))
          	$Y3list = '<a href="http://www.whitehallmennonitechurch.org/bulletin/'.$file.'">'.$file.'</a><br />' . $Y3list;
          }
       }
  closedir($handle);
  }
?>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link href="../css/styles.css" rel="stylesheet" type="text/css">
</head>
<body>
<br>
<h1>Bulletin archives</h1>
<div id='bulletin-archives'>
<table>
	<tbody>
	<tr>
		<th width=200px align="left"><?=$curYear?></th> 
		<th width=200px align="left"><?=$curYear-1?></th> 
		<th width=200px align="left"><?=$curYear-2?></th> 
		<th width=200px align="left"><?=$curYear-3?></th> 
	</tr>
	<tr valign="top">
		<td><div id='filelist'><p><?=$Y0list?></p></div></td>
		<td><div id='filelist'><p><?=$Y1list?></p></div></td>
		<td><div id='filelist'><p><?=$Y2list?></p></div></td>
		<td><div id='filelist'><p><?=$Y3list?></p></div></td>
	</tr>
	</tbody>
</table>
</div>

</body>
</html> 
