import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormPage from '../components/FormPage';
// import '../scss/style.scss';

const redirect = () => { window.location.href = '/submitted'; };

render(<FormPage changeMode={redirect} />, document.getElementById('root'));
