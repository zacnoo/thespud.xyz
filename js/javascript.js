function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

//Called when start button is pressed
function startButtonPressed(){
  console.log("Start button pressed");
  if ($('#startmenu').css('display') == "none") {
    $('#startmenu').css("display", "block");
  } else if ($('#startmenu').css('display') == "block") {
    $('#startmenu').css("display", "none");
  }
};
//jQuery stuff starting here (sorry Harry)
$(document).ready(function(){
  console.log("jQuery Loaded")
});

function showContactInfo(){
    if ($('.contactWindow').css('display') == "none") {
        $('.contactWindow').css("display", "block")
    }
}
function showMinecraft(){
    if ($('.minecraftServerWindow').css('display') == "none") {
        $('.minecraftServerWindow').css("display", "block")
        checkServer();
    }
}

function closeWindow(){
    if ($(event.target).parent().css('display') == "block") {
        $(event.target).parent().css("display", "none");
    }
}
