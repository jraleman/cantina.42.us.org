import React from 'react';

// Components
import Title from './components/Title';

class App extends React.Component {
  render() {
    return (
      <div>
        <Title
          text="This is a title"
          description="this is a subtitle"
        />
      </div>
    );
  }
}

export default App;
