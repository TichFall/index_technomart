const nextIcon = '<img src="img/left-nav.png" alt:"left">';
const prevtIcon = '<img src="img/right-nav.png" alt:"right">';

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    dots: true,
    nav: true,
    loop: true,
    navText: [nextIcon, prevtIcon],
  });
});

let popupMapOpen = document.querySelector("#popup__map");
let popupMapBtn = document.getElementById("myBtn");

popupMapBtn.addEventListener("click", function () {
  popupMapOpen.classList.remove("hidden");
});

function addToggle(selector, option) {
  document.querySelectorAll(selector).forEach((closeButton) => {
    closeButton.addEventListener("click", function (e) {
      if (e.target == closeButton) {
        let id = closeButton.dataset.popupid;
        let element = document.getElementById(id);
        element.style.visibility = option;
      }
    });
  });
}
addToggle(".js-popup-close", "hidden");
addToggle(".popup__show", "visible");
document.querySelectorAll(".tabs-triggers__item").forEach((item) =>
  item.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelectorAll(".tabs-triggers__item")
      .forEach((child) =>
        child.classList.remove("tabs-triggers__item--active")
      );
    document
      .querySelectorAll(".tabs__block")
      .forEach((child) => child.classList.remove("tabs__block--active"));
    item.classList.add("tabs-triggers__item--active");
    const id = e.target.getAttribute("href").replace("#", "");
    document.getElementById(id).classList.add("tabs__block--active");
  })
);
let burger = document.querySelector(".burger-nav");
let navBg = document.querySelector(".nav-background");
function toggle() {
  burger.classList.toggle("active");
  navBg.classList.toggle("active");
}
burger.addEventListener("click", toggle);
navBg.addEventListener("click", toggle);

let sorting = document.querySelector(".sorting__heading");
let sorting_menu = document.querySelector(".catalog-sorting");
function toggleSorting() {
  sorting.classList.toggle("active");
  sorting_menu.classList.toggle("active");
}
sorting.addEventListener("click", toggleSorting);
sorting_menu.addEventListener("click", toggleSorting);

/* closePopup(".nav-background"); */
/* let popup = document.querySelectorAll(".popup");
document.addEventListener("click", function (e) {
  if (e.target == popup) {
    popup.style.visibility = "hidden";
  }
}); */
/*  let popupMap = document.getElementById('popup__map'),
       popupClick = document.getElementById ('btnMap'),
       popupCloseMap = document.querySelector ('.close__map')

       popupClick.onclick = function (){
         popupMap.style.visibility="visible"
       };
       popupCloseMap.onclick = function(){
         popupMap.style.visibility="hidden";
       } */

/* document.addEventListener("click", function (e) {
    if (e.target == popupMap) {
      let popupMap = document.getElementById("popup__map");
      popupMap.style.visibility = "hidden";
    }
  }); */

/* $(document).ready(function(){
        $('.tabs-triggers__item').click(function(e){
          e.preventDefault();
          alert('1')
          $('.tabs-triggers__item').removeClass('tabs-triggers__item--active');
          $('.tabs__block').removeClass('tabs-block--active');

          $(this).addClass('tabs-triggers__item--active');
          $($(this).attr('href')).addСlass('tabs-block--active')
        })
        $('.tabs-triggers__item:first').click();
       })   */
