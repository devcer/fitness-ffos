(function () {

    // Proximity
	var count=0;
	var c1=document.getElementById("fname");
    
var proximity = document.querySelector("#proximity");
var calculate=document.querySelector("#calculate"),
        proximityDisplay = document.querySelector("#proximity-display");
    if (proximity && proximityDisplay)
     {
        proximity.onclick = function () 
        {
            proximityDisplay.style.display = "block";
            window.ondeviceproximity = function (event) 
            {
                // Check proximity, in centimeters
				
                var prox;
                
				if(event.value==0)
				{
				prox ="<strong>Count:</strong>" + count++;
				if(count==c1.value)
				{
				navigator.vibrate(2000);
                }
				}
				else
				{
				prox ="<strong>Count:</strong>" + count;
				}
				proximityDisplay.innerHTML = prox;
            };
        };
    }

})();

function calculate(){
	var h = document.getElementById("height").value;
var w = document.getElementById("weight").value;
var b=w/((h/100)*(h/100));
document.getElementById("bv").innerHTML=b;
if(b<18.5){
document.getElementById("status").innerHTML="<strong>Status:</strong> Underweight";
}
else if (b>=18.5 && b<25) {
document.getElementById("status").innerHTML="<strong>Status:</strong> Normal weight";
	}
	else if(b>=25 && b<30) {
document.getElementById("status").innerHTML="<strong>Status:</strong> Overweight";
	}
	else
		document.getElementById("status").innerHTML="<strong>Status:</strong> Obesity";
	}
