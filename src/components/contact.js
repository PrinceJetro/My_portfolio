import React from "react";

export default function Contact(){
    return(
        <div className="row">
            <div class="contact col-md-12">
            <h1>Get In Touch</h1>
  <form action="mailto:adegbuyijephthah@gmail.com" method="POST">  
    <textarea id="subject" name=" " required placeholder="Write something.."></textarea>
    <input type="submit" value="Submit"/>
  </form>
</div>
        </div>

    )
}