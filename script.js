var question = {
  name: 'Тест по программированию',
  question0: {
    ask: '1. Вопрос №1',
    answer1: 'Вариант ответа №1',
    answer2: 'Вариант ответа №2',
    answer3: 'Вариант ответа №3',
    trueAnswer: 'Вариант ответа №1'
  },
  question1: {
    ask: '2. Вопрос №2',
    answer1: 'Вариант ответа №1',
    answer2: 'Вариант ответа №2',
    answer3: 'Вариант ответа №3',
    trueAnswer: 'Вариант ответа №2'
  },
  question2: {
    ask: '3. Вопрос №3',
    answer1: 'Вариант ответа №1',
    answer2: 'Вариант ответа №2',
    answer3: 'Вариант ответа №3',
    trueAnswer: 'Вариант ответа №3'
  },
  button: 'Проверить мои результаты'
};

// Создаёт заголовок теста:
function header(obj, place) {
  var h1 = document.createElement('h1');
  h1.innerHTML = obj.name;
  h1.className = 'text-center';
  place.appendChild(h1);
}

// Создаёт вопрос:
function makeQuestion(obj, numberQuestion, place) {
  var h2 = document.createElement('h2');
  h2.innerHTML = obj[numberQuestion].ask;
  place.appendChild(h2);
}

// Считает количество и создаёт ответы:
function answer(obj, numberQuestion, place) {
  for(var key in obj[numberQuestion]){
    var str = key[0] + key[1] + key[2] + key[3] + key[4] + key[5];
    if(str == 'answer') {
      var div = document.createElement('div');
      div.innerHTML = '<label> <input type="radio" name=' + numberQuestion + ' value=' + key + '>' + obj[numberQuestion][key] + '</label>';
      place.appendChild(div);
    }
  }
}

// Считает количество вопросов:
function variants(obj, place) {
  var str = 'question';
  var numberQuestion;
  for(var i = 0; true; i++) {
    if (str + i in obj) {
      numberQuestion = str + i;
    } else {
      break;
    }
    makeQuestion(obj, numberQuestion, place);
    answer(obj, numberQuestion, place);
  }
}

// Создаёт кнопку:
function button(place) {
  var button = document.createElement('button');
  button.type = 'submit';
  button.className = 'btn btn-success btn-lg center-block';
  button.innerHTML = 'Проверить мои результаты';
  place.appendChild(button);
}

// Создаёт форму:
function form() {
  var form = document.createElement('form');
  body = document.body;
  body.appendChild(form);
  header(question, form);
  variants(question, form);
  button(form);
}

form();
