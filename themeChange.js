function lightTheme () {
    $("body").css("background-image", "url('lightBackground.jpg')"); 

}


function darkTheme() {
    $("body").css("background-image", "url('darkBackground.jpg')");
    
}



$(document).ready(function(){
    $("#light").click(lightTheme); 
    $("#dark").click(darkTheme);
    
    
})