import React from 'react';

class CantinaFAQ extends React.Component {
  render() {
    return (
      <section id="faq">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Frequently Asked Questions</h2>
              <p>There is no such thing as stupid questions...</p>
            </div>
            {}
            <div className="col-md-12">
              <div className="wow fadeInLeft faq-item text-left">
                <i className="fas fa-utensils faq-icon" />
                <span>How can I restore my Cantina pin number?</span>
                <p>
                  Molestias sapiente iusto asperiores ut et ex. Nam distinctio
                  aut aut blanditiis ex nobis voluptates in. Autem architecto
                  quia voluptatem illum corrupti. Provident corporis totam ab
                  qui est iste. Sit et quo cumque.
                </p>
              </div>
            </div>
            {}
            <div className="col-md-12">
              <div className="dropdown wow fadeInLeft faq-item text-left">
                <i className="fas fa-utensils faq-icon" />
                <span>What is the payment method? Is cash allowed?</span>
                <p>
                  Molestias sapiente iusto asperiores ut et ex. Nam distinctio
                  aut aut blanditiis ex nobis voluptates in. Autem architecto
                  quia voluptatem illum corrupti. Provident corporis totam ab
                  qui est iste. Sit et quo cumque.
                </p>
              </div>
            </div>
            {}
            <div className="col-md-12">
              <div className="dropdown wow fadeInLeft faq-item text-left">
                <i className="fas fa-utensils faq-icon" />
                <span>Which are the Marvin factoids for La Cantina?</span>
                <p>
                  - To check the open hours, use: !cantina
                  <br />
                  - To check the menu, use: !menu
                </p>
              </div>
            </div>
            {}
            <div className="col-md-12">
              <div className="dropdown wow fadeInLeft faq-item text-left">
                <i className="fas fa-utensils faq-icon" />
                <span>
                  Do you offer veggie, gluten-free, or other special diets?
                </span>
                <p>
                  Molestias sapiente iusto asperiores ut et ex. Nam distinctio
                  aut aut blanditiis ex nobis voluptates in. Autem architecto
                  quia voluptatem illum corrupti. Provident corporis totam ab
                  qui est iste. Sit et quo cumque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CantinaFAQ;
