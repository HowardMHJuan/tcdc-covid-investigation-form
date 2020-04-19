import React, { Component } from 'react';

import FormPage from './FormPage';
import SubmittedPage from './SubmittedPage';
import SearchPage from './SearchPage';

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
   * @param {number} mode - the page's mode we want to switch into
   * @param {object} props - (optional) the page's props we want to switch into */
  changeMode(mode, props) {
    if (mode === 0) {
      if (props !== undefined) {
        window.history.pushState({}, '', `/?id=${props.id}&name=${props.name}`);
      } else {
        window.location.href = '/';
      }
    } else if (mode === 1 && props !== undefined) {
      window.history.pushState({}, '', `/?error=${props.error}`);
    }
    this.setState({ mode });
  }

  /**
   * render the current page of this.state.mode
   * @return {JSX} - A syntax extension to JavaScript, which will be eventually compiled
   * into html code. */
  renderPages() {
    if (this.state.mode === 0) {
      return <FormPage changeMode={this.changeMode} />;
    } else if (this.state.mode === 1) {
      return <SubmittedPage changeMode={this.changeMode} />;
    } else {
      return <SearchPage changeMode={this.changeMode} />;
    }
  }

  /**
   * @return {JSX} - A syntax extension to JavaScript, which will be eventually compiled
   * into html code. */
  render() {
    return (
      <div>
        <button onClick={() => { this.changeMode(0); }}>FormPage</button>
        <button onClick={() => { this.changeMode(1); }}>SubmittedPage</button>
        <button onClick={() => { this.changeMode(2); }}>SearchPage</button>
        {this.renderPages()}
      </div>
    );
  }
}

export default AppForDev;
