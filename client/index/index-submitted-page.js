import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubmittedPage from '../components/SubmittedPage';
// import '../scss/style.scss';

const redirect = (mode) => {
  if (mode === 0) {
    window.location.href = '/form';
  } else {
    window.location.href = '/search';
  }
};

render(<SubmittedPage changeMode={redirect} />, document.getElementById('root'));
