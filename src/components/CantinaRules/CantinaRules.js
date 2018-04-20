import React from 'react';

class CantinaRules extends React.Component {
  render() {
    return (
      <section id="rules">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Rules</h2>
              <p>Please follow the rules!</p>
            </div>
          </div>
          <div className="row">

            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeIn">
              <div className="rules-item text-center">
                <a href="#" data-toggle="modal" data-target="#dinnerware">
                  <h3 className="overlay">The Dinnerware</h3>
                  <img src="images/rules/dinnerware.jpg" alt="dinnerware" />
                </a>
              </div>
            </div>

            <div
              className="modal fade"
              id="dinnerware"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="basicModal"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-md">
                <div
                  className="modal-content"
                  style={{
                    color: "#222"
                  }}
                >
                  {}
                  <div className="modal-header">
                    <h3 className="modal-title">Do NOT take out dinnerware.</h3>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  {}
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-6">
                        Dinnerware must stay at the Cantina all time. You are
                        not allowed to take the dinnerware to your room... even
                        if it is filled with food. If you would like to take
                        your food, bring something to take it back with you.
                      </div>
                      <div className="col-md-6">
                        <img
                          src="images/rules/dinnerware.jpg"
                          alt="dinnerware"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeIn">
              <div className="rules-item text-center">
                <a href="#" data-toggle="modal" data-target="#dinnerware">
                  <h3 className="overlay">Clean Up</h3>
                  <img src="images/rules/clean.jpg" alt="clean" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeIn">
              <div className="rules-item text-center">
                <a href="#" data-toggle="modal" data-target="#dinnerware">
                  <h3 className="overlay">No Free Food</h3>
                  <img src="images/rules/steal.jpg" alt="steal" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeIn">
              <div className="rules-item text-center">
                <a href="#" data-toggle="modal" data-target="#dinnerware">
                  <h3 className="overlay">Ask for Help</h3>
                  <img src="images/rules/shy.jpg" alt="shy" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CantinaRules;
