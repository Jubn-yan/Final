
  var contain = document.getElementById("container");
  var playBox = document.getElementById("playBox");
  var board = document.getElementsByClassName("playBoard")[0];
  var ball = document.getElementsByClassName("ball")[0];
  var btn = document.getElementsByTagName("button")[0];
  var score = document.getElementsByClassName("score")[0];
  var boardLeft,boardTop,ballLeft,ballTop ;
  var interval,flag=1,sum=0; 
  
  var speedX = -1,speedY = -1;