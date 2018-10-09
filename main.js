// Разработайте страницу, разместите на ней четыре кнопки – «вверх», «вниз», «влево», «вправо».
//  Поместите на странице div с текстом. При нажатии на кнопки должна запускаться анимация,
//   которая перемещает div на 100 px в соответствующем направлении. 

// 1. захватываем все кнопки
var buttons = document.getElementsByTagName("button");
var div = document.getElementsByTagName("div");
var x = 0;
var y = 0;

// 2. создаем анонимные функции перемещения при нажатии на кнопки

buttons[0].onclick =  () => {
    y -=10;
    div[0].style.top = y + "px";
 };
buttons[1].onclick =  () => {
    y +=10;
    div[0].style.top = y + "px";
 };
buttons[2].onclick =  () => {
    x +=10;
    div[0].style.left = x + "px";
 };
buttons[3].onclick =  () => {
    x -=10;
    div[0].style.left = x + "px";
 };










// Разработайте сценарий, который каждую секунду будет случайным образом менять положение
//  трех элементов div. Задайте элементам фиксированную ширину и высоту и запустите сценарий
//   при загрузке страницы

// // 1. достаем дивы в переменную
// var divs = document.getElementsByTagName("div"); 

// // 2. создаем функцию которая проходит по дивам и меняет координаты

// function changeLocations() {
//     for (let index = 0; index < 3; index++) {
//         divs[index].style.right=Math.random()*100+"%";
//         divs[index].style.top=Math.random()*100+"%"
      
//     }
// }

// // 3. вызываем функцию каждую секунду

// var s = setInterval(changeLocations, 300);