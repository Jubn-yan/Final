
  var contain = document.getElementById("container");
  var playBox = document.getElementById("playBox");
  var board = document.getElementsByClassName("playBoard")[0];
  var ball = document.getElementsByClassName("ball")[0];
  var btn = document.getElementsByTagName("button")[0];
  var score = document.getElementsByClassName("score")[0];
  var boardLeft,boardTop,ballLeft,ballTop ;
  var interval,flag=1,sum=0; 
  
  var speedX = -1,speedY = -1;

  btn.onclick = function() {
    clearInterval(interval);
    flag=0;
    interval =  setInterval(function(){   
      ballLeft += speedX;
      ballTop += speedY;

      if(ballLeft>=0 && ballLeft<=485){
        ball.style.left = ballLeft + "px";
      }
      if(ballTop>=0 && ballTop<=385){
        ball.style.top = ballTop + "px";
      }

      if(ballLeft<0|| ballLeft>485 ){
        speedX = -speedX;  
      }else if(ballTop<0){
        speedY = -speedY; 
      }  
     
      if((ballTop+15) >= boardTop && ballLeft>=boardLeft && ballLeft <= (boardLeft+50)){
        speedX = -speedX; 
        speedY = -speedY;
        sum+=5;
        score.innerHTML = sum;

      }
      if(ballTop>385 ){
        alert("Game over please refresh to restart!");
        clearInterval(interval);
      }
    },5) }
   
    playBox.onmousemove = function() {
        var e = event || window.event; 
        boardLeft = event.pageX - playBox.offsetLeft -50;
        boardTop = event.pageY - playBox.offsetTop;  
        
        if(boardLeft>=0 && boardLeft<=400) {
          board.style.left = boardLeft + "px";
          if(flag) {
            ballLeft = boardLeft + 45;
            ball.style.left = ballLeft + "px";
          }  
        }  
        if(boardTop>=0 && boardTop<=390){
          board.style.top =  boardTop + "px";
          if(flag) {
            ballTop = boardTop - 15;
            ball.style.top = ballTop +"px";
          }
       } 
       
      }
         
 