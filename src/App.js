import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>

        {/* Banner section */}
        <section id="banner">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center wow pulse">
                <a id="#logo" href="#" onclick="playAudio(this.id);">
                  <img
                    className="logo"
                    src="images/logos/logo-white.svg"
                    alt="cantina-logo"
                  />
                </a>
                <h1>La Cantina</h1>
                <br />
                <a href="dashboard.html" className="btn" target="_self">
                  <i className="fas fa-sign-in-alt" /> Log in
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default App;
