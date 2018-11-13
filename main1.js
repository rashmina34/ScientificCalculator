// adding character for operation
function addchar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
	}

// mathemtics operations

function cos(form) {
	form.display.value = Math.cos(form.display.value);
}

function sin(form) {
	form.display.value = Math.sin(form.display.value);
}

function tan(form) {
	form.display.value = Math.tan(form.display.value);
}

function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}

function ln(form) {
	form.display.value = Math.log(form.display.value);
}

function exp(form) {
	form.display.value = Math.exp(form.display.value);
}

function deletechar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changesign(input) {
	if(input.value.substring(0, 1) == "-") // removing the -ve sign if already present
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value //adding -ve sign to input if not present
}

function compute(form) {
    form.display.value = eval(form.display.value);
  }


function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
}

function checksum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}

//window.addEventListener("keypress" , myfunction , false);
//document.body.addEventListener("keypress" , myfunction , false);
document.addEventListener("keypress", function(event) {

	//alert('key pressed');
	console.log(event.key);
	let form = document.getElementById("form");
	let charCode = event.charCode;
	let charValue = event.key;
	
	console.log(charCode);
	switch(charCode){
		case 48:
			addchar(form.display, charValue);
			break;
		case 49:
			addchar(form.display, charValue);
			break;
		case 50:
			addchar(form.display, charValue);
			break;
		case 51:
			addchar(form.display, charValue);
			break;
		case 52:
			addchar(form.display, charValue);
			break;
		case 53:
			addchar(form.display, charValue);
			break;
		case 54:
			addchar(form.display, charValue);
			break;
		case 55:
			addchar(form.display, charValue);
			 break;
		case 56:
			addchar(form.display, charValue);
			break;
		case 57:
			addchar(form.display, charValue);
			break;
		case 43:
			addchar(form.display, charValue);
			break;
		case 42:
			addchar(form.display, charValue);
			break;
		case 45:
			addchar(form.display, charValue);
			break;
		case 46:
			addchar(form.display, charValue);
			break;
		case 47:
			addchar(form.display, charValue);
			break;
		case 37:
			addchar(form.display, charValue);
			break;
		//case 0:
			//deletechar(form.display);
			//break;
		case 0:
			compute(form);
			break;
		default: alert("invalid input");
		break;
	}
});


