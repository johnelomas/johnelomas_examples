	var passengerCount = 0;
	
	function addPassenger() {
		var name = '';
		var listNode = document.createElement("li");
		name = prompt("What is the next passenger's name?", "");
		
		if(validateName(name) === false) {
			return false;
		} else {
			var none = document.getElementById("NoPassengers");
			if (none !== null) {document.getElementById("passengerList").removeChild(none);}
			listNode.innerHTML = name;
			passengerCount++;
			document.getElementById("passengerList").appendChild(listNode);
			document.getElementById("addDone").style = "visibility:visible";
			document.getElementById("makePayment").setAttribute("disabled", "true");	
		}
	}
	
	function validateName(name) {
		if (name === null) {return false;} else if (name.length < 3) {
			alert("Passenger name must be at least 3 characters long.");
			return  false;
		} else {return true;}
	}
	
	function addingDone() {
		document.getElementById("addPass").disabled = true;
		document.getElementById("addDone").disabled = true;	
		showPayment();	
	}
	
	function showPayment() {
		let totalDue = passengerCount * 10000;
		let total = " is $" + totalDue + " Due Now.";
		document.getElementById("payment").style = "display: block";
		document.getElementById("passengerCount").innerHTML = passengerCount + " Passengers";
		document.getElementById("total").innerHTML = total;
	}
	
	function termsChecked() {
		if (document.getElementById("yesToTerms").checked === true) {
			document.getElementById("makePayment").removeAttribute("disabled");
		} else {document.getElementById("makePayment") .setAttribute("disabled", "true");} 
	}
	
	function submitPayment() {
		if (isValidPayment() === true) {
			document.getElementById("ccNumber").style = "background:white";
			document.getElementById("ccNumber").setAttribute("disabled", "true");
			document.getElementById("yesToTerms").setAttribute("disabled", "true");
			document.getElementById("makePayment").setAttribute("disabled", "true");
			document.getElementById("invalidCC").style = "visibility:hidden;color:red;";
			document.getElementById("thankYou").style = "visibility:visible";
		} else {
			document.getElementById("ccNumber").style = "background:yellow";
			document.getElementById("invalidCC").style = "visibility: visible;color:red;";
		}
	}
	
	function isValidPayment() {if (document.getElementById("ccNumber").value === "1234") {return true;} else {return false;}}	