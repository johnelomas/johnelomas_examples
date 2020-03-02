	var isMinor, isAlcoholMinor, age = 17;	


	if ( age < 18 ) {
		isMinor = true;
		isAlcoholMinor = true;
	} else if ( age < 21 ) {
		isMinor = false;
		isAlcoholMinor = true;
	} else {
		isMinor = false;
		isAlcoholMinor = false;
	}