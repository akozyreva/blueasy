 $(document).ready(function() {

     function blueasyMenu() {
        //в html специально прописали классы кот будут использоваться в джекуери
         var $trigger = $('.trigger-nav'),
             $menu = $('.trigger-victim');

         $trigger.click(function() {
            //slideToggle - сворачивание и разворачивание элементов
             //меняет с дисплей нон на дисплей блок
             $(this).next($menu).slideToggle();
         });
            //если вдруг окно расширилось, то у меню убить стили и оно из-за этого просто исчезает!
         $(window).resize(function() {
             if ($(window).width() > 992) {
                 $menu.removeAttr('style');
             }
         });
     }
     blueasyMenu();
 });