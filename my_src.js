imgElems = document.querySelectorAll('img');

for(let i = 0; i < imgElems.length; i++) {
	imgElems[i].addEventListener('click', click_change_item);
}

//knight bishop rook queen
chances = [35, 35, 20, 10];
pieces = ["knight", "bishop", "rook", "queen"];

function click_change_item(elem) {
	elem.originalTarget.src="pawn.png";
	setTimeout(function() {
		let randNum = Math.trunc(Math.random() * 100 + 1);
		console.log(randNum);
		let sum = 0;
		for(let i = 0; i < chances.length; i++) {
			if(randNum > sum && randNum <= sum + chances[i]) {
				elem.originalTarget.src=pieces[i]+".png";
				break;
			}
			sum = sum+chances[i];
		}
	}, 250);

	console.log("hello");
}
