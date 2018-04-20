import React from 'react';

class CantinaCarte extends React.Component {
  render() {
    return (
      <section id="carte">
        <div className="container wow slideInRight">
          <div className="row">

            <div className="col-md-12 text-center">
              <h2>Menu</h2>
              <p>Take a look at our delicious meals!</p>
            </div>

            <div className="col-md-12 text-center" id="menu-filters">
              <ul>
                <li>
                  <a className="filter active" data-filter=".menu-item">
                    Show All
                  </a>
                </li>
                <li>
                  <a className="filter" data-filter=".breakfast">
                    Breakfast
                  </a>
                </li>
                <li>
                  <a className="filter" data-filter=".lunch">
                    Lunch
                  </a>
                </li>
                <li>
                  <a className="filter" data-filter=".dinner">
                    Dinner
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-12 text-center" id="menu-wrapper">

              <div className="breakfast menu-item">
                <span className="clearfix">
                  <span className="menu-title text-left">
                    Pancakes with Waffles
                  </span>
                  <span className="menu-line" />
                  <span className="menu-price">$4</span>
                </span>
                <span className="menu-subtitle text-left">
                  <strong>Feb 24 -> </strong> 07:00 - 09:00
                </span>
              </div>

              <div className="lunch menu-item">
                <span className="clearfix">
                  <span className="menu-title text-left">
                    Burger with "Special" Mushrooms
                  </span>
                  <span className="menu-line" />
                  <span className="menu-price">$6</span>
                </span>
                <span className="menu-subtitle text-left">
                  <strong>Feb 24 -> </strong> 12:00 - 14:00
                </span>
              </div>

              <div className="dinner menu-item">
                <span className="clearfix">
                  <span className="menu-title text-left">
                    Pasta a la Pingatare
                  </span>
                  <span className="menu-line" />
                  <span className="menu-price">$6</span>
                </span>
                <span className="menu-subtitle text-left">
                  <strong>Feb 24 -> </strong> 17:00 - 19:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CantinaCarte;
