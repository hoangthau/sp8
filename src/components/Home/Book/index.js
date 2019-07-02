import React from 'react';
import './Book.scss';

class Book extends React.PureComponent {
  state = {
    name: '',
    email: '',
    phone: '',
    size: 0,
    date: '',
    submitted: false
  };

  setForm(e) {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({ [key]: value });
  }

  submit = () => {
    const { name, email, phone, size, date } = this.state;
    /* eslint-disable */
    emailjs.init('user_hSSuiJwWoVyM5C3AGFECz');
    var payload = {
      from_name: name,
      message_html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone Number: ${phone}</p>
      <p>Team size: ${size}</p>
      <p>Move date: ${date}</p>
      `
    };
    // Your email service name if you just have one, you can use this one.
    var service_id = 'gmail-ht';
    // Template you will use
    var template_id = 'template_MNVDmiDO';
    // Send message using your client
    emailjs.send(service_id, template_id, payload);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <div className="container">
        <div className="book-tour">
          <h2>Book a tour today</h2>
          <p>Schedule a visit with us.</p>
          {this.state.submitted ? (
            <p>Thanks for submitting the form</p>
          ) : (
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full name"
                onChange={e => this.setForm(e)}
              />
              <input
                type="text"
                name="email"
                placeholder="Email address"
                onChange={e => this.setForm(e)}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                onChange={e => this.setForm(e)}
              />
              <div className="input-group">
                <input
                  type="text"
                  name="date"
                  placeholder="Move-in date"
                  onChange={e => this.setForm(e)}
                />
                <input
                  type="number"
                  name="size"
                  placeholder="Team size"
                  onChange={e => this.setForm(e)}
                />
              </div>
              <button onClick={this.submit} className="submit">
                Submit request
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Book;
