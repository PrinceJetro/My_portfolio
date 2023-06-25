import React from "react";

export default function Contact() {
  function whatsapp() {
    var content = document.getElementById("subject").value;
    var url =
      "https://wa.me/+2348088981691?text=" + encodeURIComponent(content);

    window.open(url, "_blank").focus();
  }

  return (
    <div className="row">
      <div class="contact col-md-12">
        <h1>Get In Touch</h1>
        <form>
          <textarea id="subject" name="subject" required placeholder="Write something.."></textarea>
          <button type="button" onClick={whatsapp}>Submit</button>
        </form>
      </div>
    </div>
  );
}
