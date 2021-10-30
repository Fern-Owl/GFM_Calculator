function calcActivator() {
  // Ввод чисел и выбор операции.
  let num1 = prompt("Введите первое число:");
  let operator = prompt("Укажите тип операции (+, -, *, /, %, ^):");
  let num2 = prompt("Введите второе число:");
  // Вызов Калькулятора.
  alert(calculator(operator, num1, num2));
}

function calculator(operator, num1, num2) {
  let result;
  // Проверка на правильность ввода чисел.
  // +num превращается в число если строка состоит из цифр,
  // а если нет - то в NaN.
  // Пустой prompt возвращает пустую строку если нажать ОК
  // и Null если нажать "Отмена".
  if (isNaN(+num1) || isNaN(+num2)) {
    result = "Error";
  } else if (num1 == null || num1 == "") {
    result = "Error";
  } else if (num2 == null || num2 == "") {
    result = "Error";
  } else {
    // Удобная штука, этот switch :)
    // Открыл для себя шаблонные строки.
    // Очень похоже на f-strings в Python.
    switch (operator) {
      case "+":
        result = `${num1} + ${num2} = ${(+num1) + (+num2)}`;
        break;
      case "-":
        result = `${num1} - ${num2} = ${num1 - num2}`;
        break;
      case "*":
        result = `${num1} * ${num2} = ${num1 * num2}`;
        break;
      case "/":
        if (num2 != 0) {
          result = `${num1} / ${num2} = ${num1 / num2}`;
        } else {
          result = `${num1} / ${num2} = ?\nНа ноль делить нельзя!`;
        }
        break;
      case "%":
        if (num2 != 0) {
          result = `${num1} % ${num2} = ${num1 % num2}`;
        } else {
          result = `${num1} % ${num2} = ?\nНа ноль делить нельзя!`;
        }
        break;
      case "^":
        result = `${num1} ^ ${num2} = ${num1 ** num2}`;
        break;
      default:
        result = "unknown operation";
    }
  }
  return result;
}

calcActivator();
