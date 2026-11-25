(function(){
var b=document.getElementById("hamburger"),m=document.getElementById("mobmenu");
if(b&&m){b.addEventListener("click",function(){var o=m.classList.toggle("open");b.setAttribute("aria-expanded",o?"true":"false");});
m.addEventListener("click",function(e){if(e.target.tagName==="A"){m.classList.remove("open");b.setAttribute("aria-expanded","false");}});}
})();
