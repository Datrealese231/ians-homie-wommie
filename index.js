/* Declare variables below to save the different sections (divs) of your story*/
//reorganized things

let title = document.querySelector(".title"); //TGA
let opening = document.querySelector(".story-opening"); //YCACWWYD
let go = document.querySelector(".option-one"); //RAB
let run = document.querySelector(".option-two"); //EC
let optionOne = document.querySelector(".option-one-screen"); //Chicken
let optionTwo = document.querySelector(".option-two-screen"); //explore
let end = document.querySelector(".option-one-end"); //Chest
let ending = document.querySelector(".option-two-end"); //storyEnd
let retreat = document.querySelector(".option-three"); //return
let running = document.querySelector(".option-four"); // return button two
let advance = document.querySelector(".moving"); //Continue Exploring
let runAway = document.querySelector(".leaving"); //Leaving Cave
let treasure = document.querySelector(".chest");
let sleep = document.querySelector(".dream");
let biggie = document.querySelector(".BIG");
let thumbs = document.querySelector(".down");

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!*/

title.onclick=function(){
  go.style.display="block";
  run.style.display="block";
  title.style.display="none";
  opening.style.display="block";
  back.style.display="none";
};

//edit the buttons to be centered

go.onclick=function(){
  optionOne.style.display="block";
  title.style.display="none";
  opening.style.display="none";
  retreat.style.display="block";
  go.style.display="none";
  run.style.display="none";
  };

retreat.onclick=function(){
 title.style.display="block";
 opening.style.display="none";
 retreat.style.display="none";
 optionOne.style.display="none";
};

run.onclick=function(){
  optionTwo.style.display="block";
  run.style.display="none";
  opening.style.display="none";
  go.style.display="none";
 };

advance.onclick=function(){
  end.style.display="block";
  optionTwo.style.display="none";
};

treasure.onclick=function(){
  end.style.display="none";
  sleep.style.display="block";
  biggie.style.display="block";
};

runAway.onclick=function(){
  ending.style.display="block";
  optionTwo.style.display="none";
  running.style.display="block";
  thumbs.style.display="block"
};

running.onclick=function(){
  ending.style.display="none";
  title.style.display="block";
  running.style.display="none";
};