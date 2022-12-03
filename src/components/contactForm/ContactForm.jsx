import emailjs from 'emailjs-com';
import { useState } from 'react';
const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const sendMessage = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_dgntf1t',
        'template_2pdyx2n',
        e.target,
        'sqekrPvJQvrJNYnvU'
      )
      .then((res) => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 10000);
      })
      .catch((er) => console.log(er));
  };
  return (
    <>
      <div className="container">
        <h2>
          Contact
          <br /> form
        </h2>
        <p>
          If you have anything to ask,
          <br /> offer or just to say hello=)
        </p>
        <form onSubmit={sendMessage}>
          <div className="row100">
            <div className="col">
              <div className="inputbox">
                <input type="text" name="name" required />
                <span className="text">Name</span>
                <span className="line"></span>
              </div>
            </div>
            <div className="col">
              <div className="inputbox">
                <input type="text" name="email" required />
                <span className="text">Email</span>
                <span className="line"></span>
              </div>
            </div>
            <div className="col">
              <div className="inputbox textarea">
                <textarea required name="message" />
                <span className="text">message</span>
                <span className="line"></span>
              </div>
            </div>
            <div className="row100">
              <div className="col">
                <input type="submit" value="Send" />
              </div>
              <div className="emailSend">
                {success ? (
                  <div className="successEmail">
                    Email has been sent,
                    <div>
                      <span className="hiddenEmail">
                        be sure I will respond ASAP
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
