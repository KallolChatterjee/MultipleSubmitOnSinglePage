console.log("Inside js");
function nextClicked(){
console.log("next function clicked");  
}
$('next').click(function(){
console.log("next clicked");
$.post('/next1');
});
$('previous').click(function(){
console.log("Previous clicked");
$.post('/previous1');
});
