document.body.style.backgroundImage = "url('img/fiogrid.jpg')";

const container = document.createElement('div');
container.classList.add("container");
window.document.body.appendChild(container);

const menu = document.createElement('nav');
menu.classList.add("menu");
container.appendChild(menu);

const frame = document.createElement('main');
frame.classList.add("frame");
container.appendChild(frame);

const list = document.createElement('ul');
list.classList.add("menu-list");
menu.appendChild(list);


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

automobile.forEach(function(e){
	const rowList = document.createElement('li');
	rowList.classList.add("menu-row");
	list.appendChild(rowList);
	
	const link = document.createElement('a');
	link.href = '#';
	link.classList.add("menu-link");
	link.insertAdjacentHTML('afterbegin', `${e.concern}`);		

	document.querySelectorAll('.menu-row').forEach(function(e){
			e.appendChild(link);			
	});
});
 

document.querySelectorAll('.menu-link').forEach(function(e){	
	e.addEventListener("click", (event) => {
	let target = event.target;

for (let i=1; i<automobile.length; i++){
	// console.log(automobile[i].concern);
	if (target.innerHTML == automobile[i].concern) {
	// alert ("auto");
		deleteImg();
				automobile[i].brand.forEach(function(b){
				let brand =  document.querySelector('.frame');
				const logo = document.createElement('figure');
				logo.classList.add("brand");
				const img = document.createElement('img');
				img.src = `img/${b}.png`;
				img.alt = `logo ${b}`;
				img.classList.add("brand-link");
				logo.appendChild(img);	
				brand.appendChild(logo);	
			})

	} 
	else if (target.innerHTML == automobile[0].concern) {
			deleteImg();
			let brand =  document.querySelector('.frame');
			brand.insertAdjacentHTML('afterbegin', `<h6 class="info">${automobile[0].brand}</h6>`);
		};
};
});
});

function deleteImg() {
	document.querySelector(".frame").innerHTML="";
}




	// }


	// switch (target.innerHTML) {
	// 	case automobile[0].concern: {
	// 		deleteImg();
	// 		let brand =  document.querySelector('.frame');
	// 		brand.insertAdjacentHTML('afterbegin', `<h6 class="info">${automobile[0].brand}</h6>`);
	// 	} break;
	// 	case automobile[1].concern: {
	// 		deleteImg();
	// 		automobile[1].brand.forEach(function(b){
	// 			let brand =  document.querySelector('.frame');
	// 			const logo = document.createElement('figure');
	// 			logo.classList.add("brand");
	// 			const img = document.createElement('img');
	// 			img.src = `img/${b}.png`;
	// 			img.alt = `logo ${b}`;
	// 			img.classList.add("brand-link");
	// 			logo.appendChild(img);	
	// 			brand.appendChild(logo);	
	// 		})
	// 	} break;
	// }
// });
// });
// });










