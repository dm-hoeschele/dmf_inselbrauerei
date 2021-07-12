app.component('contact-form', {
    template: 
    /* html */
    `<div class="contact_us">
        <h2 style="padding-top: 16px; text-align: center; font-size: 30px">Contact Us</h2>
        <form
        
        method="POST"
        class="contact-form"
        @submit="submitForm"
        id="contactForm">
            <label for="">Your Name:</label>
            <div class="input_name">
                <input type="text" placeholder="Full Name" name="user_name" id="user_name" v-model="user_name" required/>
            </div>
            <label for="">Your E-Mail:</label>
            <div class="interactive-components">
                <input type="email" name="user_email" placeholder="E-Mail" id="user_email" v-model="user_email" required/>
                <label for="">Message:</label>
                <textarea name="user_message" cols="30" rows="10" placeholder="Your message.." id="user_message" v-model="user_message" required></textarea>
                <button type="submit" class="submit" id="submitBtn" :disbabled="isDisabled">Send</button>
                <span id="status" :style="statusStyle">{{submitStatus}}</span>
            </div>
        </form>
    </div>`,
    data() {
        return {
            submitStatus: "",
            isDisabled: false,
            user_name:"",
            user_email:"",
            user_message:"",
            statusStyle: {
                color: 'green',
                'padding-bottom': '8px'
            }
        }

    },
    methods: {
        /* submit-function */

        submitForm(e) {

            console.log(e);

            e.preventDefault();
            /* to prevent double submitting the form after the first submit*/
            /* submitBtn.disbabled = true; */
            this.isDisabled=true;
            this.submitStatus = 'Successfully send!';



            /* append form-values to the formdata so that i can push it to my .php file */
            const formData = new FormData();
            formData.append('user_name', this.user_name);
            formData.append('user_email', this.user_email);
            formData.append('user_message', this.user_message);
           /*  user_name = this.user_name;
            user_email = this.user_email;
            user_message = this.user_message; */

            /* console.log(`${this.user_name} hat die E-Mailadresse: ${this.user_email} und diese Message hinterlassen: ${this.user_message}`); */

            const ajax = new XMLHttpRequest();
            ajax.open('POST', "https://demo-inselbrauerei.dmc/resources/php/send.php");

            ajax.onreadystatechange = function() {
                /* if state is send and status is ok */
                if(ajax.readyState === 4 && ajax.status === 200) {
                    if (ajax.responseText === "success") {
                    /*  contactForm.innerHTML = `<h2>Thank you, ${contactName}, your message has been send.</h2>` */
                    }else {
                        this.submitStatus = ajax.responseText;
                        this.isDisbabled = false;
                    }
                }
            }

            ajax.send(formData);

            /* resetting the input-fields to blank after the submit is done. */
            this.user_name="";
            this.user_email="";
            this.user_message="";
        }
    }

})
