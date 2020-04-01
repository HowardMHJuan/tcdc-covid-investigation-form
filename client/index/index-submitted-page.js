import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubmittedPage from '../components/SubmittedPage';
// import '../scss/style.scss';

const redirect = () => { window.location.href = '/form'; };

render(<SubmittedPage changeMode={redirect} />, document.getElementById('root'));
