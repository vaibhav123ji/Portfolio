import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <h2>Contact Me</h2>

      <form>

        <input type="text" placeholder="Your Name"/>

        <input type="email" placeholder="Your Email"/>

        <textarea placeholder="Message"></textarea>

        <button>Send</button>

      </form>

    </section>
  );
}

export default Contact;