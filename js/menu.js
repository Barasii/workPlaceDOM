document.body.style.backgroundImage = "url('img/fiogrid.jpg')";

const container = document.createElement('div');
container.classList.add("container");
window.document.body.appendChild(container);

const menu = document.createElement('nav');
menu.classList.add("menu");

let nav =  document.querySelector('.container');
if (nav.classList.contains("container")) {
	nav.appendChild(menu);
}

const frame = document.createElement('main');
frame.classList.add("frame");

let main =  document.querySelector('.container');
if (main.classList.contains("container")) {
	main.appendChild(frame);
}

const list = document.createElement('ul');
list.classList.add("menu-list");

let ul =  document.querySelector('.menu');
if (ul.classList.contains("menu")) {
	ul.appendChild(list);
}

const automobile = [ 
	{
		concern: "INFORMER",
		brand: "Do you know?"
	},
	{
		concern: "VOLKSWAGEN AUTO GROUP (VAG)",
		brand: ["volkswagen", "audi", "seat", "skoda", "bentley", "lamborghini", "porshe", "bugatti", "scania", "man"]
	},
	{
		concern: "TOYOTA MOTOR CORP.",
		brand: ["toyota", "daihatsu", "scion", "hino", "lexus", "subaru"]
	},
	{
		concern: "GENERAL MOTORS",
		brand: ["gm", "buick", "cadillac", "daewoo", "gmc", "chevrolet", "holden"]
	},
	{
		concern: "FIAT",
		brand: ["fiat", "alfa romeo", "ferrari", "chrysler", "dodge", "ram", "jeep", "lancia", "masserati"]
	},
];
console.log(automobile[1].brand[1]);
for (let i=0; i<automobile.length; i++) {
	const rowList = document.createElement('li');
	rowList.classList.add("menu-row");

	let menuRow =  document.querySelector('.menu-list');
	if (menuRow.classList.contains("menu-list")) {
		menuRow.appendChild(rowList);
	}	
	
	const link = document.createElement('a');
	link.href = '#';
	link.classList.add("menu-link");
	link.insertAdjacentHTML('afterbegin', `${automobile[i].concern}`);		

	let menuLink =  document.querySelectorAll('.menu-row');
	menuLink.forEach(function(e){
			e.appendChild(link);
			e.addEventListener("click", () => {
				switch (automobile[i].concern) {
					case automobile[1].concern: {
						// for (let j=0; j<automobile[1].brand.length; j++){
						automobile[1].brand.forEach(function(b){
			console.log(b);

							const logo = document.createElement('figure');
							logo.classList.add("brand");

							let brand =  document.querySelector('.frame');
							// brand.insertAdjacentHTML("afterbegin", logo);
							if (brand.classList.contains('frame')) {
								brand.appendChild(logo.cloneNode(true));
							}

							const img = document.createElement('img');
							img.src = `img/vag/${b}.png`;
							img.alt = `logo ${b}`;
							img.classList.add("brand-link");

							let png =  document.querySelector('.brand');
							if (png.classList.contains('brand')) {
								png.appendChild(img);
							}


						})
					} break;
				}
			});

	});

}
 
// function createImg() {
// 	const logo = document.createElement('figure');
// 	logo.classList.add("brand");

// 	let brand =  document.querySelector('.frame');
// 	if (brand.classList.contains('frame')) {
// 		brand.appendChild(logo);
// 	}

// 	const img = document.createElement('img');
// 	// img.src = `img/${automobile[i]}`;
// 	img.src = `#`;
// 	img.alt = `logo`;
// 	img.classList.add("brand-link");

// 	let png =  document.querySelector('.brand');
// 	if (png.classList.contains('brand')) {
// 		png.appendChild(img);
// 	}
// } 

// e.addEventListener("click", () => {
// 	let menuLink =  document.querySelectorAll('.menu-row');
// 		console.log(menuLink);
// 	for (let [k, v] of menuLink){
// 		console.log(v);
// 	}
// 	menuLink.forEach(function(e){
// 		for (let i=0; i<automobile[i].brand.length; i++){
// // console.log(automobile[i].brand.length);
// 			const logo = document.createElement('figure');
// 			logo.classList.add("brand");

// 			let brand =  document.querySelector('.frame');
// 			if (brand.classList.contains('frame')) {
// 			brand.appendChild(logo);
// 			}

// 			const img = document.createElement('img');
// 			img.src = `img/${automobile[i]}`;
// 			img.alt = `logo`;
// 			img.classList.add("brand-link");

// 			let png =  document.querySelector('.brand');
// 			if (png.classList.contains('brand')) {
// 			png.appendChild(img);
// 			}
// 		}
// 	});
// });



















