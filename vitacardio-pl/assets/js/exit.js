window.onload = function() {

  (function () {
    /*this.unload = function(evt)
    {
        var message = "";
        if (typeof evt == "undefined") {
            evt = window.event;
        }
        if (evt) {
            evt.returnValue = message;
        }
        return message;
    }*/
       setTimeout(function () {

          window.onbeforeunload = function () {
               setTimeout(function () {
                  window.onbeforeunload = function () {};
                   setTimeout(function () {
                    document.location.href = __redirect_to;
                  }, 500);
              }, 5);
               return " POCZEKAJ! ";
          }
       }, 500);
   })();

 }