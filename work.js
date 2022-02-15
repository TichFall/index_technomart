
      const nextIcon = '<img src="img/left-nav.png" alt:"right">';
        const prevtIcon = '<img src="img/right-nav.png" alt:"right">';
        
      $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
          items:1,
          dots:true,
          nav:true,
          loop:true,
          navText:[
            nextIcon,
            prevtIcon
          ]
        });
      });
      

      let popup = document.getElementById('popup'),
       popupToggle = document.getElementById ('myBtn'),
       popupClose = document.querySelector ('.close')

       popupToggle.onclick = function (){
         popup.style.visibility="visible"
       };
       popupClose.onclick = function(){
         popup.style.visibility="hidden";
       }
       window.onclick = function (e){
         if (e.target == popup){
          popup.style.visibility="hidden";
         }
       }
       
      /* let popupMap = document.getElementById('popup__map'),
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
       } */