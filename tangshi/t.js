var divP = bl$("id1234");
var v = document.getElementsByTagName("video");var p = v[0]; 
p.controls = false; 
var b0		=  blo0.blBtn( divP ,"idBtn_controls", "controls","brown");
b0.onclick = function(){ p.controls = !p.controls; }
var b1		=  blo0.blBtn( divP ,"idBtn_play","play","blue");
b1.onclick = function(){  p.play(); }
var b2		=  blo0.blBtn( divP ,"idBtn_pause","pause","gray");
b2.onclick = function(){  p.pause(); }
