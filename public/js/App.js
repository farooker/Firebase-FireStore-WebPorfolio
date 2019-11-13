window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 100) {
      
     document.getElementById("navbar").style.background='greenyellow';
    // document.getElementById("navbar").style.background='#FFFFFF';
     document.getElementById("p1").style.color = "#FFFFFF";
     document.getElementById("p2").style.color = "#FFFFFF";
     document.getElementById("p3").style.color = "#FFFFFF";
     document.getElementById("p4").style.color = "#FFFFFF";
     document.getElementById("p5").style.color = "#FFFFFF";
   //  document.getElementById("navbar").style.boxShadow='0px 0px 10px grey';
  } else {
   document.getElementById("p1").style.color = "#FFFFFF";
   document.getElementById("p2").style.color = "#FFFFFF";
   document.getElementById("p3").style.color = "#FFFFFF";
   document.getElementById("p4").style.color = "#FFFFFF";
   document.getElementById("p5").style.color = "#FFFFFF";
   document.getElementById("navbar").style.background='transparent';

  }
  
}
function openNav() 
 {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("navbar").style.marginLeft = "250px";     
 }
 function closeNav() 
 {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("navbar").style.marginLeft = "0";
 }