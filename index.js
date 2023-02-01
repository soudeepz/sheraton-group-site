/* Open when someone clicks on the span element */
function toggleNav() {
    
    var navWidth = document.getElementById("myNav").style.width;
    if(navWidth == "100%"){
        document.getElementById("myNav").style.width = "0%";
    }else{
        document.getElementById("myNav").style.width = "100%";
    }
    console.log(navWidth);
  }

