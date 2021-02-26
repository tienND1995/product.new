//menu-nav
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >50){
    document.getElementById("slide__navbar").style.position = "fixed",
    document.getElementById("slide__navbar").style.background = "black";
    document.getElementById("slide__navbar").style.borderBottom = "none";
    
  } else {
    document.getElementById("slide__navbar").style.background = "rgb(0 0 0 / 0%)",
    document.getElementById("slide__navbar").style.position = "absolute";
    document.getElementById("slide__navbar").style.borderBottom = '0.5px solid silver';
    
  }
}




function openLeftMenu() {
  document.getElementById("leftMenu").style.display = "block";
}

function closeLeftMenu() {
  document.getElementById("leftMenu").style.display = "none";
}

//side bar show
function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
  document.getElementById("rightMenu").style.display = "none";
}
//side bar hide
function openRightMenuhide() {
  document.getElementById("rightMenuhide").style.display = "block";
}

function closeRightMenuhide() {
  document.getElementById("rightMenuhide").style.display = "none";
}

//click search
$(document).ready(function(){
  $("#toggle-button").click(function(){
    $(".slide__form--hide").animate({
      height: 'toggle'
    });
  });
});

// close infomation and close color
function closeInfo() {
  document.getElementById("info").style.display = "none";
}
function closePopularity() {
  document.getElementById("popularity").style.display = "none";
}
function closeGreen() {
  document.getElementById("green").style.display = "none";
}

$(document).ready(function(){

  $(window).scroll(function() {
    $(".product__main__shop--hide").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

/////






