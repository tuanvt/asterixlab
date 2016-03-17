import React from 'react';

class ContactUsSection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div id="contact" className="w-section section-imp">
        <div className="w-container">
          <div>
            <div className="title-wrapper">
              <h2>contact us</h2>
              <div className="sub-text-title">We&#39;d love to hear from you.</div>
              <div><img src="images/sub-handmade.png" alt="handmade" />
              </div>
            </div>
            <div>
              <div data-widget-latlng="21.069022,105.8205503" data-widget-style="roadmap" data-widget-zoom={14} data-disable-scroll={1} className="w-widget w-widget-map" />
            </div>
            <div className="port-item-spc">
              <div>
                <form id="email-form" name="email-form" method="POST" data-name="Email Form" className="w-clearfix">
                  <div className="w-row contact-bottom-spc">
                    <div className="w-col w-col-4">
                      <label htmlFor="name" className="post-title">Name:</label>
                      <input className="w-input text-field" id="name" type="text" placeholder="Enter your name" name="name" data-name="Name" required />
                    </div>
                    <div className="w-col w-col-4">
                      <label htmlFor="email" className="post-title">Email Address:</label>
                      <input id="email" type="email" placeholder="Enter your email address" name="email" data-name="Email" required className="w-input text-field" />
                    </div>
                    <div className="w-col w-col-4">
                      <label htmlFor="Subject" className="post-title">subject:</label>
                      <input className="w-input text-field" id="subject" type="text" name="subject" placeholder="Enter your subject" data-name="Subject" />
                    </div>
                  </div>
                  <label htmlFor="Text-Area" className="post-title">Message:</label>
                  <textarea id="text-area" name="message" required placeholder="Your message here..." data-name="Text Area" className="w-input text-field text-area" defaultValue={""} />
                  <button className="w-button button" type="submit">Submit Message</button>
                </form>
                <div id="result" />
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default ContactUsSection;
