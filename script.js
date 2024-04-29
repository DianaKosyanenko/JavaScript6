{/* <p class="super_element">Привет</p>

<img src="https://placeimg.com/50/50/animals" alt="">
<img src="https://placeimg.com/50/50/arch" alt="">
<img src="https://placeimg.com/50/50/nature" alt="">
<img src="https://placeimg.com/50/50/people" alt="">
<img src="https://placeimg.com/50/50/tech" alt="">
<img src="https://placeimg.com/50/50/tech/grayscale" alt="">
<img src="https://placeimg.com/50/50/tech/sepia" alt="">

<br>

<button>Кнопка</button>
<button class="super_element">Кнопка с классом btn</button>
<button>Кнопка</button>

<br>

<textarea></textarea>

<br>

<ul>
<li>
<button>Кнопка 1</button>
</li>
<li>
<button>Кнопка 2</button>
</li>
<li>
<button>Кнопка 3</button>
</li>
<li>
<button>Кнопка 4</button>
</li>
</ul>

<script>
"use strict";
```


1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.


2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
- Класс "super_element" присутствует в элементе "div".
- сообщение должно определять присутствует или отсутствует класс "super_element"
- у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
- которому был совершен клик.
- Необходимо использовать делегирование.

4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li. */}
"use strict";
//1
// document.addEventListener('DOMContentLoaded',  () => {
//     console.log("все теги прогрузились");
    
// })
// //2
// window.addEventListener('load', () => {
//     console.log('страница загрузилась');
// })

// //4
// const textAr = document.querySelector('textarea')
// textAr.addEventListener('mouseover',function () {
//     console.log('Вы навели на textarea');   
// })

// //5
ulEl = document.querySelector('ul')
ulEl.addEventListener('click', function (e) {
    if(e.target.tagName != "BUTTON"){
        return;
    }
    console.log(e.target.innerHTML);
    
})

// //7
// const newEl = document.querySelectorAll('li:nth-child(2n)');
//      newEl.forEach(el => {
//         el.style.background = 'red';
    
// });





// const listColor = document.querySelectorAll('li:nth-child(2n)');
// listColor.forEach(el => {
//     el.style.backgroundColor = 'red';
// });
  
//3

document.addEventListener('click', function (e) {
    const clickEl = e.target.classList.contains('super_element')?'присутствует':'отсутствует';
    console.log(`Класс super-elememt ${clickEl} в элементе ${e.target.tagName.toLowerCase()}`);  

});