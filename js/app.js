//Secret Menu Challenge
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/


// var hElement = document.getElementsByClassName("store")

// for (var i=0; i<hElement.length; i++){
//   hElement[i].addEventListener("click", makePretty);
// }

// function makePretty(){
//   var flavorElem = this.querySelectorAll(".flavor")[0];
//   if(flavorElem.style.color === "black"){
//     flavorElem.style.color = "green";
//   }else{
//     flavorElem.style.color = "black"
//   }
// }
var restoName = document.getElementsByClassName("name");
for (var i=0; i<restoName.length; i++){
	restoName[i].addEventListener("click", unHide);
}

function unHide (){
	var showMenu = this.querySelectorAll(".menu")[0];
	if(showMenu.style.display === "none"){
		showMenu.style.display = "block";
	}else{
		showMenu.style.display = "none";
	}
}