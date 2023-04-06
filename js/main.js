// Асинхронность, промисы и HTTP.  Домашняя работа

// Задание №1
// Создать программу - список покемонов.

// Пример:
// Bulbasaur
// Ivysaur
// Venusaur
// Charmander
// Charmeleon
// Charizard
// Squirtle
// … и т.п.

// При клике на имя покемона, показать рядом (в соседнем div-е) или во всплывающем
// окне информацию об этом покемоне, например:

// Имя: Charmeleon
// Тип: fire
// Рост: 11
// Вес: 190
// Изображение покемона (дополнительно)

// Указания:
// Список покемонов (первые 20 штук) получить через запрос к API:
// https://pokeapi.co/api/v2/pokemon
// Информацию о каждом покемоне получать через запрос к API:
// https://pokeapi.co/api/v2/pokemon/{id}/
// где {id} - номер покемона
// Подсказка об используемых ключах результата
// (предположим что полученный объект у вас лежит в переменной result)
// Изображение: result.sprites.front_default
// Имя: result.name
// Тип: массив result.types. Из каждого элемента массива можно взять только type.name
// Рост: result.height
// Вес: result.weight

// Дополнительно:
// Используя ссылку на следующую страницу в результате (ссылку на API следующих
// результатов) реализовать пагинацию (постраничный вывод) в программе, т.е.:
// На клик по ссылке “Next” делать запрос на следующие 20 штук, заменять текущий список.
// Реализовать “Previous” и “Next” - возможность возвращаться на страницу ранее
let div = document.querySelector(".pok");
let div2 = document.querySelector(".pok div");
let li = document.querySelector("li");

let pok = fetch("https://pokeapi.co/api/v2/pokemon", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
});
pok
  .then((res) => res.json())
  .then((info) => {
    info.results.forEach((elem) => {
      div.innerHTML += `<div>${elem.name}</div>
      `;
    });
  });

console.log(li);
