 
function billingFunction(){
  	var shipname=document.getElementById("shippingName").value;
  	var shipzip=document.getElementById("shippingZip").value;
  
  	if(document.getElementById("same").checked){  
		document.getElementById("billingName").value=shipname;
    		document.getElementById("billingZip").value=shipzip;
  	}
	else{
		document.getElementById("billingName").value="";
    		document.getElementById("billingZip").value="";
	}
}