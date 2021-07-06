const hamburger = document.getElementById('hamburger');
const menu_items = document.getElementById('menu-items');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('isactive');
    menu_items.classList.toggle('active');
    /* console.log('Menu clicked'); */
  });


