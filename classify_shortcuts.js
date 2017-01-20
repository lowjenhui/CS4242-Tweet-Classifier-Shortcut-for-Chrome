console.log("Hello! Let's make this classification experience more exciting~");

var buttons = document.getElementsByTagName('input');
function submitForm() {
  for(var i = 0; i < buttons.length; i++) {
    if (buttons[i].value == 'Submit') {
	  console.log("tweet classified~")
	  buttons[i].click();
	  break; 
    }
  }  	
}

$(document).on('keydown', function (e) {
  e.stopPropagation();
  var keyPressed = e.key.toUpperCase();
  
  // Key combination for positive '1' 
  var positive = (keyPressed === '1');
  if (positive) {
	console.log("positive was selected");  
	document.getElementsByName('sent')[0].selectedIndex = 0;
	submitForm();
  }
  
  // Key combination for neutral '2' 
  var neutral = (keyPressed === '2');
  if (neutral) {
	console.log("neutral was selected");  
	document.getElementsByName('sent')[0].selectedIndex = 1;
	submitForm();
  }
  
  // Key combination for negative '3'
  var negative = (keyPressed === '3');
  if (negative) {
	console.log("negative was selected");  
	document.getElementsByName('sent')[0].selectedIndex = 2;
	submitForm();
  }
  
  // Key combination for sensitive '4'
  var sensitive = (keyPressed === '4');
  if (sensitive) {
	console.log("sensitive was selected");  
	document.getElementsByName('sent')[0].selectedIndex = 3;
	submitForm();
  }
  
  // Key combination to copy the tweet url, because most of the time... I need to ask a friend for help 'C'
  var copylink = (keyPressed === 'C');
  if (copylink) {
	console.log("copylink was selected");  
	var link = document.querySelector('a').href;
	window.prompt("Copy to clipboard: Ctrl+C, Enter", link);
	document.execCommand('copy');
  }

});