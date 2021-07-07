const hamburger = document.getElementById('hamburger');
const menu_items = document.getElementById('menu-items');
const menu_shop = document.getElementById('menu_shop');
const shop_subcat = document.getElementById('shop_subcategories');


hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('isactive');
    menu_items.classList.toggle('active');
    /* console.log('Menu clicked'); */
  });


menu_shop.addEventListener('click', function() {
    /* hamburger.classList.toggle('isactive'); */
    shop_subcat.classList.toggle('active');
})


