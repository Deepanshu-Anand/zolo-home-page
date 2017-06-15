var svg1 = document.getElementById("svg1");
var length1 = svg1.getTotalLength();
svg1.style.strokeDasharray = length1;
svg1.style.strokeDashoffset = length1;

//var svg2 = document.getElementById("svg2");
//var length2 = svg2.getTotalLength();
//svg2.style.strokeDasharray = length2;
//svg2.style.strokeDashoffset = length2;
//
//var svg3 = document.getElementById("svg3");
//var length3 = svg3.getTotalLength();
//svg3.style.strokeDasharray = length3;
//svg3.style.strokeDashoffset = length3;


window.addEventListener("scroll", myFunction);

function myFunction() {
    
var scrollpercent1 = (document.body.scrollTop+100) / (1100);
var draw1 = length1 * scrollpercent1;
svg1.style.strokeDashoffset = length1 - draw1;
    
//var scrollpercent2 = (document.body.scrollTop+400) / (600);
//var draw2 = length2 * scrollpercent2;
//svg2.style.strokeDashoffset = length2 - draw2; 
//    
//var scrollpercent3 = (document.body.scrollTop+700) / (500);
//var draw3 = length3 * scrollpercent3;   
//svg3.style.strokeDashoffset = length3 - draw3;
  
}