import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormPage from '../components/FormPage';
// import '../scss/style.scss';

const redirect = (mode, props) => {
  if (mode === 1) {
    if (props.error) {
      window.location.href = `/submitted?error=${props.error}`;
    } else {
      window.location.href = '/submitted';
    }
  } else {
    window.location.href = '/search';
  }
};

render(<FormPage changeMode={redirect} />, document.getElementById('root'));
