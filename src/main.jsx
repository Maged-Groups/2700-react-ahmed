import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css';
import App from './App.jsx'

// React Router
import { BrowserRouter } from 'react-router';

// Redux
import { Provider } from 'react-redux';
import store from './redux/';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
