var msek = 0;
var sek = 0;
var min = 0;
var hr = 0;
var msI;
var sI;
var mI;
var hI;

// Считает милисекунды:
function ms() {
  msek++;
  if(msek > 999) {
    msek = 0;
  }
  if(msek < 10) {
    msek = '00' + msek;
  } else if(msek < 100) {
    msek = '0' + msek;
  } else {
    msek = msek;
  };
  var millisecond = document.getElementById('millisecond');
    millisecond.innerHTML = msek;
  };

//  Считает секунды:
  function s() {
    sek++;
    if(sek > 59) {
      sek = 0;
    }
    if(sek < 10) {
      sek = '0' + sek;
    };
    var second = document.getElementById('second');
    second.innerHTML = sek;
  };

// Считает минуты:
  function m() {
    min++;
    if(min > 59) {
      min = 0;
    }
    if(min < 10) {
      min = '0' + min;
    };
    var minutes = document.getElementById('minutes');
    minutes.innerHTML = min;
  };

// Считает часы:
  function h() {
    hr++;
    var hour = document.getElementById('hour');
    hour.innerHTML = hr;
  };

// Запускает таймер:
function timer() {
   msI = setInterval(ms, 1);
   sI = setInterval(s, 1000);
   mI = setInterval(m, 60000);
   hI = setInterval(h, 3600000);
   start.innerHTML = 'pause';
   k++;
}

// Делает паузу:
function timeout() {
    clearInterval(msI);
    clearInterval(sI);
    clearInterval(mI);
    clearInterval(hI);
    start.innerHTML = 'start';
    k++;
  }

// Кнопка START/PAUSE:
  var k = 0;
  var start = document.getElementById('start');
  start.onclick = function() {
    if(k % 2 == 0) {
      timer();
    } else {
      timeout();
      scrin();
    }
}

// Обнуляет время:
var container = document.getElementById('container');
  function res() {
    msek = 0;
    sek = 0;
    min = 0;
    hr = 0;
    millisecond.innerHTML = '000';
    second.innerHTML = '00';
    minutes.innerHTML = '00';
    hour.innerHTML = '00';
    k = 1;
    j = 0;
    container.remove();
    container = document.createElement('div');
    var body = document.body;
    body.appendChild(container);
    timeout();
  }

//  Кнопка RESET:
  var reset = document.getElementById('reset');
  reset.onclick = res;

// Делает скрин:
  var text;
  var j=0;
  function scrin() {
    j++;
    text = document.createElement('p');
    text.className = ('scrin');
    text.innerHTML = j + ' Split: ' + hour.innerHTML + ':' + minutes.innerHTML + ':' + second.innerHTML + '.' + millisecond.innerHTML;
    container.appendChild(text);
  }

  // Кнопка SPLIT:
  var split = document.getElementById('split');
  split.onclick = scrin;
