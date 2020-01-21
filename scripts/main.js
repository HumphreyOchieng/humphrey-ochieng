let projects = document.getElementsByClassName("project");

for (var i = 0; i < projects.length; ++i) {
	projects[i].addEventListener("click", function (event) {
		window.open(event.currentTarget.dataset.url , "_self");
	});
}