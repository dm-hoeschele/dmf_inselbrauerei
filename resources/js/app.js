/* variables */
const hamburger = document.getElementById('hamburger');
const menu_items = document.getElementById('menu-items');
const menu_shop = document.getElementById('menu_shop');
const shop_subcat = document.getElementById('shop_subcategories');
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById("susubmitBtnb");
const submitStatus = document.getElementById("status");
const contactName = document.getElementById("user_name");
const contactEmail = document.getElementById("user_email");
const contactMessage = document.getElementById("user_message");


if (hamburger) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('isactive');
        menu_items.classList.toggle('active');
        /* console.log('Menu clicked'); */
      });
}


if (menu_shop) {

    menu_shop.addEventListener('click', function() {
        /* hamburger.classList.toggle('isactive'); */
        shop_subcat.classList.toggle('active');
    })
}




