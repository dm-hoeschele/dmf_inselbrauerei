app.component('contactForm', {
    template: 
    /* html */
    <div class="contact_us">
        <h3>Contact Us</h3>
        <form
        action="https://demo-inselbrauerei.dmc/resources/php/send.php"
        method="POST"
        class="contact-form">
            <label for="">Your Name:</label>
            <div class="input_name">
                <input type="text" placeholder="Full Name" name="user_name"/>
            </div>
            <label for="">Your E-Mail:</label>
            <div class="interactive-components">
                <input type="text" name="user_email" placeholder="E-Mail"/>
                <label for="">Message:</label>
                <textarea name="user_message" cols="30" rows="10" placeholder="Your message.."></textarea>
                <input type="submit" value="Send" class="submit"/>
            </div>
        </form>
    </div>
})