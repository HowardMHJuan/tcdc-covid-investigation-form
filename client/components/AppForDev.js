import React, { Component } from 'react';

import FormPage from './FormPage';

import '../scss/style.scss';

/**
 * This Component is Only used in development stage. It switches between pages.
 * @extends Component */
class AppForDev extends Component {
  /**
   * @param {object} props - The props used to construct. */
  constructor(props) {
    super(props);
    this.state = {
      mode: 0,
    };
    this.changeMode = this.changeMode.bind(this);
    this.renderPages = this.renderPages.bind(this);
  }

  /**
   * It changes the value of this.state.mode and used it to switch between pages.
   * this.state.mode === 0 -> FormPage
   * @param {number} mode - the page's mode we want to switch into */
  changeMode(mode) {
    this.setState({ mode });
  }

  /**
   * render the current page of this.state.mode
   * @return {JSX} - A syntax extension to JavaScript, which will be eventually compiled
   * into html code. */
  renderPages() {
    if (this.state.mode === 0) {
      return <FormPage />;
    }
  }

  /**
   * @return {JSX} - A syntax extension to JavaScript, which will be eventually compiled
   * into html code. */
  render() {
    return (
      <div>
        <button onClick={() => { this.changeMode(0); }}>FormPage</button>
        {this.renderPages()}
      </div>
    );
  }
}

export default AppForDev;
