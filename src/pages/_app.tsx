//import '@app/theme/normalize.scss';
//import '@app/theme/global.scss';
//import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import store from './store/store';
//import { store } from '@app/store/store';
//import { ErrorBoundary } from '@app/wrappers/ErrorBoundary';
//import { Layout } from '@app/wrappers/Layout';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
	 
			<Provider store={store}>
			 {<Component {...pageProps} />} 
			</Provider>
	 
	);
}

export default MyApp;