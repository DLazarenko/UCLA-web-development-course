"use strict";

var transList = [];

var getTransaction = function(index) {
    if(index === undefined){
      console.log(transList.length);
      return transList.length;
    }else{
      return transList[index];
    }
};

var addTransaction = function (type, amount, date) {
  var array = [];
  array["type"] = type;
  array["amount"] = amount;
  array["date"] = checkDate(date);
  transList.push(array);
};

var calculateBalance = function (type, amount, total) {
  if(type === "deposit"){
    return total + Number(amount);
  }
  if(type === "withdrawal"){
      return total - Number(amount);
  }
};

var checkDate = function(date){
  var result;
  if(date === undefined){
    result = returnTodayDate();
  } else {
    var today = new Date();
    var array = date.split("/");
    var month = Number(array[0]) - 1;
    var day = Number(array[1]);
    var year = Number(array[2]);

    if(array.length !== 3 || year.toString().length !== 4 || month > 11 || day > 31){
      result = returnTodayDate();
    }else{
      var newDate = new Date(year, month, day).toDateString();
      var dateArray = newDate.split(" ");
      result = dateArray[1] + " " + dateArray[2] + " " + dateArray[3];
    }
  }
  return result;
};

var returnTodayDate = function(){
  var date = new Date().toDateString();
  return date.slice(date.indexOf(" "));
};
