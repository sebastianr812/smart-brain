import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
// import registerServiceWorker from './registerServiceWorker';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import './index.css';

// tachyons imported last so if there is any name conflict with classes
// tachyons will win and our app will stay the same
// same with index css we want that to override everything before it 


const root = createRoot(document.getElementById('root'));

root.render(<App />)

// If using React version lower than 18:
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
