/*sid nave*/

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").style.transform = "translate(250px)";
	

}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.transform = "translate(0px)";
	document.body.style.backgroundColor = "white";
}
/*drop down in side nave*/
/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
	dropdown[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var dropdownContent = this.nextElementSibling;
		if (dropdownContent.style.display === "block") {
			dropdownContent.style.display = "none";
		} else {
			dropdownContent.style.display = "block";
		}
	});
}



/***********************side navbar**********************/
$(document).ready(function () {
	/*side navbar*/
	function openNav() {
		document.getElementById("mySidenav").style.width = "250px";
		document.getElementById("main").style.transform = "translate(250px)";
		/*document.body.style.backgroundColor = "rgba(0,0,0,0.4)";*/
	}

	function closeNav() {
		document.getElementById("mySidenav").style.width = "0";
		document.getElementById("main").style.transform = "translate(0px)";
		document.body.style.backgroundColor = "white";
	}

	/*wow*/
	$('#scroll div').click(function () {
		moveTo($(this));
	});
	wow = new WOW({
		animateClass: 'animated',
		offset: 100,
		callback: function (box) {
			console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
		}
	});
	wow.init();

	

	/***************acroding****************/

	$('.one').css('display', 'block');

	$('div.acordion h3').click(function () {

		$(this).next().slideToggle();
		$("div.acordion p").not($(this).next()).slideUp();


	});

});



