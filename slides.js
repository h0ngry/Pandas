  var picture = ["slide.jpg","tiger.jpg","orang.jpg","elephant.jpg","leopard.jpg"];
  var caption = ["Panda","Tiger","Orangutan","Asian Elephant","Snow Leopard"];
  var i = 0;
  window.setInterval(function(){
     
     if(i>=4){
     	i = 0;
     }


     else{
 
     	i++;

     }
     document.getElementById("slide").src= picture[i];
     document.getElementById("cap").textContent = caption[i];

    
  /// call your function here
   }, 5000);
