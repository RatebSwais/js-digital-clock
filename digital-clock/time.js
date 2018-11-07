function displayTime(){
	var date = new Date(); 
	var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var session = "AM";

	if(hour == 0){
		hour = 12; 
	}

	if(hour > 12){
		hour = h-12; 
		session = "PM";
	}

	hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

	/*if(hour < 10){
		hour = "0" + hour;
		
	}

	if(minute < 10){
		minute = "0" + minute;
		
	}

	if(second < 10){
		second = "0" + second;
		
	}*/

	var time = hour + ":" + minute + ":" + second + " " + session;
	document.getElementById("myclocktime").innerText = time;
	document.getElementById("myclocktime").textContent = time;
	setTimeout(displayTime, 1000); 

}
displayTime();
