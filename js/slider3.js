const items3 = document.querySelectorAll('.slider3 img');
const itemCount3 = items3.length;
const nextItem3 = document.querySelector('.next3');
const previousItem3 = document.querySelector('.previous3');
let count3 = 0;

function showNextItem3() {
  items3[count3].classList.remove('active3');

  if(count3 < itemCount3 - 1) {
    count3++;
  } else {
    count3 = 0;
  }

  items3[count3].classList.add('active3');
  console.log(count3);
}

function showPreviousItem3() {
  items3[count3].classList.remove('active3');

  if(count3 > 0) {
    count3--;
  } else {
    count3 = itemCount3 - 1;
  }

  items3[count3].classList.add('active3');
  console.log(count3);
}

function keyPress3(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem3();
  } else if (e.keyCode == '39') {
    showNextItem3();
  }
}

nextItem3.addEventListener('click', showNextItem3);
previousItem3.addEventListener('click', showPreviousItem3);
document.addEventListener('keydown', keyPress3);