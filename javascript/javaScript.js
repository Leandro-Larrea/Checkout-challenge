const buttons = document.querySelectorAll(".store__datos-cantidad-button")
 
function total(){
let items = document.querySelectorAll(".store__datos")
	let itemPrice = 0;
	for(let i = 0; i <= items.length -1; i++){
	itemPrice += Number(items[i].childNodes[1].childNodes[3].childNodes[1].textContent.replace("$","")) * 
	Number(items[i].childNodes[3].childNodes[3].textContent)
	console.log(itemPrice)
	}
	itemPrice = itemPrice.toString();
	let b = itemPrice.length
	let n = ""
	for(let i = 0; i <= b; i++){
		if(itemPrice[i] === "."){
			b = i + 2;
		}
		if(itemPrice[i] === undefined){
			break
		}

		console.log(itemPrice[i])
		n += itemPrice[i]
	}
	document.querySelector(".final-price").textContent = n;
}

total()
const count = function (x){
	let price = x.target.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[1].textContent
	console.log(Number(price.replace("$","")))
	let number = Number(x.target.parentNode.childNodes[3].textContent)
	let operator = x.target.textContent;
	if(operator === "+") {
		number ++
	}
	else if(number > 1){
		number --;
	}
	x.target.parentNode.childNodes[3].textContent = number.toString();
	total()
}

buttons.forEach((a)=>{
	a.addEventListener("click",count)
	}
)
