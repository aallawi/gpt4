import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();



// * We can replace it with this code

// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';
// import './index.css';

// ReactDOM.render( <App />, document.getElementById('root'));