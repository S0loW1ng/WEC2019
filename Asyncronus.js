function loadData(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var animals = JSON.parse(this.responseText);
            console.log(animals)
            //console.log("responce is back");
        }
    }
    xhttp.open("GET","animals.json",true)
    xhttp.send();
    console.log("responce")
}
