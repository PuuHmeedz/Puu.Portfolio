
let menuToggle = document.querySelectorAll("ul li .toggle-Menu");
let ShowLis = document.querySelectorAll(".header .mainLinks ul li");
let ShowUL = document.querySelectorAll(".header .mainLinks ul");

window.onload = function () {
	alert ("This Page Under Created")
}
menuToggle.forEach(function (toggle) {
	toggle.onclick = function () {
		ShowLis.forEach(function (show) {
			if (show.style.display === "flex") {
				show.style.display = "none";
			} else {
				show.style.display = "flex";
			}
		});
		ShowUL.forEach(function (show) {
			if (show.style.display === "flex") {
				show.style.display = "none";
			} else {
				show.style.display = "flex";
			}
		});
	};
});
