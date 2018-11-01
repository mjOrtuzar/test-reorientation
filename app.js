$(document).ready(function () {
    function reorient(e) {
      var portrait = (window.orientation % 180 == 0);
      $("body > div").css("-webkit-transform", !portrait ? "rotate(-90deg)" : "");
    }
    /*window.onorientationchange = reorient;
    window.setTimeout(reorient, 0);*/
});


/*var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

window.addEventListener(orientationEvent, function() {
    if(window.orientation==90)
    {
      document.getElementById('portrait').style.display = 'none';
      document.getElementById('landscape').style.display = '';
    }
}, false);*/



/*var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

window.addEventListener(orientationEvent, function() {
    if(window.orientation==0)
    {
      document.getElementById('portrait').style.display = '';
      document.getElementById('landscape').style.display = 'none';
    }
    else if(window.orientation==90)
    {
      document.getElementById('portrait').style.display = 'none';
      document.getElementById('landscape').style.display = '';
    }
}, false);*/