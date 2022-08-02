window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("menu").style.backgroundColor= "#191919";
  } else {
    document.getElementById("menu").style.backgroundColor = null;
  }
}