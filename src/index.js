import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globalStyle'
import Routes from './routes'

ReactDOM.render(<><Routes /> <GlobalStyle /></>, document.getElementById("root"));

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/



