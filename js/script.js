function clicked() {
	document.getElementById("vid").play();
	document.getElementById("text_img").src = "./misc/never_gonna_give_you_up_2.png";

	document.getElementById("ask_button").remove();
	document.getElementById("present_button").remove();


	
	var never_gonna = document.createElement("img");
	never_gonna.src = "./misc/never_gonna_give_you_up.png";
	document.getElementById("buttons").appendChild(never_gonna);
}
