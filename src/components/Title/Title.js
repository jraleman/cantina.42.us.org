import React from 'react';
//import css from './styles.css';

export default class Title extends React.Component {
  constructor(props) {
    super(props);
    this._text = this.props.text;
    this._description = this.props.description;
    return ;
  }
  render() {
    return (
      <div className="col-md-12 text-center title">
        <h2>{ this._text }</h2>
        <p>{ this._description }</p>
      </div>
    );
  }
};
