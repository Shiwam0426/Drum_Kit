var drumButton=document.querySelectorAll('button');
for(i=0;i<drumButton.length;i++){
    drumButton[i].addEventListener('click',function(){
      var drumButton=this.innerHTML;
      makeSound(drumButton);
      ButtonAnimation(drumButton);
    })
}
document.addEventListener('keydown',function(event){
  makeSound(event.key);
  ButtonAnimation(event.key);
})


function makeSound(key){
  switch(key){
    case "w":
      var crash=new Audio("crash.mp3");
      crash.play();
      break;
    case "a":
      var kick_bass=new Audio("kick-bass.mp3");
      kick_bass.play();
      break;
    case "s":
      var snare=new Audio("snare.mp3");
      snare.play();
      break;
    case "d":
      var tom_1=new Audio("tom-1.mp3");
      tom_1.play();
      break;
    case "j":
      var tom_2=new Audio("tom-2.mp3");
      tom_2.play();
      break;
    case "k":
    var tom_3=new Audio("tom-3.mp3");
    tom_3.play();
    break;
    case "l":
    var tom_4=new Audio("kick-bass.mp3");
    tom_4.play();
    break;
  }

}

function ButtonAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add('pressed');
  setTimeout(function(){
    activeButton.classList.remove('pressed');
  },100);
}