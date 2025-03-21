let canvas;

function setup() {
	canvas=createCanvas(400,400);
	background("yellow");
	canvas.center();
	classifier = ml5.imageClassifier("DoodleNet");
	canvas.mouseReleased(classifyCanvas)
}

function classifyCanvas() {
	classifier.classify(canvas, gotResult);
}

function gotResult(result) {
	console.log(result);
	document.getElementById('name').innerHTML=result[0].label;
	document.getElementById('pro').innerHTML=(result[0].confidence*100).toFixed(2)+"%";

let utterthis = new SpeechSynthesisUtterance(result[0].label);
synth.speak(utterthis);

}

function darw() {
	stroke("blue");
	strokeweight(13);
	if(mouseIsPressed){
		line(pmouseX,pmouseY,mouseX,mouseY,)
	}
	
}

function clearCanvas() {
	background("yellow");
}
