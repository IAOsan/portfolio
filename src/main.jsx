import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppContextProvider from './context/App.context';
import './sass/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AppContextProvider>
			<App />
		</AppContextProvider>
	</React.StrictMode>
);
