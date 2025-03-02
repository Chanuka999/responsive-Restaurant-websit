import React from "react";

function Contact() {
  return (
    <div id="contact">
      <h1>BOOK YOUR TABLE</h1>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="type your email" />
        <textarea placeholder="write here..."></textarea>
        <input type="submit" value="Book" />
      </form>
    </div>
  );
}
export default Contact;
