function flashtext(ele,col) {
    var tmpColCheck = document.getElementById( ele ).style.color;

      if (tmpColCheck === 'white') {
        document.getElementById( ele ).style.color = col;
      } else {
        document.getElementById( ele ).style.color = 'white';
      }
    } 
+
    setInterval(function() {
        flashtext('firstCircle','red');
        flashtext('secondCircle','yellow');
        flashtext('flashingtext3','green');
    }, 700 ); //set an interval timer up to repeat the function