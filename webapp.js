(function () {

    // Proximity
	var count=0;
	var c1=document.getElementById("fname");
    
var proximity = document.querySelector("#proximity"),
        proximityDisplay = document.querySelector("#proximity-display");
    if (proximity && proximityDisplay) {
        proximity.onclick = function () {
            proximityDisplay.style.display = "block";
            window.ondeviceproximity = function (event) {
                // Check proximity, in centimeters
				
                var prox;
                
				if(event.value==0){
				prox ="<strong>Count:</strong>" + count++;
				if(count==c1.value)
				{
				navigator.vibrate(2000);
                }
				}
				else{
				prox ="<strong>Count:</strong>" + count;
				}
				proximityDisplay.innerHTML = prox;
            };
        };
    }
})();


	/*var bmibutton=document.querySelector("#bmi");
		var bm=document.querySelector("#bv");
	if(bmibutton && bm)
	{
	bmibutton.onclick=function(){
	bm.innerHTML=b;
	}
	} */
	
	function calculate(){
	var h = document.getElementById("height").value;
var w = document.getElementById("weight").value;
var b=w/((h/100)*(h/100));
document.getElementById("bv").innerHTML=b;
	}
