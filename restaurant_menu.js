const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];
const mainCourseMenu = ["Steak", "Pasta", "Burger", "Salmon"];
const dessertMenu = ["Cake", "Ice Cream", "Pudding", "Fruit Salad"];

const breakfastmenuitemhtml = breakfastMenu
  .map((item, index) => `<p>Item ${index + 1}: ${item}</p>`) // map() di ini ( parameter) => ` untuk output ${memanggil variabel}`
  .join("");
document.getElementById("breakfastMenuItems").innerHTML = breakfastmenuitemhtml;

let mainCourseItem = "";
mainCourseMenu.forEach((item, index) => {
  mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`; // mirip di atasnya bedanya ini maincourseraitem kita + dengan item {index} {nama item}
});
document.getElementById("maincourseMenuItems").innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;} // di awal i + 1 karna ini menjalankan 0 sampai dengan panjang array
document.getElementById('dessertMenuItems').innerHTML = dessertItem;