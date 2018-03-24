function headerContent() {
	return "<table id='headerleftframe'>"
			+"<tbody>"
			+"	<tr>"
			+"		<td>"
			+"			<img id='logo' alt='logo' src='images/mci-logo.png'>"
			+"		</td>" 
			+"		<td>"
			+"			<div id='heading'>"
			+"				<div>सुंदरगंज मेनोनाइट चर्च</div>"
			+"				<div>Sunderganj Mennonite Church</div>"
			+"			</div>"
			+"			<div id='tobepeopleofGod'>"
			+				"Foundation is Jesus Christ"
			+"			</div>"
			+"		</td>"
			+"	</tr>"
			+"</tbody>"
			+"</table>"
			;
}

function mainMenu() {
	return "<div id='cssmenu'>"
			+"<ul class=l0>"
			+"   <li id='mainmenu-home'><a href='index.html'><span>Home</span></a></li>"
			+"   <li id='mainmenu-about' class='has-sub '><a href='about.html'><span>About</span></a>"
			+"      <ul class=l1>"
			+"         <li><a href='about.html'><span>About Us</span></a></li>"
			+"         <li><a href='about.html?option=pastor'><span>Our Pastor</span></a></li>"
			+"         <li><a href='about.html?option=mennonites'><span>Who are the Mennonites?</span></a></li>"
			+"         <li><a href='about.html?option=confession'><span>Confession of Faith</span></a></li>"
			+"         <li><a href='findus.html'><span>Directions</span></a></li>"
			+"      </ul>"
			+"   </li>"
//			+"   <li id='mainmenu-bulletin'><a href='bulletin.html'><span>Bulletin</span></a></li>"
			+"   <li id='mainmenu-calendar'><a href='calendar.html'><span>Calendar</span></a></li>"
			+"   <li id='mainmenu-blog'><a href='blog.html'><span>Blog</span></a></li>"
			+"   <li id='mainmenu-resources'><a href='links.html'><span>Resources</span></a></li>"
			+"   <li id='mainmenu-gallery'><a href='fbalbums.html'><span>Photo Gallery</span></a>"
//			+"     <ul class=l1>"
//			+"        <li><a href='#'><span>Pictures</span></a></li>"
//			+"        <li><a href='#'><span>Videos</span></a></li>"
//			+"        <li><a href='podcast.html'><span>Podcast</span></a></li>"
//			+"      </ul>"
			+"  </li>"
			+"</ul>"
			+"</div>";
}

var currentOrientation = 1;
var rotate = false;
var intID ;

function drawDove() {
	return;
    var time = new Date();
    var xOffset = 50;
    var xScale = time.getMilliseconds();
	var fps = 1000;
	var canvas = document.getElementById('play');
	var ctx = canvas.getContext('2d');
	
    ctx.restore();
	ctx.save();
	ctx.scale(0.75,0.75);
	
	if (!rotate) {
		xScale = 1;
	}
	
	ctx.save();
    ctx.clearRect(0,0,150,150);
	ctx.translate(xOffset,0);
	if (xScale < 10) {
		switch (currentOrientation) {
		case 1:
			currentOrientation  = 2;
			break;
		case 2:
			currentOrientation  = 3;
			break;
		case 3:
			currentOrientation  = 4;
			break;
		case 4:
			currentOrientation  = 1;
			break;
		}
	}
	/*
	if (xScale < fps/4) {
		currentOrientation  = 2;
	} else if (xScale < fps/2) {
		currentOrientation  = 3;
	} else if (xScale < fps*3/4) {
		currentOrientation  = 4;
	} else if (xScale < fps) {
		currentOrientation  = 1;
	}
	*/
	
	switch (currentOrientation) {
	case 1:
	    ctx.scale((xScale)/fps,1);
	    ctx.strokeStyle = "green";
	    ctx.fillStyle = "green";
		break;
	case 2:
	    ctx.scale((1000-xScale)/fps,1);
	    ctx.strokeStyle = "green";
	    ctx.fillStyle = "green";
		break;
	case 3:
	    ctx.scale((-xScale)/fps,1);
	    ctx.strokeStyle = "grey";
	    ctx.fillStyle = "grey";
		break;
	case 4:
	    ctx.scale((xScale-fps)/fps,1);
	    ctx.strokeStyle = "grey";
	    ctx.fillStyle = "grey";
		break;
	}
	
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(5-xOffset,75);
    ctx.quadraticCurveTo(25-xOffset,85,50-xOffset,70);
    ctx.quadraticCurveTo(70-xOffset,60,85-xOffset,63);
    ctx.quadraticCurveTo(80-xOffset,26,42-xOffset,37);
    ctx.moveTo(42-xOffset,37);
    ctx.quadraticCurveTo(56-xOffset,24,45-xOffset,6);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(75-xOffset,53,1,0,Math.PI*2,true);
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.moveTo(60-xOffset,90);
    ctx.quadraticCurveTo(80-xOffset,85,85-xOffset,65);
    ctx.quadraticCurveTo(90-xOffset,55,98-xOffset,52);
    ctx.stroke();
    //Leaf 1
    ctx.beginPath();
    ctx.moveTo(55-xOffset,82);
    ctx.quadraticCurveTo(65-xOffset,86,76-xOffset,78);
    ctx.quadraticCurveTo(64-xOffset,72,55-xOffset,82);
    ctx.fill();
    //Leaf 2
    ctx.beginPath();
    ctx.moveTo(70-xOffset,106);
    ctx.quadraticCurveTo(65-xOffset,93,75-xOffset,86);
    ctx.quadraticCurveTo(80-xOffset,98,70-xOffset,106);
    ctx.fill();
    //Leaf 3
    ctx.beginPath();
    ctx.moveTo(85-xOffset,98);
    ctx.quadraticCurveTo(75-xOffset,89,80-xOffset,80);
    ctx.quadraticCurveTo(90-xOffset,85,85-xOffset,98);
    ctx.fill();
    ctx.restore();
}

function animateDove() {
	currentOrientation  = 1;
	if (rotate) {
		clearInterval(intID);
		rotate = false;
		drawDove();
	} else {
		rotate = true;
		intID = setInterval(drawDove,10);
	}
}

