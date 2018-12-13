

$(window).ready(function(){
    $(".loading").fadeOut(2000,function(){
        $("body").css("overflow","auto");
    })
})





var vh = window.innerHeight ;
var vw =window.innerWidth ;



$(".navbar").css({"width" : "100%"});
$(".carousel").css({"height" : vh});
$(".k1 h1").css({"padding-top" : vh/3});
$(".k2 h1").css({"padding-top" : vh/3})



var w = 1920;
var h = 952;

var p = 24 ; 
var hone = 100 ; 
var htwo = 38 ; 
var hfour = 18 ;


$(".im-d").css("display","none");
$(window).scroll(function(){
    
    
var wScrol = $(window).scrollTop();

    if(wScrol > 100)
        {
    $(".navbar").css({"backgroundColor":"rgba(255,255,255,1)" ,"height":"65px"})  
    $("a,.navbar i").css({"color":"black"});
    $(".im-l").css("display","none");
        $(".im-d").css("display","block");
   // $("#btnUp").fadeIn(500)
        }
    else
        {
    $(".navbar").css({"backgroundColor":"transparent" , "height":"85px"})
    $("a,i").css({"color":"white"});
    $(".im-d").css("display","none");
            $(".im-l").css("display","block");
 //   $("#btnUp").fadeOut(500)
            
        }


})







var typed = new Typed("#ty", {
  // Waits 1000ms after typing "First"
  strings: ["Devil's Hospital ^2000", "Private Hospital ^2000" ,"Have A Tour ^2000"],
    
    loop: true,
  loopCount: Infinity,
    
    typeSpeed: 50
});

var typed = new Typed("#ty1", {
  // Waits 1000ms after typing "First"
  strings: ["Devil's Hospital ^2000", "Private Hospital ^2000" ,"Have A Tour ^2000"],
    
    loop: true,
  loopCount: Infinity,
    
    typeSpeed: 50
});


var typed = new Typed("#ty2", {
  // Waits 1000ms after typing "First"
  strings: [" medicens ^2000", " treatments ^2000" ," medical devices ^2000"],
    
    loop: true,
  loopCount: Infinity,
    
    typeSpeed: 50
});



var typed = new Typed("#ty3" ,{
  // Waits 1000ms after typing "First"
  strings: [" Our Staff ^2000", " Our Members ^2000" ," Our Doctors ^2000"],
    
    loop: true,
  loopCount: Infinity,
    
    typeSpeed: 50
});


var typed = new Typed("#ty4" ,{
  // Waits 1000ms after typing "First"
  strings: [" Our Staff ^2000", " Our Members ^2000" ," Our Doctors ^2000"],
    
    loop: true,
  loopCount: Infinity,
    
    typeSpeed: 50
});


var typed = new Typed("#ty5" ,{
  // Waits 1000ms after typing "First"
  strings: [" Our Staff ^2000", " Our Members ^2000" ," Our Doctors ^2000"],
    
    loop: true,
  loopCount: Infinity,
    
    typeSpeed: 50
});




$("#d2").css({"display" : "none"});
$("#d1").css({"display" : "none"});
$("#b1").click(function(){
    console.log(1);
    $("#d2").css({"display" : "none"});
    $("#d1").css({"display" : "inline-block"});
    
    $("#d3").css({"display" : "none"});
})

$("#b2").click(function(){
    console.log(1);
    $("#d3").css({"display" : "none"});
    $("#d2").css({"display" : "inline-block"});
    
    $("#d1").css({"display" : "none"});
})
$("#b3").click(function(){
    console.log(1);
    $("#d2").css({"display" : "none"});
    $("#d3").css({"display" : "inline-block"});
    
    $("#d1").css({"display" : "none"});
})




var slides = document.getElementsByClassName("slidy");
var slideIndex = 0;

function move(n)
{
    slideIndex += n;
    slider();
}


function slider()
{
    if(slideIndex <0)
        {
            slideIndex = slides.length-1
        }
    if(slideIndex == slides.length)
        {
            slideIndex =0;
        }
    for(var i=0;i<slides.length;i++)
        {
            slides[i].style.display="none"
            
        }
    slides[slideIndex].style.display="block"
}
slider();
