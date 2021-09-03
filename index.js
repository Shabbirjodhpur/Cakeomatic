var buttons = document.querySelectorAll('.my-btn');

for(var i = 0;i<buttons.length;i++){
  buttons[i].addEventListener('click',redirect);
}

function redirect(){
  window.open('https://www.instagram.com/cakeomatic.53/');
}

var main = document.getElementById('main');
var one = document.getElementById('1');
var cakeList = document.getElementById('cake-list');
function myfunc(n,cakename,cakedescription,price){
  main.classList.add("body-hide");
  one.childNodes[1].childNodes[1].childNodes[5].childNodes[1].innerText = cakename;
  one.childNodes[1].childNodes[1].childNodes[7].childNodes[1].innerText = cakedescription;
  one.childNodes[1].childNodes[1].childNodes[9].childNodes[1].innerText = `Price = Rs.${price}`
  one.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].src=`images/s${n}.png`;
  one.style.visibility="visible";
}
function closeSection(){
  //hide section
  one.style.visibility="hidden";
  //make main visible
  main.classList.remove("body-hide");
}
function activatecategory(n) {
  var list = document.querySelectorAll('.category');
  for(var i = 0;i<4;i++) {
    list[i].classList.remove('category-active');
  }
  list[n-1].classList.add('category-active');
  
  for(var i = 1;i<=4;i++){
    document.getElementById(`category${i}`).style.display="none";
  }
  document.getElementById(`category${n}`).style.display="block";
}

for(var i = 1;i<=4;i++){
  document.getElementById(`category${i}`).style.display="none";
}
document.getElementById(`category${1}`).style.display="block";