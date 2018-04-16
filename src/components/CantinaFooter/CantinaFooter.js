import React from 'react';

class CantinaFooter extends React.Component {
  render() {
    return (
      <footer id="footer" className="footer text-center">
        <div className="footer-top">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="widget wow jackInTheBox text-center">
                <a
                  target="_blank"
                  href="https://42schoolsiliconvalley.slack.com/messages/_cantina/"
                >
                  <h4 className="widget-title">La Cantina @ Slack</h4>
                  <div className="social-list">
                    <i className="fab fa-slack" />
                  </div>
                  <br />
                </a>
                <address>
                  Nostromo 42<br />34793 Ardentech Ct,<br />Fremont, CA 94555
                </address>
                <p className="credits copyright clear-float">
                  <a href="https://scarletbytes.com/">
                    <img
                      src="images/logos/scarletbytes.png"
                      alt="scarletbytes logo"
                      style={{
                        width: "150px",
                        height: "auto",
                        paddingBottom: "10px"
                      }}
                    />
                  </a>
                  <br />
                  <a href="https://jraleman.com/">by jraleman</a>
                  <br />
                  2018
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default CantinaFooter;
