import React from 'react';
import './Book.scss';

import translate from './translate';

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

  submit = (e) => {
    e.preventDefault();
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
    setTimeout(() => {
      this.setState({ submitted: true });
    }, 1000);
  };

  render() {
    return (
      <div className="container">
        <div className="book-tour">
          <h2>{translate('title')}</h2>
          <p>{translate('desc')}</p>
          {this.state.submitted ? (
            <p>Thanks for submitting the form</p>
          ) : (
            <form onSubmit={(e) => this.submit(e)}>
              <input
                type="text"
                name="name"
                placeholder={translate('name')}
                required
                onChange={e => this.setForm(e)}
              />
              <input
                type="text"
                name="email"
                placeholder={translate('email')}
                required
                onChange={e => this.setForm(e)}
              />
              <input
                type="text"
                name="phone"
                placeholder={translate('phone')}
                onChange={e => this.setForm(e)}
              />
              <div className="input-group">
                <input
                  type="text"
                  name="date"
                  placeholder={translate('moveDate')}
                  onChange={e => this.setForm(e)}
                />
                <input
                  type="number"
                  name="size"
                  placeholder={translate('size')}
                  onChange={e => this.setForm(e)}
                />
              </div>
              <button type="submit" className="submit">
              {translate('submit')}
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default Book;
