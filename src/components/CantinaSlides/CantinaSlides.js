import React from 'react';

class CantinaSlides extends React.Component {
  render() {
    return (
      <section id="slideshow">
        <div className="container wow fadeIn">
          <div className="row">
            <div className="col-md-12">
              <ul className="pgwSlider">
                <li>
                  <img src="images/cantina.jpg" />
                  <span>La Cantina</span>
                </li>
                <li>
                  <img src="images/meals/breakfast.jpg" />
                  <span>Breakfast</span>
                </li>
                <li>
                  <img src="images/meals/lunch.jpg" />
                  <span>Lunch</span>
                </li>
                <li>
                  <img src="images/meals/dinner.jpg" />
                  <span>Dinner</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CantinaSlides;
