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

function addToggle(selector, option) {
  document.querySelectorAll(selector).forEach((closeButton) => {
    closeButton.addEventListener("click", function (e) {
      let id = closeButton.dataset.popupid;
      let element = document.getElementById(id);
      element.style.visibility = option;
    });
  });
}

addToggle(".js-popup-close", "hidden");
addToggle(".popup__show", "visible");

$(document).ready(function () {
  $(".burger-nav").click(function (event) {
    $(".burger-nav, .nav-background").toggleClass("active");
  });
}),
  /*  let popupMap = document.getElementById('popup__map'),
       popupClick = document.getElementById ('btnMap'),
       popupCloseMap = document.querySelector ('.close__map')

       popupClick.onclick = function (){
         popupMap.style.visibility="visible"
       };
       popupCloseMap.onclick = function(){
         popupMap.style.visibility="hidden";
       }
       window.onclick = function (e){
         if (e.target == popupMap){
          popupMap.style.visibility="hidden";
         }
       }  */

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
