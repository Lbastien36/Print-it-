const slides = [
	{
		"image": "slide1.jpg",

		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"

	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"

	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"

	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"

	}
]

let i = 0;




slides[0] = ("src", "./assets/images/slideshow/slide1.jpg");
slides[1] = ("src", "./assets/images/slideshow/slide2.jpg");
slides[2] = ("src", "./assets/images/slideshow/slide3.jpg");
slides[3] = ("src", "./assets/images/slideshow/slide4.png");




if (i === 0) {
	document.getElementById("point1").classList.add("dot_selected");
}



console.log(slides);





let flechedegauche = document.getElementById("flechedegauche")
flechedegauche.addEventListener("click", () => {
	i--

	document.getElementById("images").src = slides[i];



	if (i === 0) {
		document.getElementById("tagline").innerHTML = "Impressions tous formats <span>en boutique et en ligne</span>";
		document.getElementById("point1").classList.add("dot_selected");

		document.getElementById("point2").classList.remove("dot_selected");
		document.getElementById("point3").classList.remove("dot_selected");
		document.getElementById("point4").classList.remove("dot_selected");
	}
	if (i === 1) {
		document.getElementById("tagline").innerHTML = "Tirages haute définition grand format <span>pour vos bureaux et events</span>";
		document.getElementById("point2").classList.add("dot_selected");

		document.getElementById("point1").classList.remove("dot_selected");
		document.getElementById("point3").classList.remove("dot_selected");
		document.getElementById("point4").classList.remove("dot_selected");

	} if (i === 2) {
		document.getElementById("tagline").innerHTML = "Grand choix de couleurs <span>de CMJN aux pantones</span>";
		document.getElementById("point3").classList.add("dot_selected");

		document.getElementById("point1").classList.remove("dot_selected");
		document.getElementById("point2").classList.remove("dot_selected");
		document.getElementById("point4").classList.remove("dot_selected");


	} if (i === 3) {
		document.getElementById("tagline").innerHTML = "Autocollants <span>avec découpe laser sur mesure</span>";
		document.getElementById("point4").classList.add("dot_selected");

		document.getElementById("point1").classList.remove("dot_selected");
		document.getElementById("point2").classList.remove("dot_selected");
		document.getElementById("point3").classList.remove("dot_selected");
	}

	if (i < 0) {
		i = 3;
		document.getElementById("tagline").innerHTML = "Autocollants <span>avec découpe laser sur mesure</span>";
		document.getElementById("point4").classList.add("dot_selected");

		document.getElementById("point1").classList.remove("dot_selected");
		document.getElementById("point2").classList.remove("dot_selected");
		document.getElementById("point3").classList.remove("dot_selected");

		document.getElementById("images").src = slides[i];
	}

	console.log("Vous avez cliqué");



});

let flechededroite = document.getElementById("flechededroite")
flechededroite.addEventListener("click", () => {

	i++


	document.getElementById("images").src = slides[i];



	if (i === 0) {
		document.getElementById("tagline").innerHTML = "Impressions tous formats <span>en boutique et en ligne</span>";
		document.getElementById("point1").classList.add("dot_selected");

		document.getElementById("point2").classList.remove("dot_selected");
		document.getElementById("point3").classList.remove("dot_selected");
		document.getElementById("point4").classList.remove("dot_selected");

	}
	if (i === 1) {
		document.getElementById("tagline").innerHTML = "Tirages haute définition grand format <span>pour vos bureaux et events</span>";
		document.getElementById("point2").classList.add("dot_selected");

		document.getElementById("point1").classList.remove("dot_selected");
		document.getElementById("point3").classList.remove("dot_selected");
		document.getElementById("point4").classList.remove("dot_selected");


	} if (i === 2) {
		document.getElementById("tagline").innerHTML = "Grand choix de couleurs <span>de CMJN aux pantones</span>";
		document.getElementById("point3").classList.add("dot_selected");

		document.getElementById("point1").classList.remove("dot_selected");
		document.getElementById("point2").classList.remove("dot_selected");
		document.getElementById("point4").classList.remove("dot_selected");

	} if (i === 3) {
		document.getElementById("tagline").innerHTML = "Autocollants <span>avec découpe laser sur mesure</span>";
		document.getElementById("point4").classList.add("dot_selected");

		document.getElementById("point1").classList.remove("dot_selected");
		document.getElementById("point2").classList.remove("dot_selected");
		document.getElementById("point3").classList.remove("dot_selected");

	} if (i === 4) {
		i = 0;
		document.getElementById("tagline").innerHTML = "Impressions tous formats <span>en boutique et en ligne</span>";
		document.getElementById("point1").classList.add("dot_selected");

		document.getElementById("point2").classList.remove("dot_selected");
		document.getElementById("point3").classList.remove("dot_selected");
		document.getElementById("point4").classList.remove("dot_selected");

		document.getElementById("images").src = slides[i];

	}


	console.log("Vous avez cliqué");

});




