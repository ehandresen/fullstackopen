import ReactDOM from 'react-dom/client';
import App from './App.jsx';

let counter = 1;

const refresh = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App counter={counter} />
  );
};

window.setInterval(() => {
  refresh();
  counter += 1;
}, 1000);
