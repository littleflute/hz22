var tt = [30,60,90,120,150,180,210,240,270,300,330,360,390,420,450,480,510,540,570,600,630,660,690,720,750,780,810,840,870,900,930,960,990,1020,1050];

var divP = bl$("id1234");
var v = document.getElementsByTagName("video");var p = v[0]; 
p.controls = false; 
var b0		=  blo0.blBtn( divP ,"idBtn_controls", "controls","brown");
b0.onclick = function(){ p.controls = !p.controls; }
var b1		=  blo0.blBtn( divP ,"idBtn_play","play","blue");
b1.onclick = function(){  p.play(); }
var b2		=  blo0.blBtn( divP ,"idBtn_pause","pause","gray");
b2.onclick = function(){  p.pause(); }

var sTitle = "<a target= '_blank' href = 'https://github.com/littleflute/hz22/edit/master/tangshi/t.js'>t.js_v0.0. 42 *</a> : ";
sTitle += "<a target='_blank' href = 'https://littleflute.github.io/hz22/tangshi/'> online </a> : ";
sTitle += "<a target='_blank' href = 'https://littleflute.github.io/hz22/tangshi/t.js'> t.js </a>";

var div4V = blo0.blDiv(divP,"div4V", sTitle  ,"gray");

div4V. v4tt = blo0.blDiv( div4V , div4V .id + "  v4tt ", " v4tt  ", " lightgreen");

div4V.v = blo0.blDiv( div4V , div4V .id + "_v", "v", "gray");
div4V.v1 = blo0.blDiv( div4V , div4V .id + "_v1", "v1", "gray");
div4V.b1 = blo0.blBtn( div4V , div4V.id + "_b1", "startTimer" , "gray");
div4V.b1.onclick = function(){
	if( div4V.timer == null){
		div4V.timer = setInterval(_ftn4Timer,100);
		this.innerHTML = "stopTimer";
	}
	else{
		clearInterval(div4V.timer); div4V.timer = null;
		this.innerHTML = "startTimer" ;
	}
}
function _ftn4Timer(){
    var d = new Date();
    var t = d.toLocaleTimeString();
    div4V.v.innerHTML = t + " currentTime:" + p.currentTime;	
    div4V.v1.innerHTML = p.src;
}

for(i in tt){
	var btn = blo0.blBtn( div4V.v4tt , " btnT" + i, tt[i], blColor[i]);
    	btn.onclick = function(_i, _this){
		return function(){
			p.currentTime =  tt[_i] ;
		}
	}(i,btn);
}
