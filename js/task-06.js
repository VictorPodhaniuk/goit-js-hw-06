// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// - Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// - Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const validationInput = document.querySelector('#validation-input').onblur = function() {
  console.log(this.value.length);
  if (this.getAttribute('data-length') > this.value.length) { 
    this.classList.remove('valid');
    this.classList.add('invalid');
  } else {
    this.classList.remove('invalid');
    this.classList.add('valid');
  }
};