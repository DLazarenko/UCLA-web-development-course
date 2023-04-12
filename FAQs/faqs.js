"use strict";
var $ = function(id) {
  return document.getElementById(id);
};

// the event handler for the click event of each h2 element
var toggle = function() {
  var h2 = this; // clicked h2 tag
  var div = h2.nextElementSibling; // h2 tag's sibling div tag

  var h2Array = $("faqs").getElementsByTagName("h2");

  // toggle plus and minus image in h2 elements by adding or removing a class
  if (h2.hasAttribute("class")) {
    h2.removeAttribute("class");
  } else {
    h2.setAttribute("class", "minus");
  }

  // toggle div visibility by adding or removing a class
  if (div.hasAttribute("class")) {
    div.removeAttribute("class");
  } else {
    div.setAttribute("class", "open");
  }

  for (var k = 0; k < h2Array.length; k++) {

    var h2Element = h2Array[k];
    var divElement = h2Element.nextElementSibling;

    // remove the class attribute for all h2 elements that aren’t the one that has been clicked
    if (h2Element !== h2 && h2Element.hasAttribute("class")) {
      h2Element.className = "";
    }
    //remove the class attribute for all of the div siblings of the h2 elements that weren’t clicked
    if (divElement !== div && divElement.hasAttribute("class")) {
      divElement.className = "";
    }
  }
};

window.onload = function() {
  // get the h2 tags
  var faqs = $("faqs");
  var h2Elements = faqs.getElementsByTagName("h2");

  // attach event handler for each h2 tag
  for (var i = 0; i < h2Elements.length; i++) {
    h2Elements[i].onclick = toggle;
  }
  // set focus on first h2 tag's <a> tag
  h2Elements[0].firstChild.focus();
};
