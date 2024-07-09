"use strict";
var $ = function(id) {
  return document.getElementById(id);
};

var displayCurrentTime = function() {
  var ampm;
  var today = new Date();
  var hours = today.getHours();
  hours >= 12 ? ampm = "PM" : ampm = "AM";
  if (hours === 24) {
    hours = 0;
  } else if (hours > 12) {
    hours = hours - 12;
  }
  $("hours").firstChild.nodeValue = padSingleDigit(hours);
  $("minutes").firstChild.nodeValue = padSingleDigit(today.getMinutes());
  $("seconds").firstChild.nodeValue = padSingleDigit(today.getSeconds());
  $("ampm").firstChild.nodeValue = ampm;
};

var padSingleDigit = function(num) {
  return (num < 10) ? "0" + num : num;
};

var addToTaskList = function() {
    var taskTextbox = $("task");
    var dateTextbox = $("date");
    var newTask = new Task(taskTextbox.value, dateTextbox.value);
    if (newTask.isValid()) {
        tasklist.add(newTask).save().load().display();
        taskTextbox.value = "";
        dateTextbox.value = "";
    } else {
        alert("Please enter a task.");
    }
    taskTextbox.focus();
};

var clearTaskList = function() {
    tasklist.clear();
    $("task").focus();
};

var deleteFromTaskList = function() {
    tasklist.delete(this.title).save().display(); // 'this' = clicked link
    $("task").focus();
};

var calculate = function() {
  var c = $("toCelsius").checked;
  var f = $("toFahringeit").checked;
  var cf = $("cf").value;
  var result;
  if(c){
    result = Math.round((cf - 32) * 5/9);
  }else if(f){
    result = Math.round((cf * 9/5) + 32);
  }else{
    result = "Choose to Celsius or to Fahrenheit"
  }
  console.log(result);
};

window.onload = function() {
  // set initial clock display and then set interval timer to display
  // new time every second. Don't store timer object because it
  // won't be needed - clock will just run.
  displayCurrentTime();
  setInterval(displayCurrentTime, 1000);
  $("add_task").onclick = addToTaskList;
  $("clear_tasks").onclick = clearTaskList;
  $("calculate").onclick = calculate;

  tasklist.displayDiv = $("tasks");
  tasklist.deleteClickHandler = deleteFromTaskList;

  tasklist.load().display();
  $("task").focus();


  var slides = [
      {href:"bridge.jpg", title:"Once upon a time.."},
      {href:"water.jpg", title:"We came to New York.."},
      {href:"statue.jpg", title:"To see the Statue of Liberty.."},
      {href:"brooklyn.jpg", title:"And Brooklyn of course))"},
      {href:"view.jpg", title:"And this unforgettable view!"}
  ];
  myapp.slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));

  $("play_pause").onclick = myapp.slideshow.createToggleHandler();
  $("change_speed").onclick = function() {
      var msg = "Current speed is ".concat(myapp.slideshow.getSpeed,
          " milliseconds.\n",
          "Please enter a new speed in milliseconds (200 min).");
      var ms = prompt(msg, 2000);
      myapp.slideshow.changeSpeed(ms).startSlideShow();
  };
  $("change_caption").onclick = function() {
      var index = parseInt($("caption").title);
      var caption = prompt("Please enter a new caption.");
      myapp.slideshow.changeCaption(index, caption).startSlideShow();
      $("caption").firstChild.nodeValue = caption;
  };
};
