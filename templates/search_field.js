
$(document).ready(function () {
	$("#search-btn").click(function () {
		$("#search").animate({ top: "90%", width: "90%" });
		const s = document.getElementById("generated-image");
		s.style.visibility = "visible";
	});
});

