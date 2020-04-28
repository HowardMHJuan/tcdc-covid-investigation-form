import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchPage from '../components/SearchPage';
// import '../scss/style.scss';

const redirect = (mode, props) => {
  if (mode === 0) {
    if (props !== undefined) {
      window.location.href = `/form?id=${props.id}&name=${props.name}`;
    } else {
      window.location.href = '/form';
    }
  }
};

render(<SearchPage changeMode={redirect} />, document.getElementById('root'));
