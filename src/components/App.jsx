import React from 'react';
import { ApiContext, ApiContextProvider } from '../context/ApiContext';
import { Location } from './Location';
import { CurrentWeather } from './CurrentWeather';
import { Hourly } from './Hourly';
import { Daily } from './Daily';
import { Loading } from './Loading';
import { Map } from './Map';

import '../styles/App.css';
import { Footer } from './Footer';
import { useContext } from 'react';
import { ThemeButton } from './ThemeButton';

function App() {
	const { loading, themeDark } = useContext(ApiContext);
	const rootElement = document.getElementById('app');
	if(themeDark) {
		rootElement.classList.add('dark');
	} else {
		rootElement.classList.remove('dark');
	}
	
	return (
		<>
			<div className='app'>
				{loading && <Loading />}
				<Location />
				<div className='current__details'>
					<CurrentWeather />
					<Hourly />
					<Daily />
					<Map />
				</div>
				<Footer />
				<ThemeButton />
			</div>
		</>
	);
}

export { App };
