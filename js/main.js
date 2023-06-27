const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

function submit(){
  var input= prompt("please verify that you are a human: whats the sum of -1 + 20");
  if(input==19){
    alert("thank you for yout time");
  }else{
    alert("you entered invalid input");
  }
}