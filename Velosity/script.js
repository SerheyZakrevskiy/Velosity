const tabsBtns = document.querySelectorAll(".tabs-nav button");
// console.log(tabsBtns);
const tabsItems = document.querySelectorAll(".tabs-item");
// console.log(tabsItems);

// Функция скрывает табы и убирает active у кнопок

function hideTabs() {
  tabsItems.forEach((item) => item.classList.add("hide"));
  tabsBtns.forEach((item) => item.classList.remove("active"));
}

function showTab(index) {
  tabsItems(index).classList.remove("hide");
}
hideTabs();
showTab(1);
