var $ = function(id) {
    return document.getElementById(id);
};

var processEntry = function() {
	var entry = $("cents").value;         // get user entry
    var cents = parseInt(entry);          // parse entry
    if(cents < 0 || cents > 99){
      alert("Amount of change must be greater or equal 0 and less than 100");
    }else{
      makeChange(cents);
    	$("cents").focus();
    }
};

var makeChange = function(cents) {

	var quarters = parseInt(cents / 25);  // get number of quarters
  var change = cents % 25;

	var dimes = parseInt(change / 10);   // get number of dimes
  change = change % 10;

	var nickels = parseInt(change / 5);     // get number of nickels
  change = change % 5;

	var pennies = change;                      // get number of pennies

	// display the results of the calculations
	$("quarters").value = quarters;
	$("dimes").value = dimes;
	$("nickels").value = nickels;
	$("pennies").value = pennies;
};

window.onload = function () {
    $("calculate").onclick = processEntry;
	$("cents").focus();
};
