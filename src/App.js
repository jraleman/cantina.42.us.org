import React from 'react';

// Sections
import CantinaBanner from './components/CantinaBanner';
import CantinaCarte from './components/CantinaCarte';
import CantinaSlides from './components/CantinaSlides';
import CantinaRules from './components/CantinaRules';
import CantinaFAQ from './components/CantinaFAQ';
import CantinaFooter from './components/CantinaFooter';

class App extends React.Component {
  render() {
    return (
      <div>
        <CantinaBanner />
        <CantinaCarte />
        <CantinaSlides />
        <CantinaRules />
        <CantinaFAQ />
        <CantinaFooter />
      </div>
    );
  }
}

export default App;
