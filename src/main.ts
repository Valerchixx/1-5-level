import * as moment from 'moment';

/* function sayHello(name: string) {
  return `Hello from ${name}`;
} */

/* function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = sayHello(name);
}
showHello("greeting", "JavaScript"); */

/* timer */

const btnPlus: HTMLElement = document.getElementById('btn_plus');
const btnMinus: HTMLElement = document.getElementById('btn_minus');
const btnStart: HTMLElement = document.getElementById('btn_start');
const showTimer = document.getElementById('show_timer');

function showTime(seconds:number) {
  let min:string | number = seconds / 60;

  if (min < 10) {
    min = `0${Math.floor(seconds / 60)}`;
  } else {
    min = Math.floor(seconds / 60);
  }

  let sec: string | number = seconds % 60;
  if (sec < 10) {
    sec = `0${seconds % 60}`;
  } else {
    sec = seconds % 60;
  }
  return `${min}:${sec}`;
}

let count = 0;
showTimer.innerText = `${count}`;

btnPlus.addEventListener('click', () => {
  count += 1;
  showTimer.innerText = `${count}`;
});

btnMinus.addEventListener('click', () => {
  if (count > 0) {
    count -= 1;
    showTimer.innerText = `${count}`;
  }
});

function startTime() {
  const timeStop = moment().add(count * 60 + 1, 'seconds');
  showTimer.innerText = showTime(count * 60);
  btnPlus.style.visibility = 'hidden';
  btnMinus.style.visibility = 'hidden';
  btnStart.style.visibility = 'hidden';

  const id: number = setInterval(() => {
    const timer = moment().diff(timeStop, 'seconds') * -1;
    showTimer.innerText = showTime(timer);

    if (timer <= 0) {
      clearInterval(id);
      showTimer.innerText = `${0}`;
      btnPlus.style.visibility = 'visible';
      btnMinus.style.visibility = 'visible';
      btnStart.style.visibility = 'visible';
    }
  }, 1000);
}

btnStart.addEventListener('click', () => {
  startTime();
});

/**
* This function converts number of seconds in to proper time (minutes:seconds).
* @param seconds number of seconds
* @returns string that contains minutes and seconds
*/
