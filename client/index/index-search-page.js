import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchPage from '../components/SearchPage';
// import '../scss/style.scss';

const redirect = (mode, props) => {
  if (mode === 0) {
    window.location.href = `/form?id=${props.id}&name=${props.name}`;
  }
};

render(<SearchPage changeMode={redirect} />, document.getElementById('root'));
