const ContactForm = () => {
  return (
    <>
      <div className="container">
        <h2>Contact form</h2>
        <p>If you have anything to ask, offer or just to say hello=)</p>
        <div className="row100">
          <div className="col">
            <div className="inputbox">
              <input type="text" name="" required />
              <span className="text">Name</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputbox">
              <input type="text" name="" required />
              <span className="text">Email</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputbox textarea">
              <textarea required />
              <span className="text">message</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="row100">
            <div className="col">
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
