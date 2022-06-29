let url = "http://data.ny.gov/resource/d6yy-54nr.json";
var xml = new XMLHttpRequest();
xml.onreadystatechange = function() {
  if(this.readyState ==4 && this.status == 200){
	  let obj = JSON.parse(xml.responseText);
    //console.log(xhttp.responseText);
for(var i=0; i<20; i++){
        if(obj[i].winning_numbers == "06 12 20 27 32 04"){
          console.log("winner");
        };
        console.log(obj[i].winning_numbers);
    //console.log(obj);
   } 
  }
};
xml.open('GET', url, true);
xml.send();
