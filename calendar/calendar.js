var $ = function (id) { return document.getElementById(id); };

var currentMonth = new Date().getMonth();

var getMonthText = function(currentMonth) {
    if (currentMonth === 0) { return "January"; }
    else if (currentMonth === 1) { return "February"; }
    else if (currentMonth === 2) { return "March"; }
    else if (currentMonth === 3) { return "April"; }
    else if (currentMonth === 4) { return "May"; }
    else if (currentMonth === 5) { return "June"; }
    else if (currentMonth === 6) { return "July"; }
    else if (currentMonth === 7) { return "August"; }
    else if (currentMonth === 8) { return "September"; }
    else if (currentMonth === 9) { return "October"; }
    else if (currentMonth === 10) { return "November"; }
    else if (currentMonth === 11) { return "December"; }
};

var getLastDayOfMonth = function(currentMonth) {
  var endOfMonth = new Date();
  endOfMonth.setMonth(currentMonth + 1);
  endOfMonth.setDate(0);

  return endOfMonth.getDate();
};

window.onload = function () {
$("month_year").firstChild.nodeValue = getMonthText(currentMonth) + " " + new Date().getFullYear();

var htmlCalendar = $("calendar");
var addToHTMLCalendar = "";
  //what day of the week is the first day of the month
  var firstDayOfMonth = new Date();
  firstDayOfMonth.setDate(0);
  firstDayOfMonth = firstDayOfMonth.getDay() + 1;

  //how many days in the month
  var lastDay = getLastDayOfMonth(currentMonth);

  var currentDay = 1;
  for(var row = 0; row < 6; row++){
    var newRow = "<tr>";
    // regulates 5 or 6 rows do we have
    if(currentDay <= lastDay){
    for(var colomn = 0; colomn < 7; colomn++){
      if(currentDay == 1){
        if(firstDayOfMonth == colomn){
          newRow += "<td>" + currentDay + "</td>";
          currentDay++;
        }else{
          newRow += "<td> </td>";
        }
      }else if(currentDay > 31){
        newRow += "<td> </td>";
      }else{
        newRow += "<td>" + currentDay + "</td>";
        currentDay++;
      }
    }
    newRow +="</tr>";
    addToHTMLCalendar += newRow;
    }
  }
  htmlCalendar.innerHTML += addToHTMLCalendar;
};
