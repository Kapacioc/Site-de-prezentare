function draw() {
    var canvas = document.getElementById('display');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'rgba(255, 165, 0, 1)';
      ctx.fillRect(1, 1, 850, 400);
      
      var fol = ctx.clearRect(10,10,100,100);
      fol.onmouseup = ctx.fillRect(20,20,20,20);
      
      ctx.save();

      
    }
    myMove();
    
    
  
  }

  var id = null;
function myMove() {
  var but = document.getElementById("start");
  butPos= but.getBoundingClientRect();
  var elem = document.getElementById("display");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 110) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top =  pos + 'px'; 
      /* elem.style.right = pos + 'px'; */ 
    }
  }
}


