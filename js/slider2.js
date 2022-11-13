const items2 = document.querySelectorAll('.slider2 img');
const itemCount2 = items2.length;
const nextItem2 = document.querySelector('.next2');
const previousItem2 = document.querySelector('.previous2');
let count2 = 0;

function showNextItem2() {
  items2[count2].classList.remove('active2');

  if(count2 < itemCount2 - 1) {
    count2++;
  } else {
    count2 = 0;
  }

  items2[count2].classList.add('active2');
  console.log(count2);
}

function showPreviousItem2() {
  items2[count2].classList.remove('active2');

  if(count2 > 0) {
    count2--;
  } else {
    count2 = itemCount2 - 1;
  }

  items2[count2].classList.add('active2');
  console.log(count2);
}

function keyPress2(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem2();
  } else if (e.keyCode == '39') {
    showNextItem2();
  }
}

nextItem2.addEventListener('click', showNextItem2);
previousItem2.addEventListener('click', showPreviousItem2);
document.addEventListener('keydown', keyPress2);